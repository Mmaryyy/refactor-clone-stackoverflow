package com.preproject_009.preproject.Member;

import com.preproject_009.member.dto.MemberDto;
import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import java.net.URL;

import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.startsWith;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@Transactional
@SpringBootTest
@AutoConfigureMockMvc
public class MemberControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private Gson gson;

    @Test
    void postMemberTest() throws Exception {
        MemberDto.Post post = new MemberDto.Post("jun1@naver.com",
                "최준영",
                "안녕하세요. 최준영 입니다.",
                "12341234a!");

        String request = gson.toJson(post);

        ResultActions actions =
                mockMvc.perform(
                        post("/v1/members")
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(request)
                );
        actions
                .andExpect(status().isCreated())
                .andExpect(header().string("Location", is(startsWith("/v1/members/"))));
    }

//    @Test
//    void getMemberTest() throws Exception {
//        MemberDto.Post post = new MemberDto.Post("jun1@naver.com",
//                "최준영",
//                "안녕하세요. 최준영 입니다.",
//                "12341234a!");
//
//        String request = gson.toJson(post);
//
//        ResultActions postActions =
//                mockMvc.perform(
//                        post("/v1/members")
//                                .accept(MediaType.APPLICATION_JSON)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(request)
//                );
//        String location = postActions.andReturn().getResponse().getHeader("Location");
//        mockMvc.perform(
//                get(location)
//                        .accept(MediaType.APPLICATION_JSON)
//        )
//                .andExpect(status().isOk())
//                .andExpect(jsonPath("$.data.email").value(post.getEmail()))
//                .andExpect(jsonPath("$.data.name").value(post.getName()))
//                .andExpect(jsonPath("$.data.about").value(post.getAbout()))
//                .andExpect(jsonPath("$.data.password").value(post.getPassword()));
//    }
}
