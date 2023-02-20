package com.preproject_009.question.mapper;

import com.preproject_009.question.dto.QuestionDto;
import com.preproject_009.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface QuestionMapper {
    Question questionPostDtoToQuestion(QuestionDto.Post requestBody);
    QuestionDto.Response questionToQuestionResponseDto(Question question);
    QuestionDto.ResponseAll questionsToQuestionResponseDto(Question questions);
}
