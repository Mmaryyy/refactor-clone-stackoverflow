package com.preproject_009.answer.service;

import com.preproject_009.answer.entity.Answer;
import com.preproject_009.answer.repository.AnswerRepository;
import com.preproject_009.exception.BusinessLogicException;
import com.preproject_009.exception.ExceptionCode;
import com.preproject_009.member.service.MemberService;
import com.preproject_009.question.entity.Question;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final MemberService memberService;
    //private final QuestionService questionService;

    public AnswerService(AnswerRepository answerRepository, MemberService memberService) {
        this.answerRepository = answerRepository;
        this.memberService = memberService;
    }

    public Answer createAnswer(Answer answer) {
        verifyAnswer(answer);

        //질문 상태 변경
        //Question question = questionService.findQuestion(answer.getQuestion.getQuestionId());
        //question.setQuestionStatus(Question.QuestionStatus.QUESTION_ANSWER_ACCEPTED);
        //answer.setQuestion(question);

        return answerRepository.save(answer);
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        findAnswer.canChangeAnswer(findAnswer.getAnswerStatus());

        Optional.ofNullable(answer.getContent())
                .ifPresent(content -> findAnswer.setContent(content));
        Optional.ofNullable(answer.getModifiedAt())
                .ifPresent(modifiedAt -> findAnswer.setModifiedAt(modifiedAt));

        return answerRepository.save(findAnswer);
    }

    public Answer findAnswer(long answerId) {
        return findVerifiedAnswer(answerId);
    }

    public List<Answer> findAnswers() {
        List<Answer> answers = answerRepository.findAll();

        return answers;
    }

    public void cancelAnswer(long answerId) {
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.canChangeAnswer(findAnswer.getAnswerStatus());

        answerRepository.delete(findAnswer);

    }

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
        //questionService.findQuestion(answer.getQuestion().getQuestionId());
    }
}
