package com.preproject_009.point;

import com.preproject_009.audit.Auditable;
import com.preproject_009.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;

/** Writer : 최준영
 Date   : 2023-02-16
 Description : Point entity
 */

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Point extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "POINT_ID")
    private long pointId;

    private int point;

    @OneToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    /*public void setMember(Member member) {
        this.member = member;
        if (member.getPoint() != this) {
            member.setPoint(this);
        }
    }*/

}


