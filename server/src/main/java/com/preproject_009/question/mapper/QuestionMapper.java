package com.preproject_009.question.mapper;

import com.preproject_009.question.dto.QuestionDto;
import com.preproject_009.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import java.util.List;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto.Post requestBody);
    Question questionPatchDtoToQuestion(QuestionDto.Patch requestBody);
    QuestionDto.Response questionToQuestionResponseDto(Question question);

    List<QuestionDto.Response> questionsToQuestionResponsesDto(List<Question> questions);
}
