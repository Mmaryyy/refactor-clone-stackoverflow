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
    private final int pageSize = 3;
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
        question.setModifiedAt(LocalDateTime.now());
        return questionRepository.save(question);
    }

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
        updateView(question);
        return question;
    }

    public Page<Question> findQuestions(int page, String keyword, String sortType, int filterType){
        PageRequest pageRequest = PageRequest.of(page, pageSize, Sort.by(sortType).descending());
        if(filterType == 1) return questionRepository.findByTitleContains(keyword, pageRequest);
        else if (filterType == 2) return questionRepository.findQuestionsWithFilterNotAnswered(keyword, pageRequest);
        else return questionRepository.findQuestionsWithFilterNotAccepted(keyword, pageRequest);
    }

    public void deleteQuestion(long questionId) {
        Question question = findQuestion(questionId);
        question.canChangeQuestion(question.getQuestionStatus());
        question.setQuestionStatus(Question.QuestionStatus.QUESTION_DELETE);
    }

    public void updateView(Question question) {
        int view = question.getView();
        question.setView(view + 1);
    }


}
