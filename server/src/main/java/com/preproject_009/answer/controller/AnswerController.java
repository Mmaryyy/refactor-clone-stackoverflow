package com.preproject_009.answer.controller;

import com.preproject_009.a_comment.dto.AnswerCommentDto;
import com.preproject_009.a_comment.entity.AnswerComment;
import com.preproject_009.a_comment.mapper.AnswerCommentMapper;
import com.preproject_009.a_comment.service.AnswerCommentService;
import com.preproject_009.answer.dto.AnswerDto;
import com.preproject_009.answer.entity.Answer;
import com.preproject_009.answer.mapper.AnswerMapper;
import com.preproject_009.answer.service.AnswerService;
import com.preproject_009.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/answers")
@Validated
@RequiredArgsConstructor
public class AnswerController {
    private final static String ANSWER_DEFAULT_URL = "/api/answers";
    private final AnswerService answerService;
    private final AnswerMapper answerMapper;
    private final AnswerCommentService answerCommentService;
    private final AnswerCommentMapper answerCommentMapper;

    
    @PatchMapping("/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive long answerId,
                                      @Valid @RequestBody AnswerDto.Patch requestBody) {
        requestBody.setAnswerId(answerId);

        Answer answer =
                answerService.updateAnswer(answerMapper.answerPatchDtoToAnswer(requestBody));

        return new ResponseEntity<>(response(answer), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAnswers() {
        List<Answer> answers = answerService.findAnswers();

        return new ResponseEntity<>(answerMapper.answersToAnswerResponses(answers), HttpStatus.OK);
    }

    @DeleteMapping("/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive long answerId) {
        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/{answer-id}/answerComments")
    public ResponseEntity postAnswerComment(@PathVariable("answer-id") long answerId,
                                            @Valid @RequestBody AnswerCommentDto.Post requestBody) {
        requestBody.setAnswerId(answerId);
        AnswerComment createdAnswerComment =
                answerCommentService.createAnswerComment(answerCommentMapper.answerCommentPostDtoToAnswer(requestBody));
        URI location = UriCreator.createPostAnswerCommentUri(ANSWER_DEFAULT_URL, createdAnswerComment.getAnswerCommentId());

        return ResponseEntity.created(location).build();
    }

    @PostMapping("/{answer-id}/vote/{member-id}")
    public ResponseEntity postAnswerVote(@PathVariable("answer-id") long answerId,
                                         @PathVariable("member-id") long memberId) {
        answerService.addAnswerVote(answerId, memberId);
        return ResponseEntity.ok().build();
    }

    public AnswerDto.Response response(Answer answer) {
        return answerMapper.answerToAnswerResponse(answer);
    }
}
