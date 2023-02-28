package com.preproject_009.tag;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class TagResponseDto {
    private long tagId;
    private String title;
    private String content;
}
