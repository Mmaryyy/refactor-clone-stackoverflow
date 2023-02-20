import React from 'react'
import styled from 'styled-components'
import { TagButton } from '../styles/styledcomponents'

const ContentContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--tab__focus);
  padding: 15px;
`
const SummaryContainer = styled.div`
  width: 9rem;
  padding: 10px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const ContentDetailContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    > *{
        margin: 5px 0;
    }
`
const PostSummaryContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const SummaryTitle = styled.div`
  
  color: var(--content__view--low);
  font-weight: 600;
  
  &.view__vote {
    color: black;
  }
  &.view__mid {
    color: var(--content__view--mid);
  }
  &.view__high {
    color: var(--content__view--high);
  }
  &.answer__selected {
    background: var(--content__answer);
    color: white;
    border-radius: 3px;
    padding: 4px;
  }
`
const PostTitle = styled.p`
  color: var(--link__content);
  font-size: var(--fs-body2);
  font-weight: 500;
`
const BodyContainer = styled.p`
  overflow: hidden;
  width: inherit;
`
const Content = ({ contents, answer }) => {
  const { content, createdAt, isSelected, lastModifiedAt, tag, title, view, votes } = contents
  console.log(answer)
  return (
    <ContentContainer>
      <SummaryContainer className="content_summary">
        <SummaryTitle className="view__vote">{votes} votes</SummaryTitle>
        <SummaryTitle className={isSelected ? 'answer__selected' : null}>{answer.length} answers</SummaryTitle>
        <SummaryTitle>{view} views</SummaryTitle>
      </SummaryContainer>
      <ContentDetailContainer className="content_details">
        <PostTitle>{title}</PostTitle>
        <BodyContainer>
          {content}
        </BodyContainer>
        <PostSummaryContainer className="post_summary_meta">
          <div className="tag_container">
            {tag.map((el, idx) => <TagButton key={idx}>{el}</TagButton>)}
          </div>
          <div className="author_datas">
            <img></img>
            <a href="#">Octopus</a>
            <span>{lastModifiedAt}</span>
          </div>
        </PostSummaryContainer>
      </ContentDetailContainer>
    </ContentContainer>
  );
}

export default Content