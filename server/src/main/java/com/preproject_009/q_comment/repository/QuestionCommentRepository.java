package com.preproject_009.q_comment.repository;

import com.preproject_009.q_comment.entity.QuestionComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionCommentRepository extends JpaRepository<QuestionComment, Long> {
}
