package com.preproject_009.answer.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
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

    // answer n:1 양방향
    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    @JsonBackReference
    private Answer answer;

    // member n:1 단방향
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    @JsonBackReference
    private Member member;
}
