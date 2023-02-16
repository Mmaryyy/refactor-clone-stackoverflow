package com.preproject_009.member.entity;

import com.preproject_009.point.Point;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;

import javax.persistence.*;
import java.time.LocalDateTime;

/** Writer : 최준영
    Date   : 2023-02-16
    Description : Member entity
*/

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long memberId;                             // 멤버 Id

    // 수정 X, 중복 X
    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column(length = 100, nullable = false)
    private String name;

    // 소셜 가입 여부(true: 소셜가입, false: 일반 가입)
    @Column(name = "is_social")
    private boolean social;

    @Column(length = 100)
    private String password;
    
    // true : 어드민, false : 일반 회원
    private boolean authority;

    @OneToOne(mappedBy = "member", cascade = CascadeType.PERSIST)
    private Point point;

    // 자기 소개
    @Column(length = 300)
    private String about;
    
    // 멤버 활동, 휴면, 탈퇴 여부
    @Enumerated(value = EnumType.STRING)
    @Column(name = "member_status", length = 30, nullable = false)
    private MemberStatus memberStatus = MemberStatus.MEMBER_ACTIVE;

    public void setPoint(Point point) {
        this.point = point;
        if (point.getMember() != this) {
            point.setMember(this);
        }
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
