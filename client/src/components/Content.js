import React from 'react'
import styled from 'styled-components'
import { TagButton } from '../styles/styledcomponents'
import userData from '../datas/userData.json'
const ContentContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--tab__focus);
  padding: 15px;
`
const SummaryContainer = styled.div`
  width: 250px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const ContentDetailContainer = styled.div`
    height: 180px;
    display: flex;
    flex-direction: column;
    > *{
        margin: 5px 0;
    }
`
const PostSummaryContainer = styled.div`
    display: flex;
`
const SummaryTitle = styled.p`
  margin-top: 10px;
  color: var(--content__view--low);
  
  &.view__vote {
    color: black;
    font-weight: 600;
  }
  &.view__mid {
    color: var(--content__view--mid);
  }
  &.view__high {
    color: var(--content__view--high);
  }
`
const PostTitle = styled.p`
  color: var(--link__content);
  font-size: var(--fs-title-relative);
`
const Content = () => {
  return (
    <ContentContainer>
        <img src={userData[0].avatarUrl}/>
      <SummaryContainer className="content_summary">
        <SummaryTitle className="view__vote">0 votes</SummaryTitle>
        <SummaryTitle>0 answers</SummaryTitle>
        <SummaryTitle>9 views</SummaryTitle>
      </SummaryContainer>
      <ContentDetailContainer className="content_details">
        <PostTitle>
          Why do I need to set 'path' on both Socket.IO and Nignix?
        </PostTitle>
        <p>
          I'm trying to set up multiple APIs on a single VPS and serve them
          through Nginx. I want to have all of them in separate sub-locations
          like the example...
        </p>
        <PostSummaryContainer className="post_summary_meta">
          <div className="tag_container">
            <TagButton>javascript</TagButton>
            <TagButton>express</TagButton>
            <TagButton>nginx</TagButton>
            <TagButton>socket.io</TagButton>
          </div>
          <div className="author_datas">
            <img></img>
            <a href="#">Octopus</a>
            <span>1 modified 15 secs ago</span>
          </div>
        </PostSummaryContainer>
      </ContentDetailContainer>
    </ContentContainer>
  );
}

export default Content