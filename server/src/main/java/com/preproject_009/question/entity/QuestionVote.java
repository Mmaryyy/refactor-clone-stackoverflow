package com.preproject_009.question.entity;

import com.preproject_009.audit.Auditable;
import com.preproject_009.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class QuestionVote extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionVoteId;

    @Column(name = "TOTAL_VOTE", nullable = false)
    private int totalVote;

    // Question 클래스 n:1 양방향
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    // member 클래스 n:1 단방향
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
}
