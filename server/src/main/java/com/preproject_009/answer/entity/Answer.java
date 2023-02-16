package com.preproject_009.answer.entity;

import com.preproject_009.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Answer extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Enumerated(value = EnumType.STRING)
    @Column
    private AnswerStatus answerStatus;


    public enum AnswerStatus {
        ANSWER_NOT_EXISTS("답변 없음"),
        ANSWER_EXISTS("답변 있음"),
        ANSWER_SELECTION("답변 채택"),
        ANSWER_DELETE("답변 삭제");

        @Getter
        private String status;

        AnswerStatus(String status) {
            this.status = status;
        }
    }
}
