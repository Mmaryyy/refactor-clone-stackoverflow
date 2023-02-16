package com.preproject_009.question.entity;

import lombok.*;

import javax.persistence.*;


@NoArgsConstructor
@Setter
@Getter
@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(nullable = false)
    private int totalAnswer;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_REGISTRATION;

    // member 클래스 n:1 매핑
//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member member;

    public enum QuestionStatus{
        QUESTION_REGISTRATION("질문 등록"),
        QUESTION_ANSWERED("답변 등록"),
        QUESTION_ANSWER_ACCEPTED("채택 완료"),
        QUESTION_DELETE("질문 삭제");

        @Getter
        private String string;

        QuestionStatus(String string) {
            this.string = string;
        }
    }
}
