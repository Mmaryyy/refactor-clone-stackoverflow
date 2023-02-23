package com.preproject_009.q_comment.mapper;

import com.preproject_009.q_comment.dto.QuestionCommentDto;
import com.preproject_009.q_comment.entity.QuestionComment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface QuestionCommentMapper {
    @Mapping(source = "memberId", target = "member.memberId")
    QuestionComment questionCommentPostDtoToQuestion(QuestionCommentDto.Post requestBody);
    QuestionComment questionCommentPatchDtoToQuestion(QuestionCommentDto.Patch requestBody);
    @Mapping(target = "memberId", source = "member.memberId")
    QuestionCommentDto.Response questionCommentToQuestionCommentResponseDto(QuestionComment questionComment);
    List<QuestionCommentDto.Response> questionCommentsToQuestionCommentResponseDto(List<QuestionComment> questionComments);
}
