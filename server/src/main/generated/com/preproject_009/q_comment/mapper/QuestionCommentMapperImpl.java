package com.preproject_009.q_comment.mapper;

import com.preproject_009.member.entity.Member;
import com.preproject_009.q_comment.dto.QuestionCommentDto;
import com.preproject_009.q_comment.entity.QuestionComment;
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
public class QuestionCommentMapperImpl implements QuestionCommentMapper {

    @Override
    public QuestionComment questionCommentPostDtoToQuestion(QuestionCommentDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        QuestionComment questionComment = new QuestionComment();

        questionComment.setMember( postToMember( requestBody ) );
        questionComment.setContent( requestBody.getContent() );

        return questionComment;
    }

    @Override
    public QuestionComment questionCommentPatchDtoToQuestion(QuestionCommentDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        QuestionComment questionComment = new QuestionComment();

        questionComment.setQuestionCommentId( requestBody.getQuestionCommentId() );
        questionComment.setContent( requestBody.getContent() );

        return questionComment;
    }

    @Override
    public QuestionCommentDto.Response questionCommentToQuestionCommentResponseDto(QuestionComment questionComment) {
        if ( questionComment == null ) {
            return null;
        }

        long questionCommentId = 0L;
        String content = null;

        questionCommentId = questionComment.getQuestionCommentId();
        content = questionComment.getContent();

        long memberId = 0L;

        QuestionCommentDto.Response response = new QuestionCommentDto.Response( questionCommentId, memberId, content );

        return response;
    }

    @Override
    public List<QuestionCommentDto.Response> questionCommentsToQuestionCommentResponseDto(List<QuestionComment> questionComments) {
        if ( questionComments == null ) {
            return null;
        }

        List<QuestionCommentDto.Response> list = new ArrayList<QuestionCommentDto.Response>( questionComments.size() );
        for ( QuestionComment questionComment : questionComments ) {
            list.add( questionCommentToQuestionCommentResponseDto( questionComment ) );
        }

        return list;
    }

    protected Member postToMember(QuestionCommentDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( post.getMemberId() );

        return member;
    }
}
