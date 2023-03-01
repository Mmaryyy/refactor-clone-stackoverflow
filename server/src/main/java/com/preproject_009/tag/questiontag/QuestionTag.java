package com.preproject_009.tag.questiontag;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.preproject_009.question.entity.Question;
import com.preproject_009.tag.Tag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class QuestionTag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionTagId;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "QUESTION_ID")
    private Question question;

    @ManyToOne
    @JsonBackReference
    @JoinColumn(name = "TAG_ID")
    private Tag tag;
}
