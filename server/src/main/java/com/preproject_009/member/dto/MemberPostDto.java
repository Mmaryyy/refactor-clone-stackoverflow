package com.preproject_009.member.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

public class MemberPostDto {
    @NotBlank
    @Email
    private String email;

    @NotBlank(message = "이름은 공백을 허용할 수 없습니다.")
    @Pattern(regexp = "^[a-zA-Z0-9]*$",
             message = "영문, 숫자로만 이루어져야 합니다.")
    private String name;

    @NotBlank(message = "패스워드는 공백을 허용할 수 없습니다.")
    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[$@$!%*#?&])[A-Za-z\\d$@$!%*#?&]{8,}$",
            message = "최소 8자리에 숫자, 문자, 특수문자 각 1개 이상 포함해야 합니다.")
    private String password;

    private String about;
}
