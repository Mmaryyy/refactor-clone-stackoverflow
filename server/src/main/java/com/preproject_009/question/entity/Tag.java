package com.preproject_009.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long tagId;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    // Question 클래스 n:1 매핑
    @ManyToOne
    @JoinColumn(name = "QUESTION_ID")
    private Question question;
}
