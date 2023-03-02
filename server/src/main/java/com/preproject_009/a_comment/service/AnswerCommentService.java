package com.preproject_009.a_comment.service;

import com.preproject_009.a_comment.entity.AnswerComment;
import com.preproject_009.a_comment.repository.AnswerCommentRepository;
import com.preproject_009.answer.service.AnswerService;
import com.preproject_009.exception.BusinessLogicException;
import com.preproject_009.exception.ExceptionCode;
import com.preproject_009.member.service.MemberService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class AnswerCommentService {
    private final AnswerCommentRepository answerCommentRepository;
    private final MemberService memberService;
    private final AnswerService answerService;

    public AnswerCommentService(AnswerCommentRepository answerCommentRepository, MemberService memberService, AnswerService answerService) {
        this.answerCommentRepository = answerCommentRepository;
        this.memberService = memberService;
        this.answerService = answerService;
    }

    public AnswerComment createAnswerComment(AnswerComment answerComment) {
        verifyAnswerComment(answerComment);
        answerComment.setCreatedAt(LocalDateTime.now());
        answerComment.setModifiedAt(LocalDateTime.now());

        return answerCommentRepository.save(answerComment);
    }

    public AnswerComment updateAnswerComment(AnswerComment answerComment) {
        AnswerComment findAnswerComment = findVerifiedAnswerComment(answerComment.getAnswerCommentId());

        findAnswerComment.setModifiedAt(LocalDateTime.now());
        findAnswerComment.setContent(answerComment.getContent());

        return answerCommentRepository.save(findAnswerComment);
    }

    public List<AnswerComment> findAnswerComments() {
        return answerCommentRepository.findAll();
    }

    public void deleteAnswerComment(long answerCommentId) {
        AnswerComment findAnswerComment = findVerifiedAnswerComment(answerCommentId);

        answerCommentRepository.delete(findAnswerComment);
    }

    // 답변 댓글 존재 확인
    private AnswerComment findVerifiedAnswerComment(long answerCommentId) {
        Optional<AnswerComment> optionalAnswerComment = answerCommentRepository.findById(answerCommentId);
        AnswerComment findAnswerComment =
                optionalAnswerComment.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_COMMENT_NOT_FOUND));
        return findAnswerComment;
    }

    private void verifyAnswerComment(AnswerComment answerComment) {
        //회원 존재 확인
        memberService.findMember(answerComment.getMember().getMemberId());

        //답변 존재 확인
        answerService.findAnswer(answerComment.getAnswer().getAnswerId());
    }
}
