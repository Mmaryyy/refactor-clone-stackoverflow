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
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;

@RestController
@RequiredArgsConstructor
public class QuestionController {
    private final static String QUESTION_DEFAULT_URL = "/v1/questions";
    private final QuestionRepository questionRepository;
    private final QuestionMapper questionMapper;
    private final QuestionService questionService;
    private final MemberService memberService;
    private final MemberRepository memberRepository;

    @PostMapping(QUESTION_DEFAULT_URL)
    public ResponseEntity postQuestion(@RequestBody QuestionDto.Post requestBody) {
        Member member = memberService.findMember(1);
        Question question = questionMapper.questionPostDtoToQuestion(requestBody);
        question.setMember(member);
        Question createdQuestion = questionService.createQuestion(question);
        //URI location = UriCreator.createUri(QUESTION_DEFAULT_URL, createdQuestion.getQuestionId());

        return new ResponseEntity<>(response(createdQuestion), HttpStatus.CREATED);
    }

    @GetMapping("/v1/questions")
    public Page<Question> getKeyword(@RequestParam("page") int page,
                                     @RequestParam("keyword") String keyword) {
        PageRequest pageRequest = PageRequest.of(page, 5);
        initializing();
        return questionRepository.findByTitleContains(keyword, pageRequest);
    }

    @PostConstruct
    public void initializing() {
        for (int i = 0; i < 100; i++) {
            Question question = new Question();
            question.setTitle("java" + i);
            question.setContent("d");

            questionRepository.save(question);
        }
    }

    public QuestionDto.Response response(Question question) {
        return questionMapper.questionToQuestionResponseDto(question);
    }
}
