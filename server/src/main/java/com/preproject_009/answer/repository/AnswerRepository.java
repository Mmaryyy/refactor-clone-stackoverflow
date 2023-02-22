package com.preproject_009.answer.repository;

import com.preproject_009.answer.entity.Answer;
import com.preproject_009.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
    @Query(value = "SELECT * FROM Answer WHERE MEMBER_ID = :memberId AND Answer_Status <> 'ANSWER_DELETE' ", nativeQuery = true)
    Page<Answer> findAnswerByMemberId(@Param("memberId") long memberId, Pageable pageable);
}
