package com.preproject_009.tag;

import com.preproject_009.question.entity.Question;
import com.preproject_009.question.repository.QuestionRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class TagService {
    private final TagRepository tagRepository;
    private final QuestionRepository questionRepository;

    public TagService(TagRepository tagRepository, QuestionRepository questionRepository) {
        this.tagRepository = tagRepository;
        this.questionRepository = questionRepository;
    }

    public List<Tag> findTags() {
        List<Tag> tags = tagRepository.findAll();

        return tags;
    }

    public Page<Question> findQuestionsByTag(long tagId) {
        PageRequest pageRequest = PageRequest.of(0, 10);
        return questionRepository.findQuestionByTagId(tagId, pageRequest);
    }
}
