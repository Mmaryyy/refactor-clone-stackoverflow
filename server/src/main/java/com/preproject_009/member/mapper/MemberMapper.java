package com.preproject_009.member.mapper;

import com.preproject_009.member.dto.MemberDto;
import com.preproject_009.member.entity.Member;
import com.preproject_009.member.service.MemberService;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
    Member memberPostToMember(MemberDto.Post requestBody);
    Member memberPatchToMember(MemberDto.Patch requestBody);
    MemberDto.response memberToMemberResponse(Member member);
    List<MemberDto.response> membersToMemberResponses(List<Member> members);
}
