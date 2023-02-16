package com.preproject_009.a_comment.entity;

import com.preproject_009.audit.Auditable;
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
    private long aCommentId;

    @Column(nullable = false)
    private String content;
}
