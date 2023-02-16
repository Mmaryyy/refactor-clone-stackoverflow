package com.preproject_009.answer.entity;

import com.preproject_009.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class AnswerVote {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerVoteId;

    @Column(name = "TOTAL_VOTE", nullable = false)
    private int totalVote;

    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;
}
