package com.preproject_009.answer.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.preproject_009.a_comment.entity.AnswerComment;
import com.preproject_009.audit.Auditable;
import com.preproject_009.exception.BusinessLogicException;
import com.preproject_009.exception.ExceptionCode;
import com.preproject_009.member.entity.Member;
import com.preproject_009.question.entity.Question;
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
    @JsonBackReference
    private Member member;

    // question n:1 양방향
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    @JsonBackReference
    private Question question;

    // answerComment 1:n 양방향
    @OneToMany(mappedBy = "answer", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonManagedReference
    private List<AnswerComment> answerComment;

    // answerVote 1:n 양방향
    @OneToMany(mappedBy = "answer", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    @JsonManagedReference
    private List<AnswerVote> answerVotes;

    @Column(name = "TOTAL_VOTE")
    private int totalVotes;


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

    public int getTotalVotes() {
        int totalVote = answerVotes.size();
        return totalVote;
    }
    public List<AnswerVote> getAnswerVotes() {
        return answerVotes;
    }
}
