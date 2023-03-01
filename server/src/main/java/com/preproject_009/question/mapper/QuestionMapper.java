package com.preproject_009.question.mapper;

<<<<<<< HEAD
import com.preproject_009.answer.entity.Answer;
=======
import com.preproject_009.a_comment.entity.AnswerComment;
import com.preproject_009.answer.mapper.entity.Answer;
import com.preproject_009.q_comment.entity.QuestionComment;
>>>>>>> 1a5033a10ffc6086fa23d90ff235d287a6853dc9
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
    @Mapping(target = "tags", source = "questionTags")
    QuestionDto.Response questionToQuestionResponseDto(Question question);
    List<QuestionDto.Response> questionsToQuestionResponsesDto(List<Question> questions);
    @Mapping(target = "memberId", source = "member.memberId")
    @Mapping(target = "memberName", source = "member.name")
    @Mapping(target = "memberImage", source = "member.img")
    //@Mapping(target = "answerComments", source = "answer.a")
    QuestionDto.Response.AnswerWithMemberInfo answerToAnswerWithMemberInfo(Answer answer);

    List<QuestionDto.Response.AnswerWithMemberInfo> answersToAnswerWithMemberInfos(List<QuestionDto.Response.AnswerWithMemberInfo> infos);

<<<<<<< HEAD
   @Mapping(target = "tagId", source = "questionTag.tag.tagId")
   @Mapping(target = "title", source = "questionTag.tag.title")
    QuestionDto.Response.QuestionTagsWithTagInfo tagToTagInfoDto(QuestionTag questionTag);

   List<QuestionDto.Response.QuestionTagsWithTagInfo> tagsToTagInfoDto(List<QuestionTag> questionTags);
=======
    @Mapping(target = "memberId", source = "member.memberId")
    @Mapping(target = "memberName", source = "member.name")
    @Mapping(target = "memberImage", source = "member.img")
    QuestionDto.Response.QuestionCommentWithMemberInfo questionCommentToDtoWithMemberInfo(QuestionComment questionComment);
    List<QuestionDto.Response.QuestionCommentWithMemberInfo> questionCommentsToDtoWithMemberInfo(List<QuestionDto.Response.QuestionCommentWithMemberInfo> infos);

    @Mapping(target = "memberId", source = "member.memberId")
    @Mapping(target = "memberName", source = "member.name")
    @Mapping(target = "memberImage", source = "member.img")
    QuestionDto.Response.AnswerCommentWithMemberInfo answerCommentToDtoWithMemberInfo(AnswerComment answerComment);

    List<QuestionDto.Response.AnswerCommentWithMemberInfo> answerCommentsToDtoWithMemberInfo(List<QuestionDto.Response.AnswerCommentWithMemberInfo> infos);
>>>>>>> 1a5033a10ffc6086fa23d90ff235d287a6853dc9
}
