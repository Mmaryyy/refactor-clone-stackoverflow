package com.preproject_009.question;

import com.google.gson.Gson;
import com.preproject_009.answer.mapper.AnswerMapper;
import com.preproject_009.answer.service.AnswerService;
import com.preproject_009.question.mapper.QuestionMapper;
import com.preproject_009.question.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.test.web.servlet.MockMvc;

//@WebMvcTest(controllers = {QuestionController.class, AnswerController.class})
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

    /*@Test
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
                                .post("/v1/questions/{question-id}", questionId + "/answers")
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
                        )
                ));
    }*/
}
