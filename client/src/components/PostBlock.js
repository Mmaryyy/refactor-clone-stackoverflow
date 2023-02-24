import { useState } from 'react'
import styled from 'styled-components'
import { TagButton, LinkContent, CommonWrapper, BaseButton } from '../styles/styledcomponents'
import { NoticeText } from '../page/Post'

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
const PostBlock = ({ content, author, isAnswer }) => {
    // console.log('content: ', content)
    const [ votes, setVotes ] = useState(content.votes)
    // Todo: author 정보랑 현재 로그인한 유저가 같으면 'isSame === true' edit이 가능
    // Todo: 다르면 edit 버튼을 노출하지 않는다.
    const [ isSame, setIsSame ] = useState(true)
    const handleVoteUp = () => {
        setVotes(votes++)
    }
    const handleVoteDown = () => {
        setVotes(votes--)
    }
    const deleteContent = (postId) => {
      // content - answer 구분하는 플래그 isAnswer
      if (isAnswer) {
        // answer 삭제 api 요청
      } else {
        // content 삭제 api 요청
      }
    }
    // console.log(content)
  return (
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
          <BaseButton className="vote_down" onClick={handleVoteDown}>
            <svg
              fill="var(--black__100)"
              aria-hidden="true"
              className="svg-icon iconArrowDownLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 11h32L18 27 2 11Z"></path>
            </svg>
          </BaseButton>
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
              <BaseButton className="edit_botton">Edit</BaseButton>
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
          <div className="comments_container">
            {content.comments.length === 0 ? (
              <p>
                Know someone who can answer? Share a link to this question via
                email, Twitter, or Facebook.
              </p>
            ) : (
              <div>
                {content.comments.map((el, idx) => {
                  return (<CommentWrapper className='comment_wrapper' key={idx}>
                    <span>{el.content}</span> <span>-</span> <LinkContent className='author' fs={'var(--fs--mid)'}>{el.author}</LinkContent> <span className='created_date'>{el.createdAt}</span>
                    </CommentWrapper>);
                })}
              </div>
            )}
          </div>
        </ContentContainer>
      </CommonWrapper>
  )
}

export default PostBlock