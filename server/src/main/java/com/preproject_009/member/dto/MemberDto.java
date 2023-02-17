package com.preproject_009.member.dto;

import com.preproject_009.member.entity.Member;
import com.preproject_009.point.Point;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class MemberDto {
    @Getter
    public static class Post {
        @NotBlank
        @Email
        private String email;

        @NotBlank(message = "닉네임은 공백이 허용되지 않습니다.")
        private String name;

        private String about;

        @NotBlank
        @Pattern(regexp = "^[a-zA-Z\\\\d`~!@#$%^&*()-_=+]{3,15}$",
                message = "영어와 숫자 특수문자를 사용해야 하며 3~15자리를 허용한다.")
        private String password;
    }

    @Getter
    public static class Patch {
        private long memberId;

        @NotBlank(message = "닉네임은 공백이 허용되지 않습니다.")
        private String name;

        private String about;

        private Member.MemberStatus memberStatus;

        public void setMemberId(long memberId) {
            this.memberId = memberId;
        }
    }

    @AllArgsConstructor
    @Getter
    public static class response {
        private long memberId;
        private String email;
        private String name;
        private String password;
        private String about;
        private Member.MemberStatus memberStatus;
        private Point point;

        public String getMemberStatus() {
            return memberStatus.getStatus();
        }

        public int getPoint() {
            return point.getPoint();
        }
    }
}
