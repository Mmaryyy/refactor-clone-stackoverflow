package com.preproject_009.utils;

import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;

public class UriCreator {
    public static URI createUri(String defaultUrl, long resourceId){
        return UriComponentsBuilder
                .newInstance()
                .path(defaultUrl + "/{resource-id}")
                .buildAndExpand(resourceId)
                .toUri();
    }

    public static URI createPostAnswerUri(String defaultUrl, long resourceId){
        return UriComponentsBuilder
                .newInstance()
                .path(defaultUrl + "/{resource-id}/Answers")
                .buildAndExpand(resourceId)
                .toUri();
    }

    public static URI createPostAnswerCommentUri(String defaultUrl, long resourceId){
        return UriComponentsBuilder
                .newInstance()
                .path(defaultUrl + "/{resource-id}/AnswerComments")
                .buildAndExpand(resourceId)
                .toUri();
    }

    public static URI createPostQuestionUri(String defaultUrl, long resourceId) {
        return UriComponentsBuilder
                .newInstance()
                .path(defaultUrl + "/{resource-id}/Questions")
                .buildAndExpand(resourceId)
                .toUri();
    }

    public static URI createPostQuestionCommentUri(String defaultUrl, long resourceId){
        return UriComponentsBuilder
                .newInstance()
                .path(defaultUrl + "/{resource-id}/QuestionComments")
                .buildAndExpand(resourceId)
                .toUri();
    }
}
