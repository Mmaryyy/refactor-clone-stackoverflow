package com.preproject_009.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member not found"),
    MEMBER_EXISTS(409, "Member exists"),
    NOT_IMPLEMENTATION(501, "Not Implementation"),
    INVALID_MEMBER_STATUS(400, "Invalid member status"),
    ANSWER_NOT_FOUND(404, "Answer not found"),
    ANSWER_COMMENT_NOT_FOUND(404, "AnswerComment not found"),
    CANNOT_CHANGE_ANSWER(400, "Cannot change answer"),
    QUESTION_NOT_FOUND(404, "Question not found"),
    CANNOT_CHANGE_QUESTION(400, "Cannot change question"),
    QUESTION_COMMENT_NOT_FOUND(404, "QuestionComment not found"),
    MEMBER_ALREADY_VOTED(400, "Member already voted");
    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
