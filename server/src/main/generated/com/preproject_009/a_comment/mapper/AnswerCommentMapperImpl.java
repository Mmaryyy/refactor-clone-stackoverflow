package com.preproject_009.a_comment.mapper;

import com.preproject_009.a_comment.dto.AnswerCommentDto;
import com.preproject_009.a_comment.entity.AnswerComment;
import com.preproject_009.member.entity.Member;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-22T21:55:24+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class AnswerCommentMapperImpl implements AnswerCommentMapper {

    @Override
    public AnswerComment answerCommentPostDtoToAnswer(AnswerCommentDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        AnswerComment answerComment = new AnswerComment();

        answerComment.setMember( postToMember( requestBody ) );
        answerComment.setContent( requestBody.getContent() );

        return answerComment;
    }

    @Override
    public AnswerComment answerCommentPatchDtoToAnswer(AnswerCommentDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        AnswerComment answerComment = new AnswerComment();

        answerComment.setAnswerCommentId( requestBody.getAnswerCommentId() );
        answerComment.setContent( requestBody.getContent() );

        return answerComment;
    }

    @Override
    public AnswerCommentDto.Response answerToAnswerCommentResponse(AnswerComment AnswerComment) {
        if ( AnswerComment == null ) {
            return null;
        }

        long answerCommentId = 0L;
        String content = null;

        answerCommentId = AnswerComment.getAnswerCommentId();
        content = AnswerComment.getContent();

        long memberId = 0L;

        AnswerCommentDto.Response response = new AnswerCommentDto.Response( answerCommentId, memberId, content );

        return response;
    }

    @Override
    public List<AnswerCommentDto.Response> answersToAnswerCommentResponses(List<AnswerComment> answerComments) {
        if ( answerComments == null ) {
            return null;
        }

        List<AnswerCommentDto.Response> list = new ArrayList<AnswerCommentDto.Response>( answerComments.size() );
        for ( AnswerComment answerComment : answerComments ) {
            list.add( answerToAnswerCommentResponse( answerComment ) );
        }

        return list;
    }

    protected Member postToMember(AnswerCommentDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( post.getMemberId() );

        return member;
    }
}
