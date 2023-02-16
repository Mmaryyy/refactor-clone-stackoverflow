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

    @Column(name = "CONTENT",columnDefinition = "TEXT", nullable = false)
    private String content;

    @Enumerated(value = EnumType.STRING)
    @Column(name = "ANSWER_STATUS")
    private AnswerStatus answerStatus = AnswerStatus.ANSWER_REGISTRATION;

    public enum AnswerStatus {
        ANSWER_REGISTRATION("답변 등록됨"),
        ANSWER_SELECTION("답변 채택됨"),
        ANSWER_DELETE("답변 삭제됨");

        @Getter
        private String status;

        AnswerStatus(String status) {
            this.status = status;
        }
    }
}
