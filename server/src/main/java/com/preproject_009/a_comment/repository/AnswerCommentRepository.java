package com.preproject_009.a_comment.repository;

import com.preproject_009.a_comment.entity.AnswerComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerCommentRepository extends JpaRepository<AnswerComment, Long> {
}
