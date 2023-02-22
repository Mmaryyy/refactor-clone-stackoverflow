package com.preproject_009.answer.dto;

import com.preproject_009.answer.entity.Answer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;

public class AnswerDto {
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
        private int totalVote;
        private Answer.AnswerStatus answerStatus;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
