package com.preproject_009.tag;

import com.preproject_009.member.dto.MultiResponseDto;
import com.preproject_009.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/tags")
public class TagController {
    private final TagService tagService;
    private final TagMapper tagMapper;

    public TagController(TagService tagService, TagMapper tagMapper) {
        this.tagService = tagService;
        this.tagMapper = tagMapper;
    }

    @GetMapping
    private ResponseEntity getTags() {
        List<Tag> tags = tagService.findTags();

        return new ResponseEntity<>(tagMapper.tagToTagResponses(tags), HttpStatus.OK);
    }
}
