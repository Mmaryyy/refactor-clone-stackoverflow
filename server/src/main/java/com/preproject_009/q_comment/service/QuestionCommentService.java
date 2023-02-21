package com.preproject_009.q_comment.service;

import com.preproject_009.exception.BusinessLogicException;
import com.preproject_009.exception.ExceptionCode;
import com.preproject_009.member.service.MemberService;
import com.preproject_009.q_comment.entity.QuestionComment;
import com.preproject_009.q_comment.repository.QuestionCommentRepository;
import com.preproject_009.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
@RequiredArgsConstructor
public class QuestionCommentService {
    private final QuestionCommentRepository questionCommentRepository;
    private final MemberService memberService;
    private final QuestionService questionService;

    public QuestionComment createQuestionComment(QuestionComment questionComment) {
        verifyQuestionComment(questionComment);
        questionComment.setCreatedAt(LocalDateTime.now());

        return questionCommentRepository.save(questionComment);
    }

    public QuestionComment updateQuestionComment(QuestionComment questionComment) {
        QuestionComment findQuestionComment = findVerifiedQuestionComment(questionComment.getQuestionCommentId());
        findQuestionComment.setModifiedAt(LocalDateTime.now());

        findQuestionComment.setContent(questionComment.getContent());

        return questionCommentRepository.save(findQuestionComment);
    }

    public List<QuestionComment> findQuestionComments() {
        return questionCommentRepository.findAll();
    }

    public void deleteQuestionComment(long questionCommentId) {
        QuestionComment findQuestionComment = findVerifiedQuestionComment(questionCommentId);

        questionCommentRepository.delete(findQuestionComment);
    }

    private QuestionComment findVerifiedQuestionComment(long questionCommentId) {
        Optional<QuestionComment> optionalQuestionComment = questionCommentRepository.findById(questionCommentId);
        QuestionComment findQuestionComment =
                optionalQuestionComment.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.QUESTION_COMMENT_NOT_FOUND));
        return findQuestionComment;
    }
    private void verifyQuestionComment(QuestionComment questionComment) {
        memberService.findMember(questionComment.getMember().getMemberId());
        questionService.findQuestion(questionComment.getQuestion().getQuestionId());
    }
}
