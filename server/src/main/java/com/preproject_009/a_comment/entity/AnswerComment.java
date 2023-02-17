package com.preproject_009.a_comment.entity;

import com.preproject_009.answer.entity.Answer;
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
public class AnswerComment extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerCommentId;

    @Column(name = "CONTENT", columnDefinition = "TEXT", nullable = false)
    private String content;

    // member n:1 양방향
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    // answer n:1 양방향
    @ManyToOne
    @JoinColumn(name = "ANSWER_ID")
    private Answer answer;
}
