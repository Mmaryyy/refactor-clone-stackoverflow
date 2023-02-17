package com.preproject_009.answer.controller;

import com.preproject_009.answer.service.AnswerService;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping
@Validated
public class AnswerController {
    private final AnswerService answerService;
    //private final AnswerMapper mapper;

    public AnswerController(AnswerService answerService) {
        this.answerService = answerService;
    }

}
