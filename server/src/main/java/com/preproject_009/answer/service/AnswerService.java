package com.preproject_009.answer.service;

import com.preproject_009.answer.entity.Answer;
import com.preproject_009.answer.repository.AnswerRepository;
import org.springframework.stereotype.Service;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;

    public AnswerService(AnswerRepository answerRepository) {
        this.answerRepository = answerRepository;
    }

    public Answer createAnswer(Answer answer) {
        return null;
    }

    public Answer updateAnswer(Answer answer) {
        return null;
    }

    public Answer getAnswer(long answerId) {
        return null;
    }

    public Answer getAnswers() {
        return null;
    }

    public Answer deleteAnswer(long answerId) {
        return null;
    }


}
