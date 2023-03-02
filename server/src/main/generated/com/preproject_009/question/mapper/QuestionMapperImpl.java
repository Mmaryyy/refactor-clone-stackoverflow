package com.preproject_009.question.mapper;

import com.preproject_009.answer.entity.Answer;
import com.preproject_009.member.entity.Member;
import com.preproject_009.q_comment.entity.QuestionComment;
import com.preproject_009.question.dto.QuestionDto;
import com.preproject_009.question.entity.Question;
import com.preproject_009.tag.TagResponseDto;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-01T10:53:57+0900",
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

        long memberId = 0L;
        String memberName = null;
        String memberImage = null;
        List<QuestionComment> questionComments = null;
        List<QuestionDto.Response.AnswerWithMemberInfo> answers = null;
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
        answers = answerListToAnswerWithMemberInfoList( question.getAnswers() );
        questionId = question.getQuestionId();
        title = question.getTitle();
        content = question.getContent();
        view = question.getView();
        totalVotes = question.getTotalVotes();
        questionStatus = question.getQuestionStatus();
        createdAt = question.getCreatedAt();
        modifiedAt = question.getModifiedAt();

        List<TagResponseDto> tags = null;

        QuestionDto.Response response = new QuestionDto.Response( questionId, memberId, memberName, memberImage, title, content, tags, questionComments, view, totalVotes, questionStatus, answers, createdAt, modifiedAt );

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

    @Override
    public QuestionDto.Response.AnswerWithMemberInfo answerToAnswerWithMemberInfo(Answer answer) {
        if ( answer == null ) {
            return null;
        }

        long memberId = 0L;
        String memberName = null;
        String memberImage = null;
        long answerId = 0L;
        String content = null;
        Answer.AnswerStatus answerStatus = null;
        int totalVotes = 0;

        memberId = answerMemberMemberId( answer );
        memberName = answerMemberName( answer );
        memberImage = answerMemberImg( answer );
        answerId = answer.getAnswerId();
        content = answer.getContent();
        answerStatus = answer.getAnswerStatus();
        totalVotes = answer.getTotalVotes();

        QuestionDto.Response.AnswerWithMemberInfo answerWithMemberInfo = new QuestionDto.Response.AnswerWithMemberInfo( answerId, content, answerStatus, memberId, memberName, memberImage, totalVotes );

        return answerWithMemberInfo;
    }

    @Override
    public List<QuestionDto.Response.AnswerWithMemberInfo> answersToAnswerWithMemberInfos(List<QuestionDto.Response.AnswerWithMemberInfo> infos) {
        if ( infos == null ) {
            return null;
        }

        List<QuestionDto.Response.AnswerWithMemberInfo> list = new ArrayList<QuestionDto.Response.AnswerWithMemberInfo>( infos.size() );
        for ( QuestionDto.Response.AnswerWithMemberInfo answerWithMemberInfo : infos ) {
            list.add( answerWithMemberInfo );
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

    protected List<QuestionDto.Response.AnswerWithMemberInfo> answerListToAnswerWithMemberInfoList(List<Answer> list) {
        if ( list == null ) {
            return null;
        }

        List<QuestionDto.Response.AnswerWithMemberInfo> list1 = new ArrayList<QuestionDto.Response.AnswerWithMemberInfo>( list.size() );
        for ( Answer answer : list ) {
            list1.add( answerToAnswerWithMemberInfo( answer ) );
        }

        return list1;
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

    private String answerMemberName(Answer answer) {
        if ( answer == null ) {
            return null;
        }
        Member member = answer.getMember();
        if ( member == null ) {
            return null;
        }
        String name = member.getName();
        if ( name == null ) {
            return null;
        }
        return name;
    }

    private String answerMemberImg(Answer answer) {
        if ( answer == null ) {
            return null;
        }
        Member member = answer.getMember();
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
