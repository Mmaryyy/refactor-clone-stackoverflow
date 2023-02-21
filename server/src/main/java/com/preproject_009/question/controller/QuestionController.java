package com.preproject_009.question.controller;

import com.preproject_009.member.entity.Member;
import com.preproject_009.member.repository.MemberRepository;
import com.preproject_009.member.service.MemberService;
import com.preproject_009.question.dto.QuestionDto;
import com.preproject_009.question.entity.Question;
import com.preproject_009.question.mapper.QuestionMapper;
import com.preproject_009.question.repository.QuestionRepository;
import com.preproject_009.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("v1/questions")
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/v1/questions";
    private final QuestionRepository questionRepository;
    private final QuestionMapper questionMapper;
    private final QuestionService questionService;
    private final MemberService memberService;
    private final MemberRepository memberRepository;

    @PostMapping()
    public ResponseEntity postQuestion(@RequestBody @Valid QuestionDto.Post requestBody) {
        Member member = memberService.findMember(1);
        Question question = questionMapper.questionPostDtoToQuestion(requestBody);
        question.setMember(member);
        Question createdQuestion = questionService.createQuestion(question);
        //URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, createdQuestion.getQuestionId());

        return new ResponseEntity<>(response(createdQuestion), HttpStatus.CREATED);
    }

    @PatchMapping("/{question_id}")
    public ResponseEntity patchQuestion(@PathVariable("question_id") @Positive long questionId,
                                        @Valid @RequestBody QuestionDto.Patch requestBody) {
        requestBody.setQuestionId(questionId);
        Question question = questionMapper.questionPatchDtoToQuestion(requestBody);
        Question updatedQuestion = questionService.updateQuestion(question);


        return new ResponseEntity<>(response(updatedQuestion), HttpStatus.OK);
    }

    @GetMapping("/{question_id}")
    public ResponseEntity getQuestion(@PathVariable("question_id") @Positive long questionId) {
        Question question = questionService.findQuestion(questionId);
        questionService.updateView(question);

        return new ResponseEntity<>(response(question), HttpStatus.OK);
    }

    @GetMapping
    public Page<QuestionDto.Response> getQuestions(@RequestParam("page") int page,
                                                   @Nullable @RequestParam("keyword") String keyword,
                                                   @RequestParam("sortType") QuestionController.SortType sortType,
                                                   @RequestParam("filterType") int filterType) {
        Page<Question> questions = questionService.findQuestions(page - 1, keyword, sortType.toString(), filterType);

        Page<QuestionDto.Response> response = questions.map(questionMapper::questionToQuestionResponseDto);

        return response;
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question_id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    public QuestionDto.Response response(Question question) {
        return questionMapper.questionToQuestionResponseDto(question);
    }

    public enum SortType{
        created_At, // 최신순
        modified_At, // 최근 수정순
        total_Vote, // 좋아요순
        view // 조회수순
    }
}
