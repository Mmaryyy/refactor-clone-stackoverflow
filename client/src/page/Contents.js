import React, { useEffect } from 'react'
import styled from 'styled-components'
import { SubmitButton } from '../styles/styledcomponents'
import Content from '../components/Content'
import { useSelector, useDispatch } from 'react-redux'
import { getContentList, getSingleContent } from '../redux/actions/contents'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  margin-top: 60px;
  margin-left: 165px;
`
const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 100%; */
  height: 8rem;
  padding: 20px;
  border-bottom: 1px solid var(--tab__focus);
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
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
          <SubmitButton bg={'var(--tag__back)' } color={'var(--tag__content)'}>Filter</SubmitButton>
        </div>
      </HeadContainer>
      {contentList.map((singleContent) => {
        return <Content key={singleContent.shortId} singleContent={singleContent}/>
      })}
    </Container>
  );
}

export default Contents