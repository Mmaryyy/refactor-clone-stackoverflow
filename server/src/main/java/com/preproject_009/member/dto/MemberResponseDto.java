package com.preproject_009.member.dto;

import com.preproject_009.member.entity.Member;
import com.preproject_009.point.Point;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class MemberResponseDto {
    private long memberId;

    private String email;

    private String name;

    private boolean social;

    private String password;

    private boolean authority;

    private Point point;

    private String about;

    private Member .MemberStatus memberStatus;

    public String getMemberStatus() {
        return memberStatus.getStatus();
    }
    public int getPoint() {
        return point.getPoint();
    }

}
