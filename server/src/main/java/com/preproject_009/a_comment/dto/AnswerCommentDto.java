package com.preproject_009.a_comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

public class AnswerCommentDto {
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post {
        @Positive
        private long memberId;

        private long answerId;

        @NotBlank
        private String content;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private long answerCommentId;

        @NotBlank
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long answerCommentId;
        private long memberId;
        private String content;
    }
}
