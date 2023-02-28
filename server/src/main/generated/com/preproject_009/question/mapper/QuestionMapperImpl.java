package com.preproject_009.question.mapper;

import com.preproject_009.answer.mapper.entity.Answer;
import com.preproject_009.member.entity.Member;
import com.preproject_009.q_comment.entity.QuestionComment;
import com.preproject_009.question.dto.QuestionDto;
import com.preproject_009.question.entity.Question;
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

        long memberId = 0L;
        String memberName = null;
        String memberImage = null;
        List<QuestionComment> questionComments = null;
        List<Answer> answers = null;
        long questionId = 0L;
        String title = null;
        String content = null;
        int view = 0;
        int totalVotes = 0;
        Question.QuestionStatus questionStatus = null;
        LocalDateTime createdAt = null;
        LocalDateTime modifiedAt = null;

        memberId = questionMemberMemberId( question );
        memberName = questionMemberName( question );
        memberImage = questionMemberImg( question );
        List<QuestionComment> list = question.getQuestionComments();
        if ( list != null ) {
            questionComments = new ArrayList<QuestionComment>( list );
        }
        List<Answer> list1 = question.getAnswers();
        if ( list1 != null ) {
            answers = new ArrayList<Answer>( list1 );
        }
        questionId = question.getQuestionId();
        title = question.getTitle();
        content = question.getContent();
        view = question.getView();
        totalVotes = question.getTotalVotes();
        questionStatus = question.getQuestionStatus();
        createdAt = question.getCreatedAt();
        modifiedAt = question.getModifiedAt();

        QuestionDto.Response response = new QuestionDto.Response( questionId, memberId, memberName, memberImage, title, content, questionComments, view, totalVotes, questionStatus, answers, createdAt, modifiedAt );

        return response;
    }

    @Override
    public List<QuestionDto.Response> questionsToQuestionResponsesDto(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionDto.Response> list = new ArrayList<QuestionDto.Response>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionResponseDto( question ) );
        }

        return list;
    }

    private long questionMemberMemberId(Question question) {
        if ( question == null ) {
            return 0L;
        }
        Member member = question.getMember();
        if ( member == null ) {
            return 0L;
        }
        long memberId = member.getMemberId();
        return memberId;
    }

    private String questionMemberName(Question question) {
        if ( question == null ) {
            return null;
        }
        Member member = question.getMember();
        if ( member == null ) {
            return null;
        }
        String name = member.getName();
        if ( name == null ) {
            return null;
        }
        return name;
    }

    private String questionMemberImg(Question question) {
        if ( question == null ) {
            return null;
        }
        Member member = question.getMember();
        if ( member == null ) {
            return null;
        }
        String img = member.getImg();
        if ( img == null ) {
            return null;
        }
        return img;
    }
}
