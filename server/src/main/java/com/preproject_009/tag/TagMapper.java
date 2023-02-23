package com.preproject_009.tag;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface TagMapper {
    TagResponseDto tagToTagResponse(Tag tag);
    List<TagResponseDto> tagToTagResponses(List<Tag> tags);
}
