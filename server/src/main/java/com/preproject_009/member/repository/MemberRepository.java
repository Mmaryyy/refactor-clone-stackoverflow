package com.preproject_009.member.repository;

import com.preproject_009.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Writer : 최준영
 * Date   : 2023-02-17
 * Description : Member Repository
 */

public interface MemberRepository extends JpaRepository<Member, Long> {

    // 이메일 찾기
    Optional<Member> findByEmail(String email);
}
