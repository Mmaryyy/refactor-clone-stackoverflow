package com.preproject_009.a_comment.service;

import com.preproject_009.a_comment.entity.AnswerComment;
import com.preproject_009.a_comment.repository.AnswerCommentRepository;
import org.springframework.stereotype.Service;

@Service
public class AnswerCommentService {
    private final AnswerCommentRepository answerCommentRepository;

    public AnswerCommentService(AnswerCommentRepository answerCommentRepository) {
        this.answerCommentRepository = answerCommentRepository;
    }

    public AnswerComment createAnswerComment(AnswerComment answerComment) {
        return null;
    }

    public AnswerComment updateAnswerComment(AnswerComment answerComment) {
        return null;
    }

    public AnswerComment getAnswerComment(long answerCommentId) {
        return null;
    }

    public AnswerComment getAnswerComments() {
        return null;
    }

    public AnswerComment deleteAnswerComment(long answerCommentId) {
        return null;
    }
}
