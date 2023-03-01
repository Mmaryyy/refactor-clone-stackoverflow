package com.preproject_009.tag;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
public class TagResponseDto {
    private long tagId;
    private String title;
    private String content;

}
