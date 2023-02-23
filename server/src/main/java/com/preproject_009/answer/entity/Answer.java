package com.preproject_009.answer.entity;

import com.preproject_009.a_comment.entity.AnswerComment;
import com.preproject_009.audit.Auditable;
import com.preproject_009.exception.BusinessLogicException;
import com.preproject_009.exception.ExceptionCode;
import com.preproject_009.member.entity.Member;
import com.preproject_009.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Formula;

import javax.persistence.*;
import java.util.ArrayList;
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

    // question n:1 양방향
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    // answerComment 1:n 양방향
    @OneToMany(mappedBy = "answer", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<AnswerComment> answerComment;

    // answerVote 1:n 양방향
    @OneToMany(mappedBy = "answer", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<AnswerVote> answerVote = new ArrayList<>();

    @Column(name = "TOTAL_VOTE")
    private int totalVote = answerVote.size();


    public Answer(long answerId, String content) {
        this.answerId = answerId;
        this.content = content;
    }

    public Answer(long answerId, String content, AnswerStatus answerStatus) {
        this.answerId = answerId;
        this.content = content;
        this.answerStatus = answerStatus;
    }

    public enum AnswerStatus {
        ANSWER_REGISTRATION("답변 등록됨"),
        ANSWER_ACCEPTED("답변 채택됨"),
        ANSWER_DELETE("답변 삭제됨");

        @Getter
        private String status;

        AnswerStatus(String status) {
            this.status = status;
        }
    }

    public void canChangeAnswer(AnswerStatus answerStatus) {
        if(this.answerStatus == AnswerStatus.ANSWER_ACCEPTED) {
            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_ANSWER);
        }
    }
}
