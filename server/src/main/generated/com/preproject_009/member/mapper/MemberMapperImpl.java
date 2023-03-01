package com.preproject_009.member.mapper;

import com.preproject_009.answer.entity.Answer;
import com.preproject_009.member.dto.MemberDto;
import com.preproject_009.member.entity.Member;
import com.preproject_009.question.entity.Question;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-01T10:53:54+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostToMember(MemberDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( requestBody.getEmail() );
        member.setName( requestBody.getName() );
        member.setPassword( requestBody.getPassword() );
        member.setAbout( requestBody.getAbout() );
        member.setImg( requestBody.getImg() );

        return member;
    }

    @Override
    public Member memberPatchToMember(MemberDto.Patch requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( requestBody.getMemberId() );
        member.setName( requestBody.getName() );
        member.setAbout( requestBody.getAbout() );
        member.setMemberStatus( requestBody.getMemberStatus() );

        return member;
    }

    @Override
    public MemberDto.response memberToMemberResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        long memberId = 0L;
        List<Question> questions = null;
        List<Answer> answers = null;
        String email = null;
        String name = null;
        String img = null;
        String location = null;
        String about = null;
        Member.MemberStatus memberStatus = null;

        memberId = member.getMemberId();
        List<Question> list = member.getQuestions();
        if ( list != null ) {
            questions = new ArrayList<Question>( list );
        }
        List<Answer> list1 = member.getAnswers();
        if ( list1 != null ) {
            answers = new ArrayList<Answer>( list1 );
        }
        email = member.getEmail();
        name = member.getName();
        img = member.getImg();
        location = member.getLocation();
        about = member.getAbout();
        memberStatus = member.getMemberStatus();

        MemberDto.response response = new MemberDto.response( memberId, email, name, img, location, about, questions, answers, memberStatus );

        return response;
    }

    @Override
    public List<MemberDto.response> membersToMemberResponses(List<Member> members) {
        if ( members == null ) {
            return null;
        }

        List<MemberDto.response> list = new ArrayList<MemberDto.response>( members.size() );
        for ( Member member : members ) {
            list.add( memberToMemberResponse( member ) );
        }

        return list;
    }
}
