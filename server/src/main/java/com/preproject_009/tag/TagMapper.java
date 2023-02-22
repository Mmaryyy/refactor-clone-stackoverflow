package com.preproject_009.tag;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface TagMapper {
    List<TagResponseDto> tagToTagResponses(List<Tag> tags);
}
