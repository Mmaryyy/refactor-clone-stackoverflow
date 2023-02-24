package com.preproject_009.member.dto;

import com.preproject_009.answer.entity.Answer;
import com.preproject_009.member.entity.Member;
<<<<<<< HEAD
import lombok.*;
=======
import com.preproject_009.question.entity.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
>>>>>>> 4e7034fb5d50f359dd94f1025a61348fd9928be9
import org.springframework.util.Assert;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.util.List;

public class MemberDto {
    @Getter
    @AllArgsConstructor
    @NoArgsConstructor(access = AccessLevel.PROTECTED)
    public static class Post {
        @NotBlank
        @Email
        private String email;

        @NotBlank(message = "닉네임은 공백이 허용되지 않습니다.")
        private String name;

        private String about;

        @NotBlank
        @Pattern(regexp = "^[a-zA-Z\\\\d`~!@#$%^&*()-_=+]{8,15}$",
                message = "영어와 숫자 특수문자를 사용해야 하며 8~15자리를 허용한다.")
        private String password;

    }
    @Getter
    @AllArgsConstructor
    public static class Patch {
        private long memberId;

        @NotBlank(message = "닉네임은 공백이 허용되지 않습니다.")
        private String name;

        private String about;

        private Member.MemberStatus memberStatus;

        public Patch addMemberId(Long memberId) {
            Assert.notNull(memberId, "member id must not be null.");
            this.memberId = memberId;
            return this;
        }

    }

    @AllArgsConstructor
    @Getter
    public static class response {
        private long memberId;
        private String email;
        private String name;
        private String img;
        private String location;
        private String password;
        private String about;
        private List<Question> questions;
        private List<Answer> answers;
        private Member.MemberStatus memberStatus;
    }
}
