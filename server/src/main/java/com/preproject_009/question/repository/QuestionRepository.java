package com.preproject_009.question.repository;

import com.preproject_009.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    @Query(value = "SELECT * FROM Question WHERE (:keyword IS NULL OR TITLE LIKE CONCAT('%', :keyword, '%')) AND (Question_Status <> 'QUESTION_DELETE')", nativeQuery = true)
    Page<Question> findByTitleContains(String keyword, Pageable pageable);

    @Query(value = "SELECT * FROM Question WHERE (:keyword IS NULL OR TITLE LIKE CONCAT('%', :keyword, '%')) AND (Question_Status = 'QUESTION_REGISTRATION' OR Question_Status = 'QUESTION_ANSWERED')", nativeQuery = true)
    Page<Question> findQuestionsWithFilterNotAccepted(@Param("keyword") String keyword, Pageable pageable);

    @Query(value = "SELECT * FROM Question WHERE (:keyword IS NULL OR TITLE LIKE CONCAT('%', :keyword, '%')) AND (Question_Status = 'QUESTION_REGISTRATION')", nativeQuery = true)
    Page<Question> findQuestionsWithFilterNotAnswered(@Param("keyword") String keyword, Pageable pageable);

    @Query(value = "SELECT * FROM Question WHERE MEMBER_ID = :memberId AND Question_Status <> 'QUESTION_DELETE' ", nativeQuery = true)
    Page<Question> findQuestionByMemberId(@Param("memberId") long memberId, Pageable pageable);

    @Query(value = "SELECT * FROM Question WHERE TAG_ID = :tagId AND Question_Status <> 'QUESTION_DELETE' ", nativeQuery = true)
    Page<Question> findQuestionByTagId(@Param("tagId") long tagId, Pageable pageable);
}
