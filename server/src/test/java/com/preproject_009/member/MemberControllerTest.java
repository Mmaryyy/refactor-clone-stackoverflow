package com.preproject_009.member;

import com.google.gson.Gson;
import com.jayway.jsonpath.JsonPath;
import com.preproject_009.member.controller.MemberController;
import com.preproject_009.member.dto.MemberDto;
import com.preproject_009.member.entity.Member;
import com.preproject_009.member.mapper.MemberMapper;
import com.preproject_009.member.service.MemberService;
import com.preproject_009.question.dto.QuestionDto;
import com.preproject_009.question.entity.Question;
import com.preproject_009.question.mapper.QuestionMapper;
import com.preproject_009.question.service.QuestionService;
import com.preproject_009.stubdata.MemberStubData;
import com.preproject_009.stubdata.QuestionStubData;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.List;

import static com.preproject_009.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.preproject_009.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.startsWith;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.headers.HeaderDocumentation.headerWithName;
import static org.springframework.restdocs.headers.HeaderDocumentation.responseHeaders;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(
        controllers = {MemberController.class}
)
@MockBean(JpaMetamodelMappingContext.class)
@WebAppConfiguration
@AutoConfigureRestDocs
public class MemberControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private MemberMapper memberMapper;

    @MockBean
    private MemberService memberService;

    @Autowired
    private Gson gson;

    String MEMBER_DEFAULT_URL = "/v1/members";
    String MEMBER_RESOURCE_ID = "/{member-id}";
    String MEMBER_RESOURCE_URI = MEMBER_DEFAULT_URL + MEMBER_RESOURCE_ID;
    @MockBean
    private QuestionService questionService;
    @MockBean
    private QuestionMapper questionMapper;

    @Test
    public void postMemberTest() throws Exception {

        long memberId = 1L;
        MemberDto.Post post = (MemberDto.Post) MemberStubData.MockMember.getRequestBody(HttpMethod.POST);
        String request = gson.toJson(post);

        // willReturn()이 최소한 null은 아니어야 한다.
        given(memberMapper.memberPostToMember(Mockito.any(MemberDto.Post.class))).willReturn(new Member());

        Member mockResultMember = new Member();
        mockResultMember.setMemberId(memberId);
        given(memberService.createMember(Mockito.any(Member.class))).willReturn(mockResultMember);


        ResultActions actions =
                mockMvc.perform(RestDocumentationRequestBuilders.post("/v1/members", request)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(request));

        actions
                .andExpect(status().isCreated())
                .andExpect(header().string("Location", is(startsWith("/v1/members"))))
                .andDo(document("post-member",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        requestFields(
                                List.of(
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("name").type(JsonFieldType.STRING).description("이름"),
                                        fieldWithPath("about").type(JsonFieldType.STRING).description("자기소개"),
                                        fieldWithPath("password").type(JsonFieldType.STRING).description("패스워드")
                                )
                        ),
                        responseHeaders(
                                headerWithName(HttpHeaders.LOCATION).description("Location header. 등록된 리소스의 URI")
                        )
                ));
    }

    @Test
    void patchMemberTest() throws Exception {

        long memberId = 1L;
        MemberDto.Patch patch = (MemberDto.Patch) MemberStubData.MockMember.getRequestBody(HttpMethod.PATCH);
        String request = gson.toJson(patch);

        MemberDto.response responseDto = MemberStubData.MockMember.getSingleResponseBody();

        given(memberMapper.memberPatchToMember(Mockito.any(MemberDto.Patch.class))).willReturn(new Member());

        given(memberService.updateMember(Mockito.any(Member.class))).willReturn(new Member());

        given(memberMapper.memberToMemberResponse(Mockito.any(Member.class))).willReturn(responseDto);


        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders
                                .patch("/v1/members/{member-id}", memberId)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(request));

        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.memberId").value(patch.getMemberId()))
                .andExpect(jsonPath("$.name").value(patch.getName()))
                .andExpect(jsonPath("$.about").value(patch.getAbout()))
                .andExpect(jsonPath("$.memberStatus").value(patch.getMemberStatus().name()))
                .andDo(document("patch-member",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("member-id").description("멤버 식별자")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자").ignored(),
                                        fieldWithPath("name").type(JsonFieldType.STRING).description("이름").optional(),
                                        fieldWithPath("about").type(JsonFieldType.STRING).description("자기소개").optional(),
                                        fieldWithPath("memberStatus").type(JsonFieldType.STRING)
                                                .description("회원 상태: MEMBER_ACTIVE(활동 상태) / MEMBER_SLEEP(휴면 상태) / MEMBER_QUIT(탈퇴 상태)").optional()
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("name").type(JsonFieldType.STRING).description("이름"),
                                        fieldWithPath("password").type(JsonFieldType.STRING).description("패스워드"),
                                        fieldWithPath("about").type(JsonFieldType.STRING).description("자기소개"),
                                        fieldWithPath("memberStatus").type(JsonFieldType.STRING)
                                                .description("회원 상태: MEMBER_ACTIVE(활동 상태) / MEMBER_SLEEP(휴면 상태) / MEMBER_QUIT(탈퇴 상태)")
                                )
                        )
                ));
    }

    @Test
    public void getMemberTest() throws Exception {

        long memberId = 1L;
        MemberDto.response response = MemberStubData.MockMember.getSingleResponseBody();
        String request = gson.toJson(response);

        given(memberService.findMember(Mockito.anyLong())).willReturn(new Member());
        given(memberMapper.memberToMemberResponse(Mockito.any(Member.class))).willReturn(response);


        ResultActions actions =
                mockMvc.perform(RestDocumentationRequestBuilders.get("/v1/members", memberId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(request));

        // then
        actions
                .andDo(document("get-member",
                        getResponsePreProcessor(),
                        responseFields(
                                List.of(
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("email").type(JsonFieldType.STRING).description("이메일"),
                                        fieldWithPath("name").type(JsonFieldType.STRING).description("이름"),
                                        fieldWithPath("password").type(JsonFieldType.STRING).description("패스워드"),
                                        fieldWithPath("about").type(JsonFieldType.STRING).description("자기소개"),
                                        fieldWithPath("memberStatus").type(JsonFieldType.STRING)
                                                .description("회원 상태: MEMBER_ACTIVE(활동 상태) / MEMBER_SLEEP(휴면 상태) / MEMBER_QUIT(탈퇴 상태)")
                                )
                        )
                )).andReturn();
    }

    @Test
    public void getMembersTest() throws Exception {
        // given
        String page = "1";
        String size = "10";

        MultiValueMap<String, String> queryParams = new LinkedMultiValueMap<>();
        queryParams.add("page", page);
        queryParams.add("size", size);

        Page<Member> members = MemberStubData.MockMember.getMultiResultMember();
        List<MemberDto.response> responses = MemberStubData.MockMember.getMultiResponseBody();

        given(memberService.findMembers(Mockito.anyInt(), Mockito.anyInt())).willReturn(members);
        given(memberMapper.membersToMemberResponses(Mockito.anyList())).willReturn(responses);

        ResultActions actions = mockMvc.perform(MemberDefaultField.getRequestBuilder(MEMBER_DEFAULT_URL, queryParams));

        MvcResult result =
                actions
                        .andExpect(status().isOk())
                        .andDo(
                                document(
                                        "get-members",
                                        getRequestPreProcessor(),
                                        getResponsePreProcessor(),
                                        requestParameters(
                                                MemberDefaultField.getDefaultRequestParameterDescriptors()
                                        ),
                                        responseFields(
                                                MemberDefaultField.getFullPageResponseDescriptors(
                                                        MemberDefaultField.getDefaultMemberResponseDescriptors(MemberDefaultField.DataResponseType.LIST))

                                        )
                                )
                        )
                        .andReturn();

        List list = JsonPath.parse(result.getResponse().getContentAsString()).read("$.data");
        assertThat(list.size(), is(2));
    }

    @Test
    public void deleteMemberTest() throws Exception {
        long memberId = 1L;

        doNothing().when(memberService).deleteMember(memberId);

        //when
        mockMvc.perform(
                        RestDocumentationRequestBuilders
                                .delete("/v1/members/{member-id}", memberId))
                .andExpect(status().isNoContent());
    }

    @Test
    void postQuestionTest() throws Exception {
        //given
        long memberId = 1L;
        QuestionDto.Post post = (QuestionDto.Post) QuestionStubData.MockQuestion.getQuestionRequestBody(HttpMethod.POST);
        String request = gson.toJson(post);

        given(questionMapper.questionPostDtoToQuestion(Mockito.any(QuestionDto.Post.class))).willReturn(new Question());

        Question question = QuestionStubData.MockQuestion.getSingleResultQuestion();
        given(questionService.createQuestion(Mockito.any(Question.class))).willReturn(question);

        //when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders
                                .post("/v1/members/{member-id}/questions", memberId)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(request));

        // then
        actions.andExpect(status().isCreated())
                .andExpect(header().string("Location", is(startsWith("/v1/members")))
        );
    }
}

