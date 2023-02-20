import React from 'react'
import styled from 'styled-components'
import { SubmitButton } from '../styles/styledcomponents'
import Content from '../components/Content'
import contents from '../datas/contents.json'
import answers from '../datas/answers.json'
import userData from '../datas/userData.json'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
`
const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* width: 100%; */
  height: 10rem;
  padding: 20px;
  border-bottom: 1px solid var(--tab__focus);
  > .head_first {
    display: flex;
    justify-content: space-between;
  }
`
const Title = styled.h1`
  font-weight: 500;
`
const Contents = () => {
  console.log(answers)
  console.log(userData)
  return (
    <Container className="contents_container">
      <HeadContainer>
        <div className="head_first">
          <Title>All Questions</Title>
          <SubmitButton>Ask Question</SubmitButton>
        </div>
        <div className="head_second">
          <span>{contents.length} questions</span>
        </div>
      </HeadContainer>
      {contents.map((content) => {
        const answer = answers.filter(el => el.contentNumber === content.shortId)
        const author = userData.filter(el => el.contents.includes(content.shortId))
        return <Content contents={content} key={content.shortId} answer={answer} author={author}/>
      })}
    </Container>
  );
}

export default Contents