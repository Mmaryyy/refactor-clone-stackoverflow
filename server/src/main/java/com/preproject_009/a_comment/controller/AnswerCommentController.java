package com.preproject_009.a_comment.controller;

import com.preproject_009.a_comment.dto.AnswerCommentDto;
import com.preproject_009.a_comment.entity.AnswerComment;
import com.preproject_009.a_comment.mapper.AnswerCommentMapper;
import com.preproject_009.a_comment.service.AnswerCommentService;
import com.preproject_009.answer.dto.AnswerDto;
import com.preproject_009.answer.entity.Answer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/V1/answerComments")
@Validated
public class AnswerCommentController {
    private final AnswerCommentService answerCommentService;
    private final AnswerCommentMapper answerCommentMapper;

    public AnswerCommentController(AnswerCommentService answerCommentService, AnswerCommentMapper answerCommentMapper) {
        this.answerCommentService = answerCommentService;
        this.answerCommentMapper = answerCommentMapper;
    }

    @PostMapping("/{answer-id}/answerComments")
    public ResponseEntity postAnswerComment(@PathVariable("answer-id") long answerId,
                                            @Valid @RequestBody AnswerCommentDto.Post requestBody) {
        requestBody.setAnswerId(answerId);
        AnswerComment createdAnswerComment = answerCommentService.createAnswerComment(answerCommentMapper.answerCommentPostDtoToAnswer(requestBody));

        return new ResponseEntity<>(answerCommentMapper.answerToAnswerCommentResponse(createdAnswerComment), HttpStatus.CREATED);
    }

    @PatchMapping("/{answerComment-id}")
    public ResponseEntity patchAnswer(@PathVariable("answerComment-id") @Positive long answerCommentId,
                                      @Valid @RequestBody AnswerCommentDto.Patch requestBody) {
        requestBody.setAnswerCommentId(answerCommentId);

        AnswerComment answerComment =
                answerCommentService.updateAnswerComment(answerCommentMapper.answerCommentPatchDtoToAnswer(requestBody));

        return new ResponseEntity<>(answerCommentMapper.answerToAnswerCommentResponse(answerComment), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getAnswers() {
        List<AnswerComment> answerComments = answerCommentService.findAnswerComments();

        return new ResponseEntity<>(answerCommentMapper.answersToAnswerCommentResponses(answerComments), HttpStatus.OK);
    }

    @DeleteMapping("/{answerComment-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answerComment-id") @Positive long answerCommentId) {
        answerCommentService.deleteAnswerComment(answerCommentId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
