package com.preproject_009.answer.service;

import com.preproject_009.answer.mapper.entity.Answer;
import com.preproject_009.answer.mapper.entity.AnswerVote;
import com.preproject_009.answer.repository.AnswerRepository;
import com.preproject_009.answer.repository.AnswerVoteRepository;
import com.preproject_009.exception.BusinessLogicException;
import com.preproject_009.exception.ExceptionCode;
import com.preproject_009.member.entity.Member;
import com.preproject_009.member.repository.MemberRepository;
import com.preproject_009.member.service.MemberService;
import com.preproject_009.question.entity.Question;
import com.preproject_009.question.repository.QuestionRepository;
import com.preproject_009.question.service.QuestionService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
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
    private final MemberRepository memberRepository;
    private final AnswerVoteRepository answerVoteRepository;
    private final QuestionRepository questionRepository;

    public AnswerService(AnswerRepository answerRepository, MemberService memberService, QuestionService questionService, MemberRepository memberRepository, AnswerVoteRepository answerVoteRepository, QuestionRepository questionRepository) {
        this.answerRepository = answerRepository;
        this.memberService = memberService;
        this.questionService = questionService;
        this.memberRepository = memberRepository;
        this.answerVoteRepository = answerVoteRepository;
        this.questionRepository = questionRepository;
    }

    public Answer createAnswer(Answer answer) {

        Member member = memberService.findVerifiedMember(answer.getMember().getMemberId());
        //질문 상태 변경
        Question question = questionService.findQuestion(answer.getQuestion().getQuestionId());
        question.setQuestionStatusAccept(Question.QuestionStatus.QUESTION_ANSWERED);
        questionRepository.save(question);

        answer.setCreatedAt(LocalDateTime.now());
        answer.setModifiedAt(LocalDateTime.now());
        member.getAnswers().add(answer);
        answerRepository.save(answer);
        System.out.println("answer saved in repository");
        return answer;
    }

    public Answer updateAnswer(Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
        findAnswer.canChangeAnswer(findAnswer.getAnswerStatus());

        findAnswer.setModifiedAt(LocalDateTime.now());
        findAnswer.setContent(answer.getContent());

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
        findAnswer.setAnswerStatus(Answer.AnswerStatus.ANSWER_DELETE);
    }

    public Answer acceptAnswer(long memberId, long questionId, long answerId) {
        long findMemberId = questionService.findQuestion(questionId).getMember().getMemberId();
        Answer findAnswer = findAnswer(answerId);
        System.out.println("!!!!!!!!questionId : " + questionId + "  answer.questionId : " + findAnswer.getQuestion().getQuestionId());
        if(memberId != findMemberId || questionId != findAnswer.getQuestion().getQuestionId()) {
            throw new BusinessLogicException(ExceptionCode.CANNOT_ACCEPT_ANSWER);
        } else {
            Question findQuestion = questionService.findQuestion(questionId);
            findAnswer.setAnswerStatus(Answer.AnswerStatus.ANSWER_ACCEPTED);
            findQuestion.setQuestionStatusAccept(Question.QuestionStatus.QUESTION_ANSWER_ACCEPTED);
        }

        return answerRepository.save(findAnswer);
    }

    public Page<Answer> findAnswersByMember(long memberId) {
        PageRequest pageRequest = PageRequest.of(0, 10, Sort.by("CREATED_AT").descending());
        return answerRepository.findAnswerByMemberId(memberId, pageRequest);
    }

    // 답변 존재 확인
    private Answer findVerifiedAnswer(long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        Answer findAnswer =
                optionalAnswer.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
        return findAnswer;
    }

    public void addAnswerVote(long answerId, long memberId) {
        // Get the question entity from the repository
        Answer answer = answerRepository.findById(answerId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        // Check if the member has already voted on the question
        boolean hasVoted = answer.getAnswerVotes().stream()
                .anyMatch(v -> v.getMember().getMemberId() == memberId);

        if (hasVoted) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_ALREADY_VOTED);
        }

        // Create a new QuestionVote entity and associate it with the question and member
        AnswerVote vote = new AnswerVote();
        vote.setAnswer(answer);
        vote.setMember(memberRepository.findById(memberId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND)));
        answerVoteRepository.save(vote);
        answer.setTotalVotes(answer.getTotalVotes());
    }
}
