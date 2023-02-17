import styled from "styled-components";
import { Link } from "react-router-dom"

//* sidebar에 있는 컨테이너 컴포넌트 App.js에 적용하기(왼쪽 전체마진 잡혀야 함)
//* Color 변수이름, 검은색 글씨 나누기
//! 마진 상쇄(BlogLi)

const Container = styled.div`
width: 300px;
background-color: rgb(253,247,226);
margin: 0px 0px 15px 24px;
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Blog = styled.div`
margin: 0px 0px 16px 0px;
`;

const BlogUl = styled.ul`
display:flex;
flex-direction: column;
`;

const BlogHLi = styled.li`
list-style: none;
padding: 12px 15px;
font-weight: bold;
font-size: var(--fs-caption);
border: 1px solid rgb(241,230,187);
background-color: rgb(251,243,213);
`;

const BlogLi = styled.li`
display: flex !important;
flex-direction: row;
list-style: none;
padding: 0px 16px;
margin: calc(12px * 1) 0;
`;

const TextLi = styled.div`
overflow-wrap: break-word !important;
margin-left: 10px;
color: black;
font-size: var(--fs-caption);
font-weight: 500;
height: auto;
`;

const LinkText = styled(Link)`
text-decoration: none;
`;


function Sidebar() {
  return (
      <Container>
        <Blog>
          <BlogUl>

            <BlogHLi>The Overflow Blog</BlogHLi>

            <BlogLi>
              <div>✏️</div>
              <LinkText to="#">
                <TextLi>You don’t have to build a browser in JavaScript anymore (Ep. 538)</TextLi>
              </LinkText>
            </BlogLi>

            <BlogLi>
              <div>✏️</div>
              <LinkText to="#">
                <TextLi>Serverless scales well, but most databases don’t</TextLi>
              </LinkText>
            </BlogLi>

            <BlogHLi>Featured on Meta</BlogHLi>

            <BlogLi>
              <div>📋</div>
              <LinkText to="#">
                <TextLi>Ticket smash for [status-review] tag: Part Deux</TextLi>
              </LinkText>
            </BlogLi>

            <BlogLi>
              <div>📋</div>
              <LinkText to="#">
                <TextLi>Updated cookie consent popup adds a "Necessary cookies only" button</TextLi>
              </LinkText>
            </BlogLi>

            <BlogLi>
              <div>⭐️</div>
              <LinkText to="#">
                <TextLi>Collectives: The next iteration</TextLi>
              </LinkText>
            </BlogLi>

            <BlogLi>
              <div>⭐️</div>
              <LinkText to="#">
                <TextLi>We’ve made changes to our Privacy Notice for Collectives™</TextLi>
              </LinkText>
            </BlogLi>

            <BlogLi>
              <div>⭐️</div>
              <LinkText to="#">
                <TextLi>Temporary policy: ChatGPT is banned</TextLi>
              </LinkText>
            </BlogLi>

            <BlogLi>
              <div>⭐️</div>
              <LinkText to="#">
                <TextLi>The [amazon] tag is being burninated</TextLi>
              </LinkText>
            </BlogLi>

          </BlogUl>
        </Blog>
      </Container>
  );
}

export default Sidebar;