package com.preproject_009.q_comment.entity;

import com.preproject_009.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class QuestionComment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionCommentId;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    // Question 클래스 n:1 매핑
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    // member 클래스 n:1 매핑
//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member member;
}
