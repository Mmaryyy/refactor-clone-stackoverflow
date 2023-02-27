package com.preproject_009.stubdata;

import com.preproject_009.question.dto.QuestionDto;
import com.preproject_009.question.entity.Question;
import org.springframework.http.HttpMethod;

import java.util.HashMap;
import java.util.Map;

public class QuestionStubData {
    public static class MockQuestion {
        private static Map<HttpMethod, Object> stubQuestionRequestBody;
        static {
            stubQuestionRequestBody = new HashMap<>();
            stubQuestionRequestBody.put(HttpMethod.POST, new QuestionDto.Post(1L,"java","stub data"));
            stubQuestionRequestBody.put(HttpMethod.PATCH, new QuestionDto.Patch(1L, null,"stub Patch"));
        }

        public static Object getQuestionRequestBody(HttpMethod method) {
            return stubQuestionRequestBody.get(method);
        }

        public static Question getSingleResultQuestion() {
            return new Question(1L, "java", "stub data", Question.QuestionStatus.QUESTION_REGISTRATION);
        }


    }
}
