import { useState } from 'react'
import styled from 'styled-components'
import { TagButton, LinkContent, CommonWrapper, BaseButton, SubmitButton } from '../styles/styledcomponents'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentContent } from '../redux/actions/contents'
import { useNavigate } from 'react-router-dom'
import { Editor } from './Editor'
import CommentEdit from './CommentEdit'
const VoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 3rem;
  > span {
    font-size: var(--fs--title);
    margin: 10px 0;
    color: var(--black__300);
  }
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  flex-grow: 1;
  > p.content {
    /* min-height: 300px; */
    margin: 0 0 0 10px;
  }
`
const AuthorWrapper = styled.div`
  min-width: 150px;
  background: var(--tag__back);
  border-radius: 5px;
  display: flex;
  padding: 5px 10px;
  align-items: flex-start;
  flex-direction: column;
  font-size: var(--fs--caption);
  /* a {
    color: var(--link__content);
    font-size: var(--fs--caption);
  } */
  span {
    color: var(--black__300);
  }
`
const AuthorProfileWrapper = styled.img`
  width: 30px;
  margin: 5px;
`
const CommentWrapper = styled.div`
    display: flex;
    padding: 10px 5px 10px 20px;
    border-bottom: 1px solid var(--black__100);
    align-items: center;
    span {
      margin-right: 10px;
      font-size: var(--fs--mid);
    }
    span.author {
      color: var(--button__back--hover);
      cursor: pointer;
      &:hover {
        color: var(--button__back);
      }
    }
    span.created_date {
      color: var(--black__200);
    }
`
const CommetEditor = styled.input`
  width: 100%;
  padding: 10px;
  font-size: var(--fs--mid);
  color: var(--black__300);
  border: none;
  border-bottom: 1px solid var(--black__300);
  white-space: pre-wrap;
  ::placeholder {
    color: var(--black__100);
  }
`
const PostBlock = ({ content, author, isAnswer, questionId, answerId }) => {
    // console.log('content: ', content)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentContent = useSelector(state => state.contentsReducer.currentPostContent)
    // edit 요청 받았는지 아닌지에 따라 노출 컨텐츠가 달라져야함
    // 요청 받으면 -> textEditor로 변경
    const [ isEdit, setIsEdit ] = useState(false)
    const [ votes, setVotes ] = useState(content.votes)
    const [ commentValue, setCommentValue ] = useState('')
    // Todo: author 정보랑 현재 로그인한 유저가 같으면 'isSame === true' edit이 가능
    // Todo: 다르면 edit 버튼을 노출하지 않는다.
    const [ isSame, setIsSame ] = useState(true)
    const handleVoteUp = () => {
        setVotes(votes++)
    }
    const deleteContent = (postId) => {
      // content - answer 구분하는 플래그 isAnswer
      if (isAnswer) {
        // answer 삭제 api 요청
      } else {
        // content 삭제 api 요청
      }
    }
    const editContent = ( content, isAnswer ) => {
      // 현재 postblock 내의 컨텐츠를 스토어에 보관하고
      // 근데 이게 main content인지, answer인지 여부에 따라서 나뉨
      // main content 면
      // -> Ask 컴포넌트로 이동
      // edit을 누르면 현재 컨텐츠 내용을 저장해서 ask에서 접근할 수 있도록
      // answer 면
      // 현재 사이트에서 postBlock 자체가 editor로 변하고
      // 스토어에서 현재 컨텐츠 내용을 받아서 에디터 안에 밸류로 넣어줌
      console.log('content: ', content)
      console.log('isAnswer: ', isAnswer)
      dispatch(setCurrentContent(content))
      console.log('currentContent: ', currentContent)
      if (isAnswer) {
        setIsEdit(true)
      } else {
        navigate('/edit')
      }
    }
    const submitComment = (e, isAnswer) => {
      if (e.key === 'Enter') {
        // content - answer 여부에 따라 api 요청을 따로 보냄
        if (isAnswer) {
          // answer api
          console.log('answer comment api')
        } else {
          // content api
          console.log('content comment api')
        }
      }
    }
  return isEdit
  ? (
    <CommentEdit value={content.content} setIsEdit={setIsEdit} questionId={questionId} answerId={answerId}/>
  )
  :(
    <CommonWrapper className="main_container" padding={'10px'}>
        <VoteWrapper className="vote_wrapper">
          <BaseButton className="vote_up" onClick={handleVoteUp}>
            <svg
              fill="var(--black__100)"
              aria-hidden="true"
              className="svg-icon iconArrowUpLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 25h32L18 9 2 25Z"></path>
            </svg>
          </BaseButton>
          <span>{votes}</span>
        </VoteWrapper>
        <ContentContainer className="content_container">
          <p className="content">{content.content}</p>
          {content.tag === undefined
            ? <></> 
            : <CommonWrapper className="tag_container" margin={"10px 0"}>
            {content.tag.map((el, idx) => {
                return <TagButton key={idx}>{el}</TagButton>;
            })}
            </CommonWrapper>
          }
          <CommonWrapper className="bottom_container" justify={"space-between"}  bottom={'1px solid var(--black__100)'} padding={'30px 0'}>
            { isSame
            ?
            <CommonWrapper className='modified_wrapper'>
              <BaseButton className="edit_botton" onClick={() => editContent(content, isAnswer)}>Edit</BaseButton>
              <BaseButton className='delete_botton' margin={'0 10px'} onClick={() => {deleteContent(content.shortId)}}>Delete</BaseButton>
            </CommonWrapper>
            : null}
            <AuthorWrapper className="author_wrapper">
              <span>asked {new Date(content.createdAt).toLocaleString()}</span>
              <CommonWrapper className='author_profile' align={'center'}>
              <AuthorProfileWrapper
                src={author.avatarUrl}
                alt="author_profile"
              />
              <LinkContent fs={'var(--fs--caption)'}>{author.nickname}</LinkContent>
              </CommonWrapper>
            </AuthorWrapper>
          </CommonWrapper>
            <div className='add_comment'>
            <CommetEditor id='add_comment'
            value={commentValue}
            onChange={(e) => {setCommentValue(e.target.value)}}
            onKeyPress={(e) => {submitComment(e, isAnswer)}}
            placeholder='Add a comment'/>
            </div>
          <div className="comments_container">
            {content.comments.length === 0 ? (
              <p>
                Know someone who can answer? Share a link to this question via
                email, Twitter, or Facebook.
              </p>
            ) : (
              <div>
                {content.comments.map((el, idx) => {
                  return (
                    <CommentWrapper className="comment_wrapper" key={idx}>
                      <span>{el.content}</span> <span>-</span>{" "}
                      <LinkContent className="author" fs={"var(--fs--mid)"}>
                        {el.author}
                      </LinkContent>{" "}
                      <span className="created_date">{el.createdAt}</span>
                      { true 
                      ?
                    <div className="edit_wrapper">
                      <BaseButton margin={'0 10px'}>edit</BaseButton>
                      <BaseButton margin={'0 10px'}>delete</BaseButton>
                    </div> 
                      : null }
                    </CommentWrapper>
                  );
                })}
              </div>
            )}
          </div>
        </ContentContainer>
    </CommonWrapper>
  )
}

export default PostBlock