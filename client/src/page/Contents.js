import React, { useEffect } from 'react'
import styled from 'styled-components'
import { SubmitButton } from '../styles/styledcomponents'
import Content from '../components/Content'
import { useSelector, useDispatch } from 'react-redux'
import { getContentList, getSingleContent } from '../redux/actions/contents'

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
  const dispatch = useDispatch()
  useEffect(() => {
    console.log('여기 타니?')
    dispatch(getContentList())
  }, [])
  const contentList = useSelector(state => state.contentsReducer.contentList)
  console.log('contentList: ', contentList)
  return (
    contentList.length === 0
    ? <></>
    : 
    <Container className="contents_container">
      <HeadContainer>
        <div className="head_first">
          <Title>All Questions</Title>
          <SubmitButton>Ask Question</SubmitButton>
        </div>
        <div className="head_second">
          <span>{contentList.length} questions</span>
        </div>
      </HeadContainer>
      {contentList.map((singleContent) => {
        return <Content key={singleContent.shortId} singleContent={singleContent}/>
      })}
    </Container>
  );
}

export default Contents