package com.preproject_009.stubdata;

import com.preproject_009.answer.dto.AnswerDto;
import com.preproject_009.answer.entity.Answer;
import org.springframework.http.HttpMethod;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AnswerStubData {
    public static class MockAnswer {
        private static Map<HttpMethod, Object> stubRequestBody;
        static {
            stubRequestBody = new HashMap<>();
            stubRequestBody.put(HttpMethod.PUT, new AnswerDto.Post(1, 1, "이것은 스텁데이터입니다."));
            stubRequestBody.put(HttpMethod.PATCH, new AnswerDto.Patch(1, "이것은 수정된 스텁데이터입니다."));
        }

        public static Object getRequestBody(HttpMethod method) {
            return stubRequestBody.get(method);
        }

        /*public static Answer getSingleResultAnswer(long answerId) {

        }*/

        public static AnswerDto.Response getSingleResponseBody() {
            return new AnswerDto.Response(1, 1, "이것은 스텁데이터입니다.");
        }

        public static List<AnswerDto.Response> getMultiResponseBody() {
            return List.of(
                    new AnswerDto.Response(1, 1, "이것은 첫번째 스텁데이터입니다."),
                    new AnswerDto.Response(2, 2, "이것은 두번째 스텁데이터입니다.")
            );
        }
    }
}
