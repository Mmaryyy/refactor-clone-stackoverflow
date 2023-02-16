package com.preproject_009.point;

import com.preproject_009.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.domain.Auditable;

import javax.persistence.*;
import java.time.LocalDateTime;

/** Writer : 최준영
 Date   : 2023-02-16
 Description : Point entity
 */

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Point{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "point_id")
    private Long pointId;

    private int point;

    @CreatedDate
    @Column(name = "created_at")
    private LocalDateTime createdDate;

    @OneToOne
    @JoinColumn(name = "member_id")
    private Member member;

    public void setMember(Member member) {
        this.member = member;
        if (member.getPoint() != this) {
            member.setPoint(this);
        }
    }

}


