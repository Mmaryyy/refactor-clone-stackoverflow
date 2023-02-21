package com.preproject_009.question.controller;

import com.preproject_009.answer.dto.AnswerDto;
import com.preproject_009.answer.entity.Answer;
import com.preproject_009.answer.mapper.AnswerMapper;
import com.preproject_009.answer.service.AnswerService;
import com.preproject_009.member.dto.MultiResponseDto;
import com.preproject_009.member.repository.MemberRepository;
import com.preproject_009.member.service.MemberService;
import com.preproject_009.question.dto.QuestionDto;
import com.preproject_009.question.entity.Question;
import com.preproject_009.question.mapper.QuestionMapper;
import com.preproject_009.question.repository.QuestionRepository;
import com.preproject_009.question.service.QuestionService;
import com.preproject_009.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
@Validated
@RequestMapping("/v1/questions")
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/v1/questions";
    private final QuestionRepository questionRepository;
    private final QuestionMapper questionMapper;
    private final QuestionService questionService;
    private final MemberService memberService;
    private final MemberRepository memberRepository;
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;

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

//    @GetMapping
//    public Page<QuestionDto.Response> getQuestionsV1(@RequestParam("page") int page,
//                                                   @Nullable @RequestParam("keyword") String keyword,
//                                                   @RequestParam("sortType") QuestionController.SortType sortType,
//                                                   @RequestParam("filterType") int filterType) {
//        Page<Question> questions = questionService.findQuestions(page - 1, keyword, sortType.toString(), filterType);
//
//        Page<QuestionDto.Response> response = questions.map(questionMapper::questionToQuestionResponseDto);
//
//        return response;
//    }

    @GetMapping
    public ResponseEntity getQuestions(@RequestParam("page") int page,
                                                   @Nullable @RequestParam("keyword") String keyword,
                                                   @RequestParam("sortType") QuestionController.SortType sortType,
                                                   @RequestParam("filterType") int filterType) {
        Page<Question> questionPage = questionService.findQuestions(page - 1, keyword, sortType.toString(), filterType);
        List<Question> questions = questionPage.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionResponsesDto(questions),
                        questionPage), HttpStatus.OK);
    }
    @DeleteMapping("/{question_id}")
    public ResponseEntity deleteQuestion(@PathVariable("question_id") @Positive long questionId) {
        questionService.deleteQuestion(questionId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/{question-id}/answers")
    public ResponseEntity postAnswerOfQuestion(@PathVariable("question-id") long questionId,
                                               @Valid @RequestBody AnswerDto.Post requestBody) {
        requestBody.setQuestionId(questionId);
        Answer createdAnswer = answerService.createAnswer(answerMapper.answerPostDtoToAnswer(requestBody));
        URI location = UriCreator.createPostAnswerUri(QUESTION_DEFAULT_URL, createdAnswer.getAnswerId());

        return ResponseEntity.created(location).build();
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
