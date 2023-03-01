package com.preproject_009.tag;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-01T10:53:54+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class TagMapperImpl implements TagMapper {

    @Override
    public TagResponseDto tagToTagResponse(Tag tag) {
        if ( tag == null ) {
            return null;
        }

        TagResponseDto tagResponseDto = new TagResponseDto();

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
