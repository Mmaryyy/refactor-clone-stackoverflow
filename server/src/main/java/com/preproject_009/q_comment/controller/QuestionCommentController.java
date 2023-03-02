package com.preproject_009.q_comment.controller;

import com.preproject_009.q_comment.dto.QuestionCommentDto;
import com.preproject_009.q_comment.entity.QuestionComment;
import com.preproject_009.q_comment.mapper.QuestionCommentMapper;
import com.preproject_009.q_comment.service.QuestionCommentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/api/questionComments")
@Validated
@CrossOrigin(origins = "http://ec2-3-35-19-166.ap-northeast-2.compute.amazonaws.com:8080", allowedHeaders = "*", exposedHeaders = "Authorization")
public class QuestionCommentController {
    private final QuestionCommentService questionCommentService;
    private final QuestionCommentMapper questionCommentMapper;

    public QuestionCommentController(QuestionCommentService questionCommentService, QuestionCommentMapper questionCommentMapper) {
        this.questionCommentService = questionCommentService;
        this.questionCommentMapper = questionCommentMapper;
    }

    @PatchMapping("/{questionComment-id}")
    public ResponseEntity patchQuestionComment(@PathVariable("questionComment-id") @Positive long questionCommentId,
                                               @Valid @RequestBody QuestionCommentDto.Patch requestBody) {
        requestBody.setQuestionCommentId(questionCommentId);
        QuestionComment questionComment =
                questionCommentService.updateQuestionComment(questionCommentMapper.questionCommentPatchDtoToQuestion(requestBody));

        return new ResponseEntity<>(response(questionComment), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestionComments() {
        List<QuestionComment> questionComments = questionCommentService.findQuestionComments();

        return new ResponseEntity<>(questionCommentMapper.questionCommentsToQuestionCommentResponseDto(questionComments), HttpStatus.OK);
    }

    @DeleteMapping("/{questionComment-id}")
    public ResponseEntity deleteQuestionComment(@PathVariable("questionComment-id") @Positive long qustionCommentId) {
        questionCommentService.deleteQuestionComment(qustionCommentId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    public QuestionCommentDto.Response response(QuestionComment questionComment) {
        return questionCommentMapper.questionCommentToQuestionCommentResponseDto(questionComment);
    }
}
