package com.preproject_009.answer.entity;

import com.preproject_009.a_comment.entity.AnswerComment;
import com.preproject_009.audit.Auditable;
import com.preproject_009.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

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
    @Column(name = "ANSWER_STATUS", nullable = false)
    private AnswerStatus answerStatus = AnswerStatus.ANSWER_REGISTRATION;

    // member n:1 양방향
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    // answerComment 1:n 양방향
    @OneToMany(mappedBy = "answer", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<AnswerComment> answerComment;

    // answerVote 1:n 양방향
    @OneToMany(mappedBy = "answer", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<AnswerVote> answerVote;

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
