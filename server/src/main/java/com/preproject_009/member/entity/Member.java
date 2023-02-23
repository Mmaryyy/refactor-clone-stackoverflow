package com.preproject_009.member.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.preproject_009.a_comment.entity.AnswerComment;
import com.preproject_009.answer.entity.Answer;
import com.preproject_009.audit.Auditable;
import com.preproject_009.q_comment.entity.QuestionComment;
import com.preproject_009.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Writer : 최준영
 * Date   : 2023-02-16
 * Description : Member entity
 */

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private long memberId;

    // 수정 X, 중복 X
    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column(length = 100, nullable = false)
    private String name;

    // 소셜 가입 여부(true: 소셜가입, false: 일반 가입)
    @Column(name = "IS_SOCIAL")
    private boolean social;

    @Column(length = 100)
    private String password;

    // true : 어드민, false : 일반 회원
    private boolean authority;

    // 자기 소개
    @Column(columnDefinition = "TEXT")
    private String about;

    // img 이름
    @Column(columnDefinition = "TEXT")
    private String img;

    @Column(columnDefinition = "TEXT")
    private String location;

    // 멤버 활동, 휴면, 탈퇴 여부
    @Enumerated(value = EnumType.STRING)
    @Column(name = "MEMBER_STATUS", length = 30, nullable = false)
    private MemberStatus memberStatus = MemberStatus.MEMBER_ACTIVE;

    // Question 클래스 1:n 매핑
    @OneToMany(mappedBy = "member", cascade = CascadeType.PERSIST)
    @JsonManagedReference
    private List<Question> questions = new ArrayList<>();

    // Answer 클래스 1:n 매핑
    @OneToMany(mappedBy = "member", cascade = CascadeType.PERSIST)
    @JsonManagedReference
    private List<Answer> answers = new ArrayList<>();

    // Answer Comment 클래스 1:n 매핑
    @OneToMany(mappedBy = "member", cascade = CascadeType.PERSIST)
    @JsonManagedReference
    private List<AnswerComment> answerComment = new ArrayList<>();

    // Question_Comment 클래스 1:n 매핑
    @OneToMany(mappedBy = "member", cascade = CascadeType.PERSIST)
    @JsonManagedReference
    private List<QuestionComment> questionComment = new ArrayList<>();

    public Member(String email) {
        this.email = email;
    }

    public Member(String email, String name, String about, String password) {
        this.email = email;
        this.name = name;
        this.about = about;
        this.password = password;
    }

    public enum MemberStatus {
        MEMBER_ACTIVE("활동 상태"),
        MEMBER_SLEEP("휴면 상태"),
        MEMBER_QUIT("탈퇴 상태");

        @Getter
        private String status;

        MemberStatus(String status) {
            this.status = status;
        }
    }

}
