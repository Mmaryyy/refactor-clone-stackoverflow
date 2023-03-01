import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getTimeGap } from '../utils/dateUtil'
import { getSingleQuestion } from '../redux/actions/contents'
import styled from 'styled-components'
import { SubmitButton, TagButton, LinkContent, SubmitInput } from '../styles/styledcomponents'
import PostBlock from '../components/PostBlock'
import { Editor } from '../components/Editor'
import axios from 'axios'
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: calc(100% - 165px - 300px);
  min-height: 80vh;
  /* margin-left: 165px; */
  margin-top: 60px;
`
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px 0;
  border-bottom: 1px solid var(--tab__focus);
  width: 100%;
`
const CommonWrapper = styled.div`
  display: ${props => props.display || 'flex'};
  margin: ${props => props.margin || 0};
  justify-content: ${props => props.direct || null};
  width: 100%;
  border-bottom: ${props => props.bottom || null};
  padding: ${props => props.padding || null};
`
const Title = styled.h1`
  font-weight: 400;
  color: var(--black__600);
  word-break: break-word;
`
const SummaryWrapper = styled.div`
  margin: 10px 0;
  > span {
    font-size: var(--fs--mid);
  }
`
const Item = styled.span`
  margin: 10px;
  color: var(--black__300);
`
const EditBotton = styled.button`
  border: none;
  background: none;
  color: ${props => props.color || 'var(--black__300)'};
  cursor: pointer;
  font-size: ${props => props.size || 'var(--fs--lg)'};
  font-weight: ${props => props.weight || null};
`
const NoticeWrapper = styled.div`
  background: var(--sidebar__body);
  width: 100%;
  padding: 15px;
  margin: 10px 10px 10px 0;
  border: 1px solid var(--sidebar__line);
  border-radius: 5px;
  font-size: var(--fs--mid);
  line-height: 40px;
  color: var(--black__400);
  font-weight: 500;
  > .list {
    line-height: normal;
    margin-left: 20px;
  }
  > p > span {
      color: var(--link__content);
    }
`
const CustomList = styled.ul`
  display: inline !important;
  li {
    display: inherit;
  }
`
const NoticeText = styled.div`
  font-size: var(--fs--big);
  margin: 15px 0;
`
const Post = () => {
  // 접근 1. content -> title 클릭 -> post
  // 접근 2. url을 통해 구분된 게시글 id로 접근
  const { postId } = useParams()
  console.log(postId)
  const navigate = useNavigate()
  // TODO: postId app 에서 받아와서 변수로 바꾸기 !!!!!
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleQuestion(postId))
  }, [])
  const singleContent = useSelector(state => state.contentsReducer.currentContent)
  console.log(singleContent)
  // const { content, memberName, answers } = singleContent
  const [ showNotice, setShowNotice ] = useState(false)
  const closeNotice = () => {
    setShowNotice(false)
  }
  const openNotice = () => {
    setShowNotice(true)
  }
  const handleNewQuestion = () => {
    navigate('/ask')
  }
  const [ answerBody, setAnswerBody ] = useState('')
  console.log('answerBody: ', answerBody)
  return Object.keys(singleContent).length === 0 ? (
    <></>
  ) : (
    <PostContainer className="post_container">
      <HeaderContainer className="header_container">
        <CommonWrapper direct={"space-between"} className="title_wrapper" padding={"0 10px"}>
          <Title>{singleContent.title}</Title>
          <SubmitButton onClick={handleNewQuestion}>Ask questions</SubmitButton>
        </CommonWrapper>
        <SummaryWrapper className="summary_wrapper">
          <Item>Asked</Item>
          <span>{getTimeGap(singleContent.createdAt)} mins ago</span>
          <Item>Modified</Item>
          <span>{getTimeGap(singleContent.modifiedAt)} mins ago</span>
          <Item>Viewed</Item>
          <span>{singleContent.view}</span>
        </SummaryWrapper>
      </HeaderContainer>
      <PostBlock content={singleContent} questionId={postId} isAnswer={false}/>
      <div className='answer_container'>
        <NoticeText>{singleContent.answers.length === 0 ? 
        <NoticeText>
          Know someone who can answer? Share a link to this <LinkContent>question</LinkContent>via <LinkContent>email</LinkContent>, <LinkContent>Twitter</LinkContent>, or <LinkContent>Facebook</LinkContent>.
        </NoticeText>
        :`${singleContent.answers.length} Answers`}</NoticeText>
        {singleContent.answers.map((el, idx) => {
          return (
            <PostBlock key={idx} className='answer' content={el} author={'아무나'} isAnswer={true} questionId={postId} answerId={el.shortId}/>
          )
        })}
      </div>
      <NoticeText>Your Answer</NoticeText>
      <form className='answer_submit_container' 
      onSubmit={(e) => {
        e.preventDefault()
        //api 요청 보내고 새로고침 하면 됨.
        console.log('되니?')
      }}
      action='' 
      method='POST'>
      <Editor 
      value={answerBody} 
      setter={setAnswerBody}
      focusFunction={openNotice}
      />
      {showNotice 
      ? <NoticeWrapper className="notice_wrapper">
        <CommonWrapper direct={"space-between"} className="first_line_wrapper">
          <p>Thanks for contributing an answer to Stack Overflow!</p>
          <EditBotton color={"var(--black__400)"} onClick={closeNotice}>X</EditBotton>
        </CommonWrapper>
        <p className="list">
          ⏺ Please be sure to answer the question. Provide details and share
          your research!
        </p>
        <p>But avoid ...</p>
        <p className="list">
          {" "}
          ⏺ Asking for help, clarification, or responding to other answers.
        </p>
        <p className="list">
          ⏺ Making statements based on opinion; back them up with references or
          personal experience.
        </p>
        <p>
          To learn more, see our <LinkContent fs={'var(--fs--mid)'}>tips on writing great answers.</LinkContent>
        </p>
      </NoticeWrapper>
      : null}
      <SubmitInput className="post_button" 
      type='submit'
      value='Post Your Answer'
      margin={'20px 0'}
      />
      </form>
      <CommonWrapper className='notice_underline_wrapper'>
      <NoticeText>
        Browse other questions tagged{" "}
        {/* <CustomList className="tags_list">
          {singleContent.tag.map((el, idx) => {
            return (
              <li key={idx}>
                <TagButton>{el}</TagButton>
              </li>
            )
          })}
        </CustomList> */}
        <span>or </span>
        <LinkContent href='#' fs={'var(--fs--big)'}>ask your own question.</LinkContent>
      </NoticeText>
      </CommonWrapper>
    </PostContainer>
  );
}

export default Post