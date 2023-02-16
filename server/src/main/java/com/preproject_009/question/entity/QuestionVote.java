package com.preproject_009.question.entity;

import com.preproject_009.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class QuestionVote {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionVoteId;

    @Column(nullable = false)
    private int totalVote;

    // Question 클래스 n:1 매핑
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    // member 클래스 n:1 매핑
//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member member;
}
