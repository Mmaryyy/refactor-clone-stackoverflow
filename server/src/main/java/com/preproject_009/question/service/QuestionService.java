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

    public Page<Question> findQuestions(int page, int sortType){
        switch (sortType) {
            // 최신순 == 1
            case 1:
                questionRepository.findAll(PageRequest
                        .of(page, 15, Sort.by("createdAt").descending()));
                break;
            // 좋아요순 == 2
            case 2:
                // TODO: 2023/02/17
//                questionRepository.findAll(PageRequest
//                        .of(page, 15, Sort.by().descending()));

                break;
            //
        }
        return null;
    }

    public Optional<Question> findQuestionByKeyword(int page, String keyword, int sortType) {
        // TODO: 2023/02/17 : 키워드 검색 기능 구현

        return null;
   }

    public void deleteQuestion(long questionId) {
        questionRepository.deleteById(questionId);
    }

}
