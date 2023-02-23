package com.preproject_009.question.mapper;

import com.preproject_009.question.dto.QuestionDto;
import com.preproject_009.question.entity.Question;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-20T21:12:12+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionPostDtoToQuestion(QuestionDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Question question = new Question();

        question.setTitle( requestBody.getTitle() );
        question.setContent( requestBody.getContent() );

        return question;
    }

    @Override
    public Question questionPatchDtoToQuestion(QuestionDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( requestBody.getQuestionId() );
        question.setTitle( requestBody.getTitle() );
        question.setContent( requestBody.getContent() );

        return question;
    }

    @Override
    public QuestionDto.Response questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        long questionId = 0L;
        String title = null;
        String content = null;
        int view = 0;
        int totalVote = 0;
        Question.QuestionStatus questionStatus = null;
        int totalAnswer = 0;

        questionId = question.getQuestionId();
        title = question.getTitle();
        content = question.getContent();
        view = question.getView();
        totalVote = question.getTotalVote();
        questionStatus = question.getQuestionStatus();
        totalAnswer = question.getTotalAnswer();

        long memberId = 0L;

        QuestionDto.Response response = new QuestionDto.Response( questionId, memberId, title, content, view, totalVote, questionStatus, totalAnswer );

        return response;
    }

    @Override
    public QuestionDto.ResponseAll questionsToQuestionResponseDto(Question questions) {
        if ( questions == null ) {
            return null;
        }

        long questionId = 0L;
        String title = null;
        String content = null;
        int totalVote = 0;
        int view = 0;
        int totalAnswer = 0;

        questionId = questions.getQuestionId();
        title = questions.getTitle();
        content = questions.getContent();
        totalVote = questions.getTotalVote();
        view = questions.getView();
        totalAnswer = questions.getTotalAnswer();

        long memberId = 0L;

        QuestionDto.ResponseAll responseAll = new QuestionDto.ResponseAll( questionId, memberId, title, content, totalVote, view, totalAnswer );

        return responseAll;
    }
}
