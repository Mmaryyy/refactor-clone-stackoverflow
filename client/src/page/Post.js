import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getTimeGap } from '../utils/dateUtil'
import styled from 'styled-components'
import { SubmitButton, TagButton } from '../styles/styledcomponents'
import { ToastEditor } from '../components/TextEditor'
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px 0;
  border-bottom: 1px solid var(--tab__focus);
`
const CommonWrapper = styled.div`
  display: flex;
  margin: ${props => props.margin || 0};
  justify-content: ${props => props.direct || null};
`
const Title = styled.h1`
  font-weight: 400;
  color: var(--black__600);
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
const MainContainer = styled.div`
  display: flex;
`
const VoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  > span {
    font-size: var(--fs--title);
    margin: 10px 0;
    color: var(--black__300);
  }
`
const VoteButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  > p.content {
    min-height: 300px;
    margin: 0 0 0 10px;
  }
`
const EditBotton = styled.button`
  border: none;
  background: none;
  color: ${props => props.color || 'var(--black__300)'};
  cursor: pointer;
  font-size: ${props => props.size || 'var(--fs--lg)'};
  font-weight: ${props => props.weight || null};
`
const AuthorWrapper = styled.div`
  background: var(--tag__back);
  border-radius: 5px;
  display: flex;
  padding: 3px;
  align-items: center;
`
const AuthorProfileWrapper = styled.img`
  width: 30px;
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
const Post = ({ postId }) => {
  // 접근 1. content -> title 클릭 -> post
  // 접근 2. url을 통해 구분된 게시글 id로 접근
  // singleContent 분류해놓고 그걸로 사용하기
  // const [ singleContent, setSingleContent ] = useState({})
  const contents = useSelector(state => state.contentsReducer.contentList)
  const singleContent = contents.filter(el => el.shortId === 1)[0]
  // TODO: postId app 에서 받아와서 변수로 바꾸기 !!!!!
  const asked = getTimeGap(singleContent.createdAt)
  const modified = getTimeGap(singleContent.lastModifiedAt)
  const userData = useSelector(state => state.userDataReducer.userData)
  const author = userData.filter(el => el.contents.includes(singleContent.shortId))[0]
  console.log(<ToastEditor/>)
  const handleVoteNumber = () => {
    //vote 넘버 바꿔주는 로직
  }
  return (
    <PostContainer className="post_container">
      <HeaderContainer className="header_container">
        <CommonWrapper className="title_wrapper">
          <Title>{singleContent.title}</Title>
          <SubmitButton>Ask questions</SubmitButton>
        </CommonWrapper>
        <SummaryWrapper className="summary_wrapper">
          <Item>Asked</Item>
          <span>{asked} mins ago</span>
          <Item>Modified</Item>
          <span>{modified} mins ago</span>
          <Item>Viewed</Item>
          <span>{singleContent.view}</span>
        </SummaryWrapper>
      </HeaderContainer>
      <MainContainer className="main_container">
        <VoteWrapper className="vote_wrapper">
          <VoteButton className="vote_up">
            <svg
              fill="var(--black__100)"
              aria-hidden="true"
              class="svg-icon iconArrowUpLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 25h32L18 9 2 25Z"></path>
            </svg>
          </VoteButton>
          <span>{singleContent.votes}</span>
          <VoteButton className="vote_down">
            <svg
              fill="var(--black__100)"
              aria-hidden="true"
              class="svg-icon iconArrowDownLg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
            >
              <path d="M2 11h32L18 27 2 11Z"></path>
            </svg>
          </VoteButton>
        </VoteWrapper>
        <ContentContainer className="content_container">
          <p className="content">{singleContent.content}</p>
          <CommonWrapper className="tag_container" margin={"10px 0"}>
            {singleContent.tag.map((el, idx) => {
              return <TagButton key={idx}>{el}</TagButton>;
            })}
          </CommonWrapper>
          <CommonWrapper className="bottom_container" direct={"space-between"}>
            <EditBotton className="edit_botton">Edit</EditBotton>
            <AuthorWrapper className="author_wrapper">
              <AuthorProfileWrapper
                src={author.avatarUrl}
                alt="author_profile"
              ></AuthorProfileWrapper>
              <a>{author.nickname}</a>
            </AuthorWrapper>
          </CommonWrapper>
          <div className="text_editor_wrapper">
            {singleContent.comments.length === 0 ? (
              <p>
                Know someone who can answer? Share a link to this question via
                email, Twitter, or Facebook.
              </p>
            ) : (
              <div>
                {singleContent.comments.map((el, idx) => {
                  return <div key={idx}>{el.content}</div>;
                })}
              </div>
            )}
          </div>
        </ContentContainer>
      </MainContainer>
      <h3>Your Answer</h3>
      <ToastEditor className="text_editor"></ToastEditor>
      <NoticeWrapper className="notice_wrapper">
        <CommonWrapper direct={'space-between'} className='first_line_wrapper'>
        <p>Thanks for contributing an answer to Stack Overflow!</p>
        <EditBotton color={'black'}>X</EditBotton>
        </CommonWrapper>
        <p className='list'>
          ⏺ Please be sure to answer the question. Provide details and share your
          research!
        </p>
        <p>But avoid ...</p>
        <p className='list'> ⏺ Asking for help, clarification, or responding to other answers.</p>
        <p className='list'>
        ⏺ Making statements based on opinion; back them up with references or
          personal experience.
        </p>
        <p>To learn more, see our <span>tips on writing great answers.</span></p>
      </NoticeWrapper>
      <SubmitButton className="post_button">Post Your Answer</SubmitButton>
      <p>
        Browse other questions tagged{" "}
        <ul className="tags_list">tag1 tag2 tag3</ul> or ask your own question.
      </p>
    </PostContainer>
  );
}

export default Post