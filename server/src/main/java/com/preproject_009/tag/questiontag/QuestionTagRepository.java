package com.preproject_009.tag.questiontag;

import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionTagRepository extends JpaRepository<QuestionTag, Long> {
    // Question과 Tag을 연결
    QuestionTag save(QuestionTag questionTag);
}
