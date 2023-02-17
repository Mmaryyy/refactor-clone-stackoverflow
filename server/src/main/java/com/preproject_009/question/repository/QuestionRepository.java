package com.preproject_009.question.repository;

import com.preproject_009.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    Optional<Question> findByTitleContains(String str);
    Page<List<Question>> findByCategory_TitleContaining(String category_name, String keyword, Pageable pageable);
}
