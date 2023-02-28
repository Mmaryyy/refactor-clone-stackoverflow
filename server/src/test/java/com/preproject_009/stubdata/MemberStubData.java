package com.preproject_009.stubdata;

import com.preproject_009.member.dto.MemberDto;
import com.preproject_009.member.entity.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpMethod;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class MemberStubData {
    public static class MockMember {
        private static Map<HttpMethod, Object> stubRequestBody;
        static {
            stubRequestBody = new HashMap<>();
            stubRequestBody.put(HttpMethod.POST, new MemberDto.Post("jun1@naver.com",
                    "최준영",
                    "안녕하세요. 최준영 입니다.",
                    "12341234a!"));
            stubRequestBody.put(HttpMethod.PATCH, new MemberDto.Patch(1, "홍길동", "안녕하세요 인사드립니다.", Member.MemberStatus.MEMBER_ACTIVE));
        }

        public static Object getRequestBody(HttpMethod method) {
            return stubRequestBody.get(method);
        }

        public static MemberDto.response getSingleResponseBody() {
            return new MemberDto.response(1L,
                    "hgd1@gmail.com",
                    "홍길동",
                    "img_address",
                    "Seoul",
                    "안녕하세요 인사드립니다.",
                    null,
                    null,
                    Member.MemberStatus.MEMBER_ACTIVE);
        }

        public static List<MemberDto.response> getMultiResponseBody() {
            return List.of(
                    new MemberDto.response(1L,
                            "hgd1@gmail.com",
                            "홍길동1",
                            "img_address",
                            "Seoul",
                            "12341234a!",
                            null,
                            null,
                            Member.MemberStatus.MEMBER_ACTIVE),
                    new MemberDto.response(2L,
                            "hgd1@gmail.com",
                            "홍길동2",
                            "img_address",
                            "Seoul",
                            "12341234a!",
                            null,
                            null,
                            Member.MemberStatus.MEMBER_ACTIVE)
            );
        }

        public static Member getSingleResultMember() {
            Member member = new Member("jun1@naver.com",
                    "최준영1",
                    "안녕하세요. 최준영 입니다.",
                    "12341234a!");
            member.setMemberStatus(Member.MemberStatus.MEMBER_ACTIVE);


            return member;
        }

        public static Page<Member> getMultiResultMember() {
            Member member1 = new Member("jun1@naver.com", "최준영1", "안녕하세요. 최준영 입니다.", "12341234a!");
            member1.setMemberStatus(Member.MemberStatus.MEMBER_ACTIVE);

            Member member2 = new Member("jun2@naver.com", "최준영2", "안녕하세요. 최준영 입니다.", "12341234a!");
            member2.setMemberStatus(Member.MemberStatus.MEMBER_ACTIVE);

            return new PageImpl<>(List.of(member1, member2),
                    PageRequest.of(1, 10, Sort.by("memberId").descending()),
                    2);
        }




    }
}
