package com.preproject_009.question.service;

import com.preproject_009.exception.BusinessLogicException;
import com.preproject_009.exception.ExceptionCode;
import com.preproject_009.member.service.MemberService;
import com.preproject_009.question.entity.Question;
import com.preproject_009.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.Optional;

@Transactional
@Service
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final MemberService memberService;

    public QuestionService(QuestionRepository questionRepository,
                           MemberService memberService) {
        this.questionRepository = questionRepository;
        this.memberService = memberService;
    }

    public Question createQuestion(Question question) {
        // 존재하는 회원인지?
        memberService.findVerifiedMember(question.getMember().getMemberId());
        question.setCreatedAt(LocalDateTime.now());
        return questionRepository.save(question);
    }

    // 여기 로직 논의해보기
    public Question updateQuestion(Question question) {
        Question updatedQuestion = findQuestion(question.getQuestionId());
        question.canChangeQuestion(question.getQuestionStatus());
        //관리자 권한 메서드 추가

        Optional.ofNullable(question.getTitle())
                .ifPresent(title -> updatedQuestion.setTitle(title));
        Optional.ofNullable(question.getContent())
                .ifPresent(content -> updatedQuestion.setContent(content));

        updatedQuestion.setModifiedAt(LocalDateTime.now()); // 리팩토링 가능?
        return questionRepository.save(updatedQuestion);
    }

    // 질문 하나 띄우기
    public Question findQuestion(long questionId) {
        // 존재하는 질문인지?
        Question question =
                questionRepository.findById(questionId)
                        .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return question;
    }

    public Page<Question> findQuestions(int page, String keyword, int sortType){
        PageRequest pageRequest = null;
        switch (sortType) {
            // 최신순 == 1
            case 1:
                pageRequest = PageRequest.of(page, 15, Sort.by("createdAt").descending());
                break;
            // 좋아요순 == 2
            case 2:
                pageRequest = PageRequest.of(page, 15, Sort.by("totalVote").descending());
                break;
            // 최신수정순 == 3
            case 3:
                pageRequest = PageRequest.of(page, 15, Sort.by("modifiedAt").descending());
                break;
            // 조회수순 == 4
            case 4:
                pageRequest = PageRequest.of(page, 15, Sort.by("view").descending());
                break;
        }
        return questionRepository.findByTitleContains(keyword, pageRequest);
    }

    public void deleteQuestion(long questionId) {
        questionRepository.deleteById(questionId);
    }

    public void updateView(Question question) {
        int view = question.getView();
        question.setView(view + 1);
    }

}
