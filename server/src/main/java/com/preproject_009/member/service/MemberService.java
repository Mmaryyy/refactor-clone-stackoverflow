package com.preproject_009.member.service;

import com.preproject_009.auth.CustomAuthorityUtils;
import com.preproject_009.exception.BusinessLogicException;
import com.preproject_009.exception.ExceptionCode;
import com.preproject_009.member.entity.Member;
import com.preproject_009.member.repository.MemberRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Writer : 최준영
 * Date   : 2023-02-17
 * Description : createMember
 * createMember -> 유저 가입 -> parameter : member
 * findMember -> 유저 찾기 -> parameter : memberId(PK)
 */

@Transactional
@Service
public class MemberService {
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    public MemberService(MemberRepository memberRepository,
                         PasswordEncoder passwordEncoder,
                         CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    // 유저 가입
    public Member createMember(Member member) {
        member.setCreatedAt(LocalDateTime.now());
        member.setModifiedAt(LocalDateTime.now());
        // 패스워드 암호화
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        // DB에 USER Role 저장
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        return memberRepository.save(member);
    }

    // 특정 유저 찾기
    public Member findMember(long memberId) {
        return findVerifiedMember(memberId);
    }

    // 유저 찾기
    public Page<Member> findMembers(int page, int size) {

        return memberRepository.findAll(PageRequest.of(page, size, Sort.by("memberId").descending()));
    }

    // 유저 수정
    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getName())
                .ifPresent(name -> findMember.setName(name));
        Optional.ofNullable(member.getAbout())
                .ifPresent(about -> findMember.setAbout(about));
        Optional.ofNullable(member.getMemberStatus())
                .ifPresent(memberStatus -> findMember.setMemberStatus(memberStatus));

        findMember.setModifiedAt(LocalDateTime.now());

        return memberRepository.save(findMember);
    }

    // 유저 삭제
    public Member deleteMember(long memberId) {
        Member findMember = findVerifiedMember(memberId);

        findMember.setModifiedAt(LocalDateTime.now());

        findMember.setMemberStatus(Member.MemberStatus.MEMBER_QUIT);

        return memberRepository.save(findMember);
    }

    // 이메일 중복 체크 로직
    public void emailDuplicateCheck(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    // 유저 존재 유무 확인 로직
    public Member findVerifiedMember(long memberId) {
        Optional<Member> optionalMember =
                memberRepository.findById(memberId);
        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }
}
