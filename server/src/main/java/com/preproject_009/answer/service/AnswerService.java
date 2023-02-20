package com.preproject_009.answer.service;

import com.preproject_009.answer.entity.Answer;
import com.preproject_009.answer.repository.AnswerRepository;
import com.preproject_009.exception.BusinessLogicException;
import com.preproject_009.exception.ExceptionCode;
import com.preproject_009.member.service.MemberService;
import com.preproject_009.question.entity.Question;
import com.preproject_009.question.service.QuestionService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final MemberService memberService;
    private final QuestionService questionService;

    public AnswerService(AnswerRepository answerRepository, MemberService memberService, QuestionService questionService) {
        this.answerRepository = answerRepository;
        this.memberService = memberService;
        this.questionService = questionService;
    }

    public Answer createAnswer(Answer answer) {
        verifyAnswer(answer);
        answer.setCreatedAt(LocalDateTime.now());

        //질문 상태 변경
        Question question = questionService.findQuestion(answer.getQuestion().getQuestionId());
        question.setQuestionStatus(Question.QuestionStatus.QUESTION_ANSWER_ACCEPTED);
        answer.setQuestion(question);

        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        findAnswer.canChangeAnswer(findAnswer.getAnswerStatus());

        findAnswer.setModifiedAt(LocalDateTime.now());
        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));

        return answerRepository.save(findAnswer);
    }

    public Answer findAnswer(long answerId) {
        return findVerifiedAnswer(answerId);
    }

    public List<Answer> findAnswers() {
        List<Answer> answers = answerRepository.findAll();

        return answers;
    }

    public void deleteAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);

        //member가 admin인지 검증
        //if(front에서 날려주는 memberId.getEmail() == adminEmail) {answerRepository.delete(findAnswer);}
        findAnswer.canChangeAnswer(findAnswer.getAnswerStatus());

        answerRepository.delete(findAnswer);
    }

    // 답변 존재 확인
    private Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }

    private void verifyAnswer(Answer answer) {
        //회원 존재 확인
        memberService.findMember(answer.getMember().getMemberId());

        //질문 존재 확인
        questionService.findQuestion(answer.getQuestion().getQuestionId());
    }
}
