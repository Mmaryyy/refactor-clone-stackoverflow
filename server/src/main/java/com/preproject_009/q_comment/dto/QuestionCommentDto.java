package com.preproject_009.q_comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

public class QuestionCommentDto {
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post {
        @Positive
        private long memberId;
        @Positive
        private long questionId;
        @NotBlank
        private String content;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private long questionCommentId;

        @NotBlank
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long questionCommentId;
        private long memberId;
        private String content;
    }
}
