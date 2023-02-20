package com.preproject_009.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.util.Assert;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

public class AnswerDto {
    @Getter
    @Setter
    @AllArgsConstructor
    public static class Post {
        @Positive
        private long memberId;

        private long questionId;

        @NotBlank
        private String content;

        // 이거 필요한가?
        /*public void addQuestionId(long questionId) {
            Assert.notNull(questionId, "question id must not be null.");
            this.questionId = questionId;
        }*/
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private long answerId;

        @NotBlank
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long answerId;
        private long memberId;
        private String content;
    }
}
