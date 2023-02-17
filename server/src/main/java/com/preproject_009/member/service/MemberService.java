package com.preproject_009.member.service;

import com.preproject_009.exception.BusinessLogicException;
import com.preproject_009.exception.ExceptionCode;
import com.preproject_009.member.entity.Member;
import com.preproject_009.member.repository.MemberRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

/** Writer : 최준영
 Date   : 2023-02-17
 Description : Member Service
 */

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository){
        this.memberRepository = memberRepository;
    }

//    public Member createMember(Member member){
//        // 이메일 중복 체크
//        emailDuplicateCheck(member.getEmail());
//    }

    // 유저 찾기
    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    public void emailDuplicateCheck(String email){
        Optional<Member> member = memberRepository.findByEmail(email);
    }

    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }
}
