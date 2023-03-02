import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TagButton, LinkContent, CommonWrapper, BaseButton, SubmitButton } from '../styles/styledcomponents'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentContent, addComment, deleteComment, updateComment, deleteSingleContent, contentVoteUpdate} from '../redux/actions/contents'
import { deleteSingleAnswer, addAnswerCommentAction, answerVoteUpAction, adoptSingleAnswer } from '../redux/actions/answers'
import { answerVoteUp } from '../api/answer'
import { useNavigate } from 'react-router-dom'
import CommentEdit from './CommentEdit'
import { getSingleContent } from '../api/question'
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore'
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
  word-break: break-all;
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
const Flagwrapper = styled.div`
  margin: 10px;
`
const PostBlock = ({ content, isAnswer, questionId, answerId, isOwner }) => {
    // console.log('content: ', content)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { currentUser } = useSelector(state => state.userDataReducer)
    // edit 요청 받았는지 아닌지에 따라 노출 컨텐츠가 달라져야함
    // 요청 받으면 -> textEditor로 변경
    const [ isEdit, setIsEdit ] = useState(false)
    const [ commentValue, setCommentValue ] = useState('')
    const [ updateValue, setUpdateValue ] = useState('')
    const [ isCommentEdit, setIsCommentEdit ] = useState(false)
    const [ currentEditCommentId, setCurrentEditCommentId ] = useState('')
    // Todo: author 정보랑 현재 로그인한 유저가 같으면 'isSame === true' edit이 가능
    // Todo: 다르면 edit 버튼을 노출하지 않는다.
    const comment = isAnswer ? content.answerComment : content.questionComments
    const tags = isAnswer ? undefined : content.tags
    const AdoptFlag = ({ content }) => {
      const fill = content.answerStatus === 'ANSWER_ACCEPTED' ? "var(--point__color)" : 'var(--black__100)'
      return (
      <Flagwrapper className="adopt_button" margin={'8px'}>
        <svg
          version="1.1"
          id="Layer_1"
          x="0px"
          y="0px"
          width="15px"
          height="12px"
          viewBox="0 0 15 12"
          enableBackground="new 0 0 15 12"
        >
          <rect
            x="2.539"
            y="3.535"
            transform="matrix(0.7069 -0.7073 0.7073 0.7069 -4.1456 5.0653)"
            fill={fill}
            width="3"
            height="8.001"
          />
          <rect
            x="2.843"
            y="4.268"
            transform="matrix(0.7071 -0.7071 0.7071 0.7071 -1.342 8.2958)"
            fill={fill}
            width="13"
            height="3"
          />
        </svg>
      </Flagwrapper>
      )
    }
    const AdoptButton = ({ content }) => {
      const onClickAdoptAnswer = () => {
        // api 요청 보내기
        if(window.confirm('이 게시글을 채택하시겠습니까?')) {
          dispatch(adoptSingleAnswer(currentUser.memberId, questionId, answerId))
        }
      }
      return (
        <SubmitButton
          className="adopt_button"
          margin={"15px 0"}
          padding={'3px'}
          bg={'var(--black__100)'}
          border={'var(--black__300)'}
          shadow={'var(--black__200)'}
          hover={'var(--black__400)'}
          onClick={onClickAdoptAnswer}
        >
          adopt
        </SubmitButton>
      );
    }
    const splitContent = (content) => {
      return content.split('79a91970-5d15-4da9-a394-d014af1e9916').join()
    } 
    const handleVoteUp = (isAnswer, memberId) => {
      // voteup api 요청 보내고
      // 다시 singlecontent update 요청 받아서 스토어 상태 업데이트함
      const contentId = isAnswer ? content.answerId : content.questionId
      // content - answer 구분하는 플래그 isAnswer
      if (isAnswer) {
        // answer 삭제 api 요청
        dispatch(answerVoteUpAction(contentId, memberId))
        // window.location.reload()
      } else {
        dispatch(contentVoteUpdate(contentId, memberId))
        // window.location.reload()
      }
    }
    const onClickContentdelete = (content, isAnswer) => {
      const contentId = isAnswer ? content.answerId : content.questionId
      // content - answer 구분하는 플래그 isAnswer
      if (isAnswer) {
        // answer 삭제 api 요청
        dispatch(deleteSingleAnswer(contentId))
        window.location.reload()
      } else {
        dispatch(deleteSingleContent(contentId))
        // window.location.href = '/questions'
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
      dispatch(setCurrentContent(content))
      if (isAnswer) {
        setIsEdit(true)
      } else {
        navigate('/edit')
      }
    }
    const submitComment = (e, isAnswer, content) => {
      const contentId = isAnswer ? content.answerId : content.questionId

      if (e.key === 'Enter') {
        // content - answer 여부에 따라 api 요청을 따로 보냄
        e.preventDefault()
        if (isAnswer) {
          // answer api
          dispatch(addAnswerCommentAction(currentUser.memberId, contentId, commentValue))
          setCommentValue('')
          window.location.reload()
        } else {
          // content api
          dispatch(addComment(contentId, currentUser.memberId, commentValue))
          setCommentValue('')
          window.location.reload()
        }
      }
    }
    const onClickCommentDelete = (commentId, isAnswer) => {
      if (isAnswer) {
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
    const handleDisplayButton = (authorId) => {
      // store에 저장된 currentUser memberId랑
      // 타겟의 작성자 memberId랑 같으면 true, 다르면 false 리턴
      return currentUser.memberId === authorId
    }
  return isEdit ? (
    <CommentEdit
      value={splitContent(content.content)}
      setIsEdit={setIsEdit}
      questionId={questionId}
      answerId={answerId}
    />
  ) : (
    <CommonWrapper className="main_container" padding={"10px"}>
      <VoteWrapper className="vote_wrapper">
        <span>{content.totalVotes}</span>
        <BaseButton
          className="vote_up"
          onClick={() => handleVoteUp(isAnswer, currentUser.memberId)}
        >
          👍
        </BaseButton>
        {isOwner && content.answerStatus !== "ANSWER_ACCEPTED" && content.questionStatus !== "QUESTION_ANSWER_ACCEPTED"? (
          <AdoptButton />
        ) : null}
        {isAnswer ? <AdoptFlag content={content} /> : null}
      </VoteWrapper>
      <ContentContainer className="content_container">
        <p className="content">{splitContent(content.content)}</p>
        {tags === undefined ? (
          <></>
        ) : (
          <CommonWrapper className="tag_container" margin={"10px 0"}>
            {tags.map((el) => {
              return <TagButton key={el.tagId}>{el.title}</TagButton>;
            })}
          </CommonWrapper>
        )}
        <CommonWrapper
          className="bottom_container"
          justify={"flex-end"}
          bottom={"1px solid var(--black__100)"}
          padding={"30px 0"}
        >
          {handleDisplayButton(content.memberId) ? (
            <CommonWrapper className="modified_wrapper">
              <BaseButton
                className="edit_botton"
                onClick={() => editContent(content, isAnswer)}
              >
                edit
              </BaseButton>
              <BaseButton
                className="delete_botton"
                margin={"0 10px"}
                onClick={() => {
                  onClickContentdelete(content, isAnswer);
                }}
              >
                delete
              </BaseButton>
            </CommonWrapper>
          ) : null}
          <AuthorWrapper className="author_wrapper">
            <span>asked {new Date(content.createdAt).toLocaleString()}</span>
            <CommonWrapper className="author_profile" align={"center"}>
              <AuthorProfileWrapper
                src={
                  content.memberImage === undefined
                    ? "/images/Avatar1.png"
                    : content.memberImage
                }
                alt="author_profile"
              />
              <LinkContent fs={"var(--fs--caption)"}>
                {content.memberName}
              </LinkContent>
            </CommonWrapper>
          </AuthorWrapper>
        </CommonWrapper>
        <div className="add_comment">
          <CommetEditor
            id="add_comment"
            value={commentValue}
            onChange={(e) => {
              setCommentValue(e.target.value);
            }}
            onKeyPress={(e) => {
              submitComment(e, isAnswer, content);
            }}
            placeholder="Add a comment"
          />
        </div>
        <div className="comments_container">
          {comment === undefined || comment.length === 0 ? (
            <></>
          ) : (
            <div>
              {comment.map((el, idx) => {
                return (
                  <CommentWrapper className="comment_wrapper" key={idx}>
                    {isCommentEdit &&
                    el.questionCommentId === currentEditCommentId ? (
                      <CommentEditorWrapper className="comment_editor_wrapper">
                        <CommetEditor
                          className="comment_editor"
                          value={updateValue}
                          onChange={(e) => setUpdateValue(e.target.value)}
                          onKeyUp={(e) =>
                            onKeyUpdateComment(
                              e,
                              el.questionCommentId,
                              isAnswer
                            )
                          }
                        />
                        <span onClick={cancleCommentEdit}>❌</span>
                      </CommentEditorWrapper>
                    ) : (
                      <ContentWrapper>
                        <span>{el.content}</span> <span>-</span>{" "}
                        <LinkContent className="author" fs={"var(--fs--mid)"}>
                          {el.memberName}
                        </LinkContent>{" "}
                        <span className="created_date">
                          {new Date(el.createdAt).toLocaleString("ko-KR")}
                        </span>
                      </ContentWrapper>
                    )}
                    {handleDisplayButton(el.memberId) ? (
                      <div className="edit_wrapper">
                        <BaseButton
                          margin={"0 10px"}
                          onClick={() =>
                            onClickCommentEdit(el.questionCommentId, el.content)
                          }
                        >
                          edit
                        </BaseButton>
                        <BaseButton
                          margin={"0 10px"}
                          onClick={() =>
                            onClickCommentDelete(el.questionCommentId, isAnswer)
                          }
                        >
                          delete
                        </BaseButton>
                      </div>
                    ) : null}
                  </CommentWrapper>
                );
              })}
            </div>
          )}
        </div>
      </ContentContainer>
    </CommonWrapper>
  );
}

export default PostBlock