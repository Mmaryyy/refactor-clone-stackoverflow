package com.preproject_009.answer;

import com.google.gson.Gson;
import com.preproject_009.a_comment.controller.AnswerCommentController;
import com.preproject_009.a_comment.dto.AnswerCommentDto;
import com.preproject_009.a_comment.entity.AnswerComment;
import com.preproject_009.a_comment.mapper.AnswerCommentMapper;
import com.preproject_009.a_comment.service.AnswerCommentService;
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
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = {AnswerCommentController.class})
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class AnswerCommentControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @MockBean
    private AnswerCommentService answerCommentService;

    @MockBean
    private AnswerCommentMapper answerCommentMapper;

    @Test
    void patchAnswerCommentTest() throws Exception {
        //given
        long answerCommentId = 1L;
        AnswerCommentDto.Patch patch = (AnswerCommentDto.Patch) AnswerStubData.MockAnswer.getAnswerCommentRequestBody(HttpMethod.PATCH);
        String request = gson.toJson(patch);
        AnswerCommentDto.Response response = AnswerStubData.MockAnswer.getSingleCommentResponseBody();

        given(answerCommentMapper.answerCommentPatchDtoToAnswer(Mockito.any(AnswerCommentDto.Patch.class))).willReturn(new AnswerComment());
        given(answerCommentService.updateAnswerComment(Mockito.any(AnswerComment.class))).willReturn(new AnswerComment());
        given(answerCommentMapper.answerToAnswerCommentResponse(Mockito.any(AnswerComment.class))).willReturn(response);

        //when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders
                                .patch("/v1/answerComments/{answerComment-id}", answerCommentId)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(request));

        //then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.answerCommentId").value(patch.getAnswerCommentId()))
                .andExpect(jsonPath("$.content").value(patch.getContent()))
                .andDo(document("patch-answerComment",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("answerComment-id").description("답변 댓글 식별자")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("answerCommentId").type(JsonFieldType.NUMBER).description("답변 댓글 식별자"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("내용")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("answerCommentId").type(JsonFieldType.NUMBER).description("답변 댓글 식별자"),
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("내용")
                                )
                        )
                ));
    }

    @Test
    void getAnswerCommentsTest() throws Exception {
        //given
        List<AnswerComment> answerComments = AnswerStubData.MockAnswer.getMultiResultAnswerComment();
        List<AnswerCommentDto.Response> responses = AnswerStubData.MockAnswer.getMultiCommentResponseBody();

        given(answerCommentService.findAnswerComments()).willReturn(answerComments);
        given(answerCommentMapper.answersToAnswerCommentResponses(Mockito.any())).willReturn(responses);

        //when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders
                                .get("/v1/answerComments")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON));

        //then
        actions.andExpect(status().isOk())
                .andDo(document("get-answerComments",
                        getResponsePreProcessor(),
                        responseFields(
                                List.of(
                                        fieldWithPath("[].answerCommentId").type(JsonFieldType.NUMBER).description("답변 댓글 식별자"),
                                        fieldWithPath("[].memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("[].content").type(JsonFieldType.STRING).description("내용")
                                )
                        )
                )).andReturn();
    }

    @Test
    void deleteAnswerCommentTest() throws Exception {
        //given
        long answerCommentId = 1L;

        doNothing().when(answerCommentService).deleteAnswerComment(answerCommentId);

        //when
        mockMvc.perform(
                RestDocumentationRequestBuilders
                        .delete("/v1/answerComments/{answerComment-id}", answerCommentId))
                .andExpect(status().isNoContent());
        //then
    }
}
