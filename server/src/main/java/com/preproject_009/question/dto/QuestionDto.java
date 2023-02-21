package com.preproject_009.question.dto;

import com.preproject_009.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

public class QuestionDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        private String title;
        private String content;
        private long memberId;
        //private List<Tag> tags;
    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        private long questionId;
        private String title;
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
        private int totalVote;
        private Question.QuestionStatus questionStatus;
        private int totalAnswer;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }

    @Getter
    @AllArgsConstructor
    public static class ResponseAll{
        private long questionId;
        private long memberId;
        private String title;
        private String content;
        private int totalVote;
        private int view;
        private int totalAnswer;
    }
}
