package com.preproject_009.Member;

import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.FieldDescriptor;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.restdocs.request.ParameterDescriptor;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.util.MultiValueMap;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;

public class MemberDefaultField {

    public static RequestBuilder getRequestBuilder(String url,
                                                   MultiValueMap<String, String> queryParams) {
        return get(url)
                .params(
                        queryParams
                )
                .accept(MediaType.APPLICATION_JSON);
    }

    public static List<FieldDescriptor> getDefaultResponseDescriptors(JsonFieldType jsonFieldTypeForData) {
        return Arrays.asList(
                fieldWithPath("data").type(jsonFieldTypeForData).description("결과 데이터").optional()
        );
    }

    public static List<ParameterDescriptor> getDefaultRequestParameterDescriptors() {
        return List.of(
                parameterWithName("page").description("Page 번호"),
                parameterWithName("size").description("Page Size")
        );
    }

    public static List<FieldDescriptor> getPageResponseDescriptors() {
        return Arrays.asList(
                fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("페이지 정보").optional(),
                fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("페이지 번호").optional(),
                fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("페이지 사이즈").optional(),
                fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("전체 건 수").optional(),
                fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("전체 페이지 수").optional()
        );
    }

    public static List<FieldDescriptor> getDefaultMemberResponseDescriptors(DataResponseType dataResponseType) {
        String parentPath = getDataParentPath(dataResponseType);
        return List.of(
                fieldWithPath(parentPath.concat("memberId")).type(JsonFieldType.NUMBER).description("회원 식별자"),
                fieldWithPath(parentPath.concat("email")).type(JsonFieldType.STRING).description("이메일"),
                fieldWithPath(parentPath.concat("name")).type(JsonFieldType.STRING).description("이름"),
                fieldWithPath(parentPath.concat("password")).type(JsonFieldType.STRING).description("패스워드"),
                fieldWithPath(parentPath.concat("about")).type(JsonFieldType.STRING).description("자기소개"),
                fieldWithPath(parentPath.concat("memberStatus")).type(JsonFieldType.STRING)
                        .description("회원 상태: MEMBER_ACTIVE(활동 상태) / MEMBER_SLEEP(휴면 상태) / MEMBER_QUIT(탈퇴 상태)")
        );
    }

    enum DataResponseType {
        SINGLE, LIST
    }

    public static String getDataParentPath(DataResponseType dataResponseType) {
        return dataResponseType == DataResponseType.SINGLE ? "data." : "data[].";
    }

    public static List<FieldDescriptor> getFullPageResponseDescriptors(List<FieldDescriptor> dataResponseFieldDescriptors) {
        Stream<FieldDescriptor> defaultResponseDescriptors = getDefaultResponseDescriptors(JsonFieldType.ARRAY).stream();
        Stream<FieldDescriptor> dataResponseDescriptors = dataResponseFieldDescriptors.stream();
        Stream<FieldDescriptor> pageResponseDescriptors = getPageResponseDescriptors().stream();

        Stream<FieldDescriptor> mergedStream =
                Stream.of(defaultResponseDescriptors, dataResponseDescriptors, pageResponseDescriptors)
                        .flatMap(descriptorStream -> descriptorStream);
        return mergedStream.collect(Collectors.toList());
    }
}
