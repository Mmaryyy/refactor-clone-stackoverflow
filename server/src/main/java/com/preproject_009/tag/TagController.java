package com.preproject_009.tag;

import com.preproject_009.member.dto.MultiResponseDto;
import com.preproject_009.question.entity.Question;
import com.preproject_009.question.mapper.QuestionMapper;
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
@RequestMapping("/api/tags")
public class TagController {
    private final TagService tagService;
    private final TagMapper tagMapper;
    private final QuestionMapper questionMapper;

    public TagController(TagService tagService, TagMapper tagMapper, QuestionMapper questionMapper) {
        this.tagService = tagService;
        this.tagMapper = tagMapper;
        this.questionMapper = questionMapper;
    }

    @GetMapping("/{tag-id}")
    private ResponseEntity getTag(@PathVariable("tag-id") @Positive long tagId) {
        Tag tag = tagService.findTag(tagId);
        return new ResponseEntity(tagMapper.tagToTagResponse(tag), HttpStatus.OK);
    }

    @GetMapping
    private ResponseEntity getTags() {
        List<Tag> tags = tagService.findTags();

        return new ResponseEntity<>(tagMapper.tagToTagResponses(tags), HttpStatus.OK);
    }

    @GetMapping("/{tag-id}/questions")
    public ResponseEntity getTagQuestions(@PathVariable("tag-id") @Positive long tagId){
        Page<Question> questionPage = tagService.findQuestionsByTag(tagId);
        List<Question> questions = questionPage.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(questionMapper.questionsToQuestionResponsesDto(questions),
                        questionPage), HttpStatus.OK);
    }
}
