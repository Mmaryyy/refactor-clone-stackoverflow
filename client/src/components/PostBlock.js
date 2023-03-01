import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TagButton, LinkContent, CommonWrapper, BaseButton, SubmitButton } from '../styles/styledcomponents'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentContent, addComment, deleteComment, updateComment} from '../redux/actions/contents'
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
    flex-direction: column;
    align-items: flex-end;
    padding: 10px 5px 10px 20px;
    border-bottom: 1px solid var(--black__100);
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
const ContentWrapper = styled.p`
  width: 100%;
`
const CommentEditorWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  > span {
    margin: 0;
    cursor: pointer;
  }
`
const PostBlock = ({ content, isAnswer, questionId, answerId }) => {
    // console.log('content: ', content)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const currentContent = useSelector(state => state.contentsReducer.currentPostContent)
    const { currentUser } = useSelector(state => state.userDataReducer)
    useEffect(() => {
      //* postblock이 렌더링 될 때, 각 블럭당 현재 게시물 정보를 스토어에 저장함 ? 해야함 ? 
    }, [])
    // const currentContent = useSelector(state => state.contentsReducer.currentPostContent)
    // console.log(currentContent)
    // edit 요청 받았는지 아닌지에 따라 노출 컨텐츠가 달라져야함
    // 요청 받으면 -> textEditor로 변경
    const [ isEdit, setIsEdit ] = useState(false)
    const [ votes, setVotes ] = useState(content.votes)
    const [ commentValue, setCommentValue ] = useState('')
    const [ updateValue, setUpdateValue ] = useState('')
    const [ isCommentEdit, setIsCommentEdit ] = useState(false)
    const [ currentEditCommentId, setCurrentEditCommentId ] = useState('')
    console.log(questionId)
    // Todo: author 정보랑 현재 로그인한 유저가 같으면 'isSame === true' edit이 가능
    // Todo: 다르면 edit 버튼을 노출하지 않는다.
    const [ isSame, setIsSame ] = useState(true)
    const comment = isAnswer ? content.answerComments : content.questionComments
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
      if (isAnswer) {
        setIsEdit(true)
      } else {
        navigate('/edit')
      }
    }
    const submitComment = (e, isAnswer, memberId, questionId) => {
      if (e.key === 'Enter') {
        // content - answer 여부에 따라 api 요청을 따로 보냄
        e.preventDefault()
        if (isAnswer) {
          // answer api
          console.log('answer comment api')
        } else {
          // content api
          dispatch(addComment(questionId, memberId, commentValue))
          window.location.reload()
          console.log('content comment api')
          // dispatch(addComment(questionId, currentUser.memberId, commentValue))
          dispatch(addComment(questionId, 9, commentValue))
          setCommentValue('')
        }
      }
    }
    const onClickCommentDelete = (commentId, isAnswer) => {
      if (isAnswer !== undefined && isAnswer) {
        // answer api
        console.log('delete answer comment api')
      } else {
        // content api
        console.log('delete content comment api')
        dispatch(deleteComment(commentId, questionId))
      }
    }
    const onClickCommentEdit = (questionCommentId, defaultValue) => {
      // edit 버튼을 누르면 
      // 코멘트 내용을 상대로 저장하고
      // comment 내용 출력하는 태그를 Input으로 변환 (value에 저장한 코멘트 내용 담아주기)
      setCurrentEditCommentId(questionCommentId)
      setUpdateValue(defaultValue)
      setIsCommentEdit(true)
    }
    const onKeyUpdateComment = (e, commentId, isAnswer) => {
      if (e.key === 'Enter') {
        if (isAnswer) {
          // answer api
          console.log('edit answer comment api')
        } else {
          // content api
          console.log('edit content comment api')
          dispatch(updateComment(commentId, updateValue, questionId))
          setIsCommentEdit(false)
          setCurrentEditCommentId('')
        }
      }
    }
    const cancleCommentEdit = () => {
      // editvalue 비워주고 input 창 끄고 댓글창으로 돌아가..
      setIsCommentEdit(false)
      setCurrentEditCommentId('')
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
          <span>{content.totalVotes}</span>
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
              <BaseButton className="edit_botton" onClick={() => editContent(content, isAnswer)}>edit</BaseButton>
              <BaseButton className='delete_botton' margin={'0 10px'} onClick={() => {deleteContent(content.shortId)}}>delete</BaseButton>
            </CommonWrapper>
            : null}
            <AuthorWrapper className="author_wrapper">
              <span>asked {new Date(content.createdAt).toLocaleString()}</span>
              <CommonWrapper className='author_profile' align={'center'}>
              <AuthorProfileWrapper
                src={content.memberName === undefined ? '/images/Avatar1.png' : content.memberName}
                alt="author_profile"
              />
              <LinkContent fs={'var(--fs--caption)'}>{content.memberName}</LinkContent>
              </CommonWrapper>
            </AuthorWrapper>
          </CommonWrapper>
          <div className='add_comment'>
            <CommetEditor id='add_comment'
            value={commentValue}
            onChange={(e) => {setCommentValue(e.target.value)}}
            onKeyPress={(e) => {submitComment(e, isAnswer, 1, questionId)}}
            placeholder='Add a comment'/>
            </div>
          <div className="comments_container">
            {comment === undefined || comment.length === 0 ? (
              <></>
            ) : (
              <div>
                {comment.map((el, idx) => {
                  return (
                    <CommentWrapper className="comment_wrapper" key={idx}>
                      {isCommentEdit && el.questionCommentId === currentEditCommentId 
                      ? 
                      <CommentEditorWrapper className='comment_editor_wrapper'>
                        <CommetEditor className='comment_editor' value={updateValue} 
                            onChange={(e) => setUpdateValue(e.target.value)}
                            onKeyUp={(e) => onKeyUpdateComment(e, el.questionCommentId, isAnswer)}/>
                        <span onClick={cancleCommentEdit}>❌</span>
                      </CommentEditorWrapper>
                      : 
                      <ContentWrapper><span>{el.content}</span> <span>-</span>{" "}
                      <LinkContent className="author" fs={"var(--fs--mid)"}>
                        {el.author}
                      </LinkContent>{" "}
                      <span className="created_date">{new Date(el.createdAt).toLocaleString('ko-KR')}</span>
                      </ContentWrapper>}
                      { true 
                      ?
                    <div className="edit_wrapper">
                      <BaseButton margin={'0 10px'} onClick={() => onClickCommentEdit(el.questionCommentId, el.content)}>edit</BaseButton>
                      <BaseButton margin={'0 10px'} onClick={() => onClickCommentDelete(el.questionCommentId, isAnswer)}>delete</BaseButton>
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