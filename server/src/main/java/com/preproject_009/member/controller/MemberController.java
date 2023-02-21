package com.preproject_009.member.controller;

import com.preproject_009.member.dto.MemberDto;
import com.preproject_009.member.dto.MultiResponseDto;
import com.preproject_009.member.entity.Member;
import com.preproject_009.member.mapper.MemberMapper;
import com.preproject_009.member.service.MemberService;
<<<<<<< HEAD
=======
import com.preproject_009.point.Point;
import com.preproject_009.question.dto.QuestionDto;
import com.preproject_009.question.entity.Question;
import com.preproject_009.question.entity.Tag;
import com.preproject_009.question.mapper.QuestionMapper;
>>>>>>> 1afaec360bf4ea5b3ce8ff23a1f4b844eaccd378
import com.preproject_009.question.service.QuestionService;
import com.preproject_009.utils.UriCreator;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.ArrayList;
import java.util.List;

/**
 * Writer : 최준영
 * Date   : 2023-02-17
 * Description : Member Controller
 */

@RestController
@RequestMapping("/v1/members")
@Validated
public class MemberController {
    private final static String MEMBER_DEFAULT_URL = "/v1/members";
    private final MemberService memberService;
    private final MemberMapper mapper;

<<<<<<< HEAD
    public MemberController(MemberService memberService, MemberMapper mapper){
=======
    private final QuestionMapper questionMapper;

    public MemberController(MemberService memberService, QuestionService questionService, MemberMapper mapper, QuestionMapper questionMapper) {
>>>>>>> 1afaec360bf4ea5b3ce8ff23a1f4b844eaccd378
        this.memberService = memberService;
        this.mapper = mapper;
        this.questionMapper = questionMapper;
    }

    // 유저 생성
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody){
        Member member = mapper.memberPostToMember(requestBody);

        Member createdMember = memberService.createMember(member);
        System.out.println("id는 " + createdMember.getMemberId());
        URI location = UriCreator.createUri(MEMBER_DEFAULT_URL, createdMember.getMemberId());

        return ResponseEntity.created(location).build();
//        return new ResponseEntity<>(response(createdMember), HttpStatus.CREATED);
    }

    // 유저 수정
    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(
            @PathVariable("member-id") @Positive long memberId,
            @Valid @RequestBody MemberDto.Patch requestBody){
        requestBody.addMemberId(memberId);

        Member member =
                memberService.updateMember(mapper.memberPatchToMember(requestBody));

        return new ResponseEntity<>(response(member), HttpStatus.OK);
    }

    // 특정 유저 조회
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(
            @PathVariable("member-id") @Positive long memberId){
        Member member = memberService.findMember(memberId);
        return new ResponseEntity<>(response(member), HttpStatus.OK);
    }

    // 유저 조회
    @GetMapping
    public ResponseEntity getMembers(@Positive @RequestParam int page,
                                     @Positive @RequestParam int size){
        Page<Member> pageMembers = memberService.findMembers(page - 1, size);
        List<Member> members = pageMembers.getContent();
        return new ResponseEntity<>(
                new MultiResponseDto<>(mapper.membersToMemberResponses(members),
                        pageMembers),
                HttpStatus.OK);
    }


    // 유저 삭제 처리
    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(
            @PathVariable("member-id") @Positive long memberId){
        memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/{member-id}/questions")
    public ResponseEntity postQuestion(@PathVariable("member-id") long memberId,
                                       @RequestBody @Valid QuestionDto.Post requestBody) {
        Member member = memberService.findMember(memberId);
        Question question = questionMapper.questionPostDtoToQuestion(requestBody);
        question.setMember(member);
        question.setTags(new ArrayList<Tag>());
        Question createdQuestion = questionService.createQuestion(question);
        URI location = UriCreator.createPostQuestionUri(MEMBER_DEFAULT_URL, createdQuestion.getQuestionId());

        return ResponseEntity.created(location).build();
    }

    @GetMapping("/{member-id}/questions")
    public ResponseEntity getQuestions(@PathVariable("member-id") @Positive long memberId){
        Page<Question> questionPage = questionService.findQuestionsByMember(memberId);
        List<Question> questions = questionPage.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionResponsesDto(questions),
                        questionPage), HttpStatus.OK);
    }

    public MemberDto.response response(Member member){
        return mapper.memberToMemberResponse(member);
    }
}
