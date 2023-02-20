package com.preproject_009.a_comment.mapper;

import com.preproject_009.a_comment.dto.AnswerCommentDto;
import com.preproject_009.a_comment.entity.AnswerComment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface AnswerCommentMapper {
    @Mapping(source = "memberId", target = "member.memberId")
    AnswerComment answerCommentPostDtoToAnswer(AnswerCommentDto.Post requestBody);
    AnswerComment answerCommentPatchDtoToAnswer(AnswerCommentDto.Patch requestBody);

    AnswerCommentDto.Response answerToAnswerCommentResponse(AnswerComment AnswerComment);

    @Mapping(source = "memberId", target = "member.memberId")
    List<AnswerCommentDto.Response> answersToAnswerCommentResponses(List<AnswerComment> answerComments);
}
