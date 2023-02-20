import React from 'react'
import styled from 'styled-components'
import { SubmitButton } from '../styles/styledcomponents'
import Content from '../components/Content'
import contents from '../datas/contents.json'
import answers from '../datas/answers.json'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`
const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
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
        return <Content contents={content} key={content.shortId} answer={answer}/>
      })}
    </Container>
  );
}

export default Contents