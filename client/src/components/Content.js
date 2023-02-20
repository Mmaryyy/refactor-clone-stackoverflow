import React from 'react'
import styled from 'styled-components'
import { TagButton } from '../styles/styledcomponents'
import { Link } from 'react-router-dom'
import check from './../img/check.png'
const ContentContainer = styled.section`
  display: flex;
  border-bottom: 1px solid var(--tab__focus);
  padding: 15px;
`
const SummaryContainer = styled.div`
  width: 130px;
  padding: 10px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-shrink: 0;
  flex-wrap: wrap;
`
const ContentDetailContainer = styled.div`
    flex-grow: 1;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    > *{
        margin: 5px 0;
    }
    color: var(--black__400);
`
const PostSummaryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    > .author_datas {
      font-size: var(--fs--mid);
      display: flex;
      align-items: center;
    }
`
const SummaryTitle = styled.div`
  
  color: var(--content__view--low);
  font-weight: 600;
  font-size: var(--fs--mid);
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
  &.answer__notSelected {
    border: 1px solid var(--content__answer);
    color: var(--content__answer);
    border-radius: 3px;
    padding: 4px;
  }
`
const PostTitle = styled(Link)`
  color: var(--link__content);
  font-size: var(--fs--big);
  font-weight: 500;
  text-decoration: none;
`
const BodyContainer = styled.p`
  overflow: hidden;
  width: inherit;
`
const AuthorLink = styled.h3`
  color: var(--link__content);
  text-decoration: none;
  margin: 0 5px;
`
const CheckContainer = styled.img`
  width: 13px;
  margin: 0 4px;
`
const AuthorProfileWrapper = styled.img`
  width: 20px;
`
const Content = ({ contents, answer, author }) => {
  const { content, createdAt, isSelected, lastModifiedAt, tag, title, view, votes } = contents
  const current = new Date()
  const modifiedAt = new Date(contents.lastModifiedAt)
  console.log(`${contents.shortId}번 게시글의 현재 시간: `, current.getTime())
  console.log(`${contents.shortId}번 게시글의 수정 시간: `, modifiedAt.getTime())
  const diffMin = parseInt((current.getTime() - modifiedAt.getTime()) / (60 * 60 * 1000))
  console.log(`${contents.shortId}번 게시글의 지난 시간: `, parseInt(diffMin))
  console.log('contents: ', content)
  return (
    <ContentContainer>
      <SummaryContainer className="content_summary">
        <SummaryTitle className="view__vote">{votes} votes</SummaryTitle>
        <SummaryTitle className={
          isSelected 
          ? 'answer__selected' 
          : answer.length !== 0
            ? 'answer__notSelected'
            : null
          }>
            {isSelected 
             ? <CheckContainer src={check} alt='answered'/>
             : null}
            {answer.length} answers</SummaryTitle>
        <SummaryTitle>{view} views</SummaryTitle>
      </SummaryContainer>
      <ContentDetailContainer className="content_details">
        <PostTitle to={`/content/id=${content.shortId}`}>{title}</PostTitle>
        <BodyContainer>
          {content}
        </BodyContainer>
        <PostSummaryContainer className="post_summary_meta">
          <div className="tag_container">
            {tag.map((el, idx) => <TagButton key={idx}>{el}</TagButton>)}
          </div>
          <div className="author_datas">
            <AuthorProfileWrapper src={author[0].avatarUrl} alt='avatar_profile'/>
            <AuthorLink to="#">{author[0].nickname}</AuthorLink>
            <span>modified {diffMin} hours ago</span>
          </div>
        </PostSummaryContainer>
      </ContentDetailContainer>
    </ContentContainer>
  );
}

export default Content