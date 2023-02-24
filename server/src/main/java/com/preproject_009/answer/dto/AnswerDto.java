package com.preproject_009.answer.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.preproject_009.answer.entity.Answer;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.util.Assert;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
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

        @NotNull
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
        @JsonProperty("totalVotes")
        private int totalVotes;
        private Answer.AnswerStatus answerStatus;
<<<<<<< HEAD
        //private LocalDateTime createdAt;
=======
        private LocalDateTime createdAt;
>>>>>>> 4e7034fb5d50f359dd94f1025a61348fd9928be9
        private LocalDateTime modifiedAt;
    }
}
