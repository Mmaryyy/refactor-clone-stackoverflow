package com.preproject_009.question;

import com.google.gson.Gson;
import com.preproject_009.answer.dto.AnswerDto;
import com.preproject_009.answer.entity.Answer;
import com.preproject_009.answer.mapper.AnswerMapper;
import com.preproject_009.answer.service.AnswerService;
import com.preproject_009.question.controller.QuestionController;
import com.preproject_009.question.mapper.QuestionMapper;
import com.preproject_009.question.service.QuestionService;
import com.preproject_009.stubdata.AnswerStubData;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
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
import org.springframework.restdocs.request.ParameterDescriptor;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.List;

import static com.preproject_009.util.ApiDocumentUtils.getRequestPreProcessor;
import static com.preproject_009.util.ApiDocumentUtils.getResponsePreProcessor;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.startsWith;
import static org.mockito.BDDMockito.given;
import static org.mockito.BDDMockito.willReturn;
import static org.mockito.Mockito.doNothing;
import static org.springframework.restdocs.headers.HeaderDocumentation.*;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.requestPartFields;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.partWithName;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = {QuestionController.class})
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
public class QuestionControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @MockBean
    private QuestionService questionService;

    @MockBean
    private QuestionMapper questionMapper;

    @MockBean
    private AnswerService answerService;

    @MockBean
    private AnswerMapper answerMapper;

    @Test
    void postAnswerTest() throws Exception {
        // given
        long questionId = 1L;
        AnswerDto.Post post = (AnswerDto.Post) AnswerStubData.MockAnswer.getAnswerRequestBody(HttpMethod.POST);
        String request = gson.toJson(post);

        given(answerMapper.answerPostDtoToAnswer(Mockito.any(AnswerDto.Post.class))).willReturn(new Answer());

        Answer answer = AnswerStubData.MockAnswer.getSingleResultAnswer();
        given(answerService.createAnswer(Mockito.any(Answer.class))).willReturn(answer);

        // when
        ResultActions actions =
                mockMvc.perform(
                        RestDocumentationRequestBuilders
                                .post("/v1/questions/{question-id}/answers", questionId)                // 경로때문에 컨트롤러 위치 변경 필요
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(request));

        // then
        actions.andExpect(status().isCreated())
                .andExpect(header().string("Location", is(startsWith("/v1/questions"))))
                .andDo(document("post-answer",
                        getRequestPreProcessor(),
                        getResponsePreProcessor(),
                        pathParameters(
                                parameterWithName("question-id").description("질문 식별자")
                        ),
                        requestFields(
                                List.of(
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("내용")
                                )
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("answerId").type(JsonFieldType.NUMBER).description("질문 식별자"),
                                        fieldWithPath("memberId").type(JsonFieldType.NUMBER).description("회원 식별자"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("내용")
                                )
                        )
                ));
    }
}
