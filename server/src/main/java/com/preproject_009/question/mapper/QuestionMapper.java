package com.preproject_009.question.mapper;

import com.preproject_009.answer.entity.Answer;
import com.preproject_009.question.dto.QuestionDto;
import com.preproject_009.question.entity.Question;
import com.preproject_009.tag.Tag;
import com.preproject_009.tag.questiontag.QuestionTag;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto.Post requestBody);
    Question questionPatchDtoToQuestion(QuestionDto.Patch requestBody);
    @Mapping(target = "memberId", source = "member.memberId")
    @Mapping(target = "memberName", source = "member.name")
    @Mapping(target = "memberImage", source = "member.img")
    QuestionDto.Response questionToQuestionResponseDto(Question question);
    List<QuestionDto.Response> questionsToQuestionResponsesDto(List<Question> questions);
    @Mapping(target = "memberId", source = "member.memberId")
    @Mapping(target = "memberName", source = "member.name")
    @Mapping(target = "memberImage", source = "member.img")
    QuestionDto.Response.AnswerWithMemberInfo answerToAnswerWithMemberInfo(Answer answer);

    List<QuestionDto.Response.AnswerWithMemberInfo> answersToAnswerWithMemberInfos(List<QuestionDto.Response.AnswerWithMemberInfo> infos);

   @Mapping(target = "tagId", source = "questionTag.tag.tagId")
   @Mapping(target = "title", source = "questionTag.tag.title")
    QuestionDto.Response.TagInfo tagToTagInfoDto(QuestionTag questionTag);

   List<QuestionDto.Response.TagInfo> tagsToTagInfoDto(List<QuestionTag> questionTags);
}
