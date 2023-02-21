package com.preproject_009.answer.mapper;

import com.preproject_009.answer.dto.AnswerDto;
import com.preproject_009.answer.entity.Answer;
import com.preproject_009.member.entity.Member;
import com.preproject_009.question.entity.Question;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-20T21:12:12+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerPostDtoToAnswer(AnswerDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setQuestion( postToQuestion( requestBody ) );
        answer.setMember( postToMember( requestBody ) );
        answer.setContent( requestBody.getContent() );

        return answer;
    }

    @Override
    public Answer answerPatchDtoToAnswer(AnswerDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Answer answer = new Answer();

        answer.setAnswerId( requestBody.getAnswerId() );
        answer.setContent( requestBody.getContent() );

        return answer;
    }

    @Override
    public AnswerDto.Response answerToAnswerResponse(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        long answerId = 0L;
        String content = null;

        answerId = answer.getAnswerId();
        content = answer.getContent();

        long memberId = 0L;

        AnswerDto.Response response = new AnswerDto.Response( answerId, memberId, content );

        return response;
    }

    @Override
    public List<AnswerDto.Response> answersToAnswerResponses(List<Answer> answers) {
        if ( answers == null ) {
            return null;
        }

        List<AnswerDto.Response> list = new ArrayList<AnswerDto.Response>( answers.size() );
        for ( Answer answer : answers ) {
            list.add( answerToAnswerResponse( answer ) );
        }

        return list;
    }

    protected Question postToQuestion(AnswerDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( post.getQuestionId() );

        return question;
    }

    protected Member postToMember(AnswerDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( post.getMemberId() );

        return member;
    }
}
