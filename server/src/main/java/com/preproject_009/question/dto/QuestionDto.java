package com.preproject_009.question.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.preproject_009.answer.entity.Answer;
import com.preproject_009.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        @Positive
        private long memberId;
        @NotNull
        @NotBlank
        private String title;
        @NotNull
        @NotBlank
        private String content;

        //private List<Tag> tags;
    }

    @Getter
    @Setter
    @AllArgsConstructor
    public static class Patch {
        private long questionId;
        @Pattern(regexp = ".*\\S.*")
        private String title;
        @Pattern(regexp = ".*\\S.*")
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class Response{
        private long questionId;
        private long memberId;
        private String title;
        private String content;
        private int view;
        @JsonProperty("totalVotes")
        private int totalVote;
        private Question.QuestionStatus questionStatus;
        private int totalAnswer;
        private List<Answer> answers;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;

    }
}
