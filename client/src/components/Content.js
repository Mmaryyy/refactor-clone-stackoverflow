import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TagButton, LinkContent } from '../styles/styledcomponents'
import { Link, useNavigate } from 'react-router-dom'
import check from './../img/check.png'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleContent } from '../redux/actions/contents'
import { getTimeGap } from '../utils/dateUtil'
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
    overflow: hidden;
`
const PostSummaryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    > .author_datas {
      font-size: var(--fs--caption);
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
  color: var(--button__back--hover);
  font-size: var(--fs--big);
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: var(--button__back)
  }
`
const BodyContainer = styled.p`
  overflow: hidden;
  width: inherit;
`
const AuthorLink = styled.h3`
  color: var(--button__back--hover);
  text-decoration: none;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    color: var(--button__back);
  }
`
const CheckContainer = styled.img`
  width: 13px;
  margin: 0 4px;
`
const AuthorProfileWrapper = styled.img`
  width: 20px;
`
const Content = ({ singleContent }) => {
  const { title, content, questionStatus, modifiedAt, view, totalVotes, memberName, memberImage, answers, questionId } = singleContent
  const passedTime = getTimeGap(modifiedAt)
  const isSelected = questionStatus === 'QUESTION_ANSWER_ACCEPTED' ? true : false
  const ellipsisContent = (content) => {
    const result = content.split('79a91970-5d15-4da9-a394-d014af1e9916').join()
    console.log(result)
    return `${result.substring(0, 108)}...`
  }
  return (
    <ContentContainer>
      <SummaryContainer className="content_summary">
        <SummaryTitle className="view__vote">{totalVotes} votes</SummaryTitle>
        <SummaryTitle className={
          isSelected 
          ? 'answer__selected' 
          : answers.length !== 0
            ? 'answer__notSelected'
            : null
          }>
            {isSelected 
             ? <CheckContainer src={check} alt='answered'/>
             : null}
            {answers.length} answers</SummaryTitle>
        <SummaryTitle>{view} views</SummaryTitle>
      </SummaryContainer>
      <ContentDetailContainer className="content_details">
        <PostTitle to={`/questions/${questionId}`}>{title}</PostTitle>
        <BodyContainer>
          {ellipsisContent(content)}
        </BodyContainer>
        <PostSummaryContainer className="post_summary_meta">
          <div className="tag_container">
            {singleContent.tag === undefined ? <></> : singleContent.tag.map((el, idx) => <TagButton key={idx}>{el}</TagButton>)}
          </div>
          <div className="author_datas">
            <AuthorProfileWrapper src={memberImage} alt='avatar_profile'/>
            <AuthorLink to="#">{memberName}</AuthorLink>
            <span>modified {passedTime} mins ago</span>
          </div>
        </PostSummaryContainer>
      </ContentDetailContainer>
    </ContentContainer>
  );
}

export default Content