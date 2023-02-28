package com.preproject_009.answer.mapper;

import com.preproject_009.answer.dto.AnswerDto;
import com.preproject_009.answer.mapper.entity.Answer;
import com.preproject_009.member.entity.Member;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-28T13:52:55+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class AnswerMapperImpl implements AnswerMapper {

    @Override
    public Answer answerPostDtoToAnswer(AnswerDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Answer answer = new Answer();

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

        long memberId = 0L;
        long answerId = 0L;
        String content = null;
        int totalVotes = 0;
        Answer.AnswerStatus answerStatus = null;
        LocalDateTime createdAt = null;
        LocalDateTime modifiedAt = null;

        memberId = answerMemberMemberId( answer );
        answerId = answer.getAnswerId();
        content = answer.getContent();
        totalVotes = answer.getTotalVotes();
        answerStatus = answer.getAnswerStatus();
        createdAt = answer.getCreatedAt();
        modifiedAt = answer.getModifiedAt();

        AnswerDto.Response response = new AnswerDto.Response( answerId, memberId, content, totalVotes, answerStatus, createdAt, modifiedAt );

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

    private long answerMemberMemberId(Answer answer) {
        if ( answer == null ) {
            return 0L;
        }
        Member member = answer.getMember();
        if ( member == null ) {
            return 0L;
        }
        long memberId = member.getMemberId();
        return memberId;
    }
}
