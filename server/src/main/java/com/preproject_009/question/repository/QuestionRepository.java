package com.preproject_009.question.repository;

import com.preproject_009.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Optional<Question> findByTitleContains(String str);
    Page<Question> findByTitleContains(String str, Pageable pageable);
}
