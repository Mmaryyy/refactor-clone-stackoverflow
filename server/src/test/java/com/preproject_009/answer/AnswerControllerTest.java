package com.preproject_009.answer;

import com.google.gson.Gson;
import com.preproject_009.a_comment.controller.AnswerCommentController;
import com.preproject_009.a_comment.dto.AnswerCommentDto;
import com.preproject_009.a_comment.entity.AnswerComment;
import com.preproject_009.a_comment.mapper.AnswerCommentMapper;
import com.preproject_009.a_comment.service.AnswerCommentService;
import com.preproject_009.answer.controller.AnswerController;
import com.preproject_009.answer.dto.AnswerDto;
import com.preproject_009.answer.entity.Answer;
import com.preproject_009.answer.mapper.AnswerMapper;
import com.preproject_009.answer.service.AnswerService;
import com.preproject_009.stubdata.AnswerStubData;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.List;

import static com.preproject_009.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.preproject_009.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.startsWith;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = {AnswerController.class, AnswerCommentController.class})
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class AnswerControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @MockBean
    private AnswerService answerService;

    @MockBean
    private AnswerMapper answerMapper;

    @MockBean
    private AnswerCommentService answerCommentService;

    @MockBean
    private AnswerCommentMapper answerCommentMapper;

    @Test
    public void postAnswerCommentTest() throws Exception {
        //given
        long answerId = 1L;
        AnswerCommentDto.Post post = (AnswerCommentDto.Post) AnswerStubData.MockAnswer.getAnswerCommentRequestBody(HttpMethod.POST);
        String request = gson.toJson(post);

        given(answerCommentMapper.answerCommentPostDtoToAnswer(Mockito.any(AnswerCommentDto.Post.class))).willReturn(new AnswerComment());

        AnswerComment answerComment = AnswerStubData.MockAnswer.getSingleResultAnswerComment();
        given(answerCommentService.createAnswerComment(Mockito.any(AnswerComment.class))).willReturn(answerComment);

        //when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders
                                .post("/v1/answers/{answer-id}", answerId + "/answerComments")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(request));

        //then
        actions.andExpect(status().isCreated())
                .andExpect(header().string("Location", is(startsWith("/v1/answers"))))
                .andDo(document("post-answerComment",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("answer-id").description("답변 식별자")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("answerId").type(JsonFieldType.NUMBER).description("답변 식별자"),
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("내용")
                                )
                        )
                        ));
    }

    @Test
    public void patchAnswerTest() throws Exception {
        //given
        long answerId = 1L;
        AnswerDto.Patch patch = (AnswerDto.Patch) AnswerStubData.MockAnswer.getAnswerRequestBody(HttpMethod.PATCH);
        String request = gson.toJson(patch);
        AnswerDto.Response response = AnswerStubData.MockAnswer.getSingleResponseBody();

        given(answerMapper.answerPatchDtoToAnswer(Mockito.any(AnswerDto.Patch.class))).willReturn(new Answer());
        given(answerService.updateAnswer(Mockito.any(Answer.class))).willReturn(new Answer());
        given(answerMapper.answerToAnswerResponse(Mockito.any(Answer.class))).willReturn(response);

        //when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders
                                .patch("/v1/answers/{answer-id}", answerId)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(request));

        //then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.answerId").value(patch.getAnswerId()))
                .andExpect(jsonPath("$.content").value(patch.getContent()))
                .andDo(document("patch-answer",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("answer-id").description("답변 식별자")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("answerId").type(JsonFieldType.NUMBER).description("답변 식별자"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("내용")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("answerId").type(JsonFieldType.NUMBER).description("답변 식별자"),
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("내용"),
                                        fieldWithPath("totalVote").type(JsonFieldType.NUMBER).description("총 좋아요 수"),
                                        fieldWithPath("answerStatus").type(JsonFieldType.STRING).description("답변 상태"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("수정 시간")
                                )
                        )
                        ));
    }

    @Test
    public void getAnswersTest() throws Exception {
        //given
        List<Answer> answers = AnswerStubData.MockAnswer.getMultiResultAnswer();
        List<AnswerDto.Response> responses = AnswerStubData.MockAnswer.getMultiResponseBody();

        given(answerService.findAnswers()).willReturn(answers);
        given(answerMapper.answersToAnswerResponses(Mockito.any())).willReturn(responses);

        //when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders
                                .get("/v1/answers")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON));

        //then
        actions.andExpect(status().isOk())
                .andDo(document("get-answers",
                        getResponsePreProcessor(),
                        responseFields(
                                List.of(
                                        fieldWithPath("[].answerId").type(JsonFieldType.NUMBER).description("답변 식별자"),
                                        fieldWithPath("[].memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("[].content").type(JsonFieldType.STRING).description("내용"),
                                        fieldWithPath("[].totalVote").type(JsonFieldType.NUMBER).description("총 좋아요 수"),
                                        fieldWithPath("[].answerStatus").type(JsonFieldType.STRING).description("답변 상태"),
                                        fieldWithPath("[].modifiedAt").type(JsonFieldType.STRING).description("수정 시간")
                                )
                        )
                        )).andReturn();
    }

    @Test
    public void deleteAnswerTest() throws Exception {
        //given
        long answerId = 1L;

        doNothing().when(answerService).deleteAnswer(answerId);

        //when
        mockMvc.perform(
                RestDocumentationRequestBuilders
                        .delete("/v1/answers/{answers-id}", answerId))
                .andExpect(status().isNoContent());
        //then
    }
}
