package com.preproject_009.tag;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-01T21:12:21+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class TagMapperImpl implements TagMapper {

    @Override
    public TagResponseDto tagToTagResponse(Tag tag) {
        if ( tag == null ) {
            return null;
        }

        long tagId = 0L;
        String title = null;
        String content = null;

        tagId = tag.getTagId();
        title = tag.getTitle();
        content = tag.getContent();

        TagResponseDto tagResponseDto = new TagResponseDto( tagId, title, content );

        return tagResponseDto;
    }

    @Override
    public List<TagResponseDto> tagToTagResponses(List<Tag> tags) {
        if ( tags == null ) {
            return null;
        }

        List<TagResponseDto> list = new ArrayList<TagResponseDto>( tags.size() );
        for ( Tag tag : tags ) {
            list.add( tagToTagResponse( tag ) );
        }

        return list;
    }
}
