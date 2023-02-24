package com.preproject_009.question.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.preproject_009.answer.entity.Answer;
import com.preproject_009.audit.Auditable;
import com.preproject_009.exception.BusinessLogicException;
import com.preproject_009.exception.ExceptionCode;
import com.preproject_009.member.entity.Member;
import com.preproject_009.q_comment.entity.QuestionComment;
import com.preproject_009.tag.Tag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Formula;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Setter
@Getter
@Entity
@NoArgsConstructor
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column(name = "TITLE", nullable = false)
    private String title;

    @Column(name = "CONTENT", columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(name = "VIEW", nullable = false)
    private int view;

    @Enumerated(EnumType.STRING)
    @Column(name = "QUESTION_STATUS", nullable = false)
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_REGISTRATION;

    // member n:1 양방향
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    @JsonBackReference
    private Member member;

    // tag 1:n 양방향
    @OneToMany(mappedBy = "question")
    @JsonManagedReference
    private List<Tag> tags = new ArrayList<>();

    // answer 1:n 양방향
    @OneToMany(mappedBy = "question", cascade = {CascadeType.REMOVE, CascadeType.PERSIST})
    @JsonManagedReference
    private List<Answer> answers = new ArrayList<>();

    // vote 1:n 양방향
    @OneToMany(mappedBy = "question", cascade = {CascadeType.REMOVE, CascadeType.PERSIST})
    @JsonManagedReference
    private List<QuestionVote> questionVotes;

    @Column(name = "TOTAL_VOTE")
    private int totalVotes;

    // comment 1:n 양방향
    @OneToMany(mappedBy = "question", cascade = {CascadeType.REMOVE, CascadeType.PERSIST})
    @JsonManagedReference
    private List<QuestionComment> questionComments = new ArrayList<>();

    public Question(long questionId, String title, String content, QuestionStatus questionStatus) {
        this.questionId = questionId;
        this.title = title;
        this.content = content;
        this.questionStatus = questionStatus;
    }

    public enum QuestionStatus {
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

    public void canChangeQuestion(QuestionStatus questionStatus) {
<<<<<<< HEAD
        if (this.questionStatus == QuestionStatus.QUESTION_ANSWER_ACCEPTED) {
=======
        if(this.questionStatus == QuestionStatus.QUESTION_ANSWER_ACCEPTED
        || this.questionStatus == QuestionStatus.QUESTION_ANSWERED) {
>>>>>>> 4e7034fb5d50f359dd94f1025a61348fd9928be9
            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_QUESTION);
        }
    }

    public void setQuestionStatus(QuestionStatus questionStatus) {
        canChangeQuestion(questionStatus);
        this.questionStatus = questionStatus;
    }

    public int getTotalVotes() {
        int totalVote = questionVotes.size();
        return totalVote;
    }
    public List<QuestionVote> getQuestionVotes() {
        return questionVotes;
    }
}
