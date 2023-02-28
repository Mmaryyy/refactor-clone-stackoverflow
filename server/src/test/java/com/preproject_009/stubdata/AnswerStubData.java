package com.preproject_009.stubdata;

import com.preproject_009.a_comment.dto.AnswerCommentDto;
import com.preproject_009.a_comment.entity.AnswerComment;
import com.preproject_009.answer.dto.AnswerDto;
import com.preproject_009.answer.mapper.entity.Answer;
import org.springframework.http.HttpMethod;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class AnswerStubData {
    public static class MockAnswer {
        private static Map<HttpMethod, Object> stubAnswerRequestBody;
        static {
            stubAnswerRequestBody = new HashMap<>();
            stubAnswerRequestBody.put(HttpMethod.POST, new AnswerDto.Post(1L, 1L, "이것은 스텁데이터입니다."));
            stubAnswerRequestBody.put(HttpMethod.PATCH, new AnswerDto.Patch(1L, "이것은 스텁데이터입니다."));
        }

        private static Map<HttpMethod, Object> stubAnswerCommentRequestBody;
        static {
            stubAnswerCommentRequestBody = new HashMap<>();
            stubAnswerCommentRequestBody.put(HttpMethod.POST, new AnswerCommentDto.Post(1L, 1L, "이것은 스텁데이터입니다."));
            stubAnswerCommentRequestBody.put(HttpMethod.PATCH, new AnswerCommentDto.Patch(1L, "이것은 스텁데이터입니다."));
        }

        public static Object getAnswerRequestBody(HttpMethod method) {
            return stubAnswerRequestBody.get(method);
        }

        public static Object getAnswerCommentRequestBody(HttpMethod method) {
            return stubAnswerCommentRequestBody.get(method);
        }

        public static Answer getSingleResultAnswer() {
            return new Answer(1L, "이것은 스텁데이터입니다.", Answer.AnswerStatus.ANSWER_REGISTRATION);
        }

        public static List<Answer> getMultiResultAnswer() {
            return List.of(
                    new Answer(1L, "이것은 첫번째 스텁데이터입니다.", Answer.AnswerStatus.ANSWER_REGISTRATION),
                    new Answer(2L, "이것은 두번째 스텁데이터입니다.", Answer.AnswerStatus.ANSWER_REGISTRATION)
            );
        }

        public static AnswerDto.Response getSingleResponseBody() {
            return new AnswerDto.Response(1L, 1L, "이것은 스텁데이터입니다.", 1,
                    Answer.AnswerStatus.ANSWER_REGISTRATION,
                    LocalDateTime.of(2023, 2, 21, 15, 30, 0),
                    LocalDateTime.of(2023, 2, 21, 15, 30, 0));
        }

        public static List<AnswerDto.Response> getMultiResponseBody() {
            return List.of(
                    new AnswerDto.Response(1L, 1L, "이것은 첫번째 스텁데이터입니다.", 1,
                            Answer.AnswerStatus.ANSWER_REGISTRATION,
                            LocalDateTime.of(2023, 2, 21, 15, 30),
                            LocalDateTime.of(2023, 2, 21, 15, 30)),
                    new AnswerDto.Response(2L, 2L, "이것은 두번째 스텁데이터입니다.", 1,
                            Answer.AnswerStatus.ANSWER_REGISTRATION,
                            LocalDateTime.of(2023, 2, 21, 15, 30),
                            LocalDateTime.of(2023, 2, 21, 15, 30))
            );
        }

        public static AnswerComment getSingleResultAnswerComment() {
            return new AnswerComment(1L, "이것은 스텁데이터입니다.");
        }

        public static List<AnswerComment> getMultiResultAnswerComment() {
            return List.of(
                    new AnswerComment(1L, "이것은 첫번째 스텁데이터입니다."),
                    new AnswerComment(2L, "이것은 두번째 스텁데이터입니다.")
            );
        }

        public static AnswerCommentDto.Response getSingleCommentResponseBody() {
            return new AnswerCommentDto.Response(1L, 1L, "이것은 스텁데이터입니다.");
        }

        public static List<AnswerCommentDto.Response> getMultiCommentResponseBody() {
            return List.of(
                    new AnswerCommentDto.Response(1L, 1L, "이것은 첫번째 스텁데이터입니다."),
                    new AnswerCommentDto.Response(2L, 2L, "이것은 두번째 스텁데이터입니다.")
            );
        }
    }
}
