import styled from "styled-components";
import { Link } from "react-router-dom"


//* GlobalStyle -> sidebar(전체 컨테이너) 반영 전
// const Container = styled.div`
// width: 300px;
// background-color: rgb(253,247,226);
// margin: 0px 0px 15px 24px;
// box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
// `;

// const Blog = styled.div`
// margin: 0px 0px 16px 0px;
// `;

//* GlobalStyle -> sidebar(전체 컨테이너) 반영 후
//! GlobalStyle .sidebar추가
// .sidebar {
//   width: 300px;
//   margin: 0px 0px 15px 24px;
// }
//! App.js 엘리먼트 추가(</Routes> 밑에 추가해서 작업함)
//<div className="sidebar">
//  <Sidebar />
//  <Sidebar2 />
//</div> */}


const Container = styled.div`
margin: 0px 0px 16px 0px;
background-color: rgb(253,247,226);
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  ul {
    display:flex;
    flex-direction: column;
  }

  .li-header {
    list-style: none;
    padding: 12px 15px;
    font-weight: 700;
    font-size: var(--fs-caption);
    border: 1px solid rgb(241,230,187);
    background-color: rgb(251,243,213);
    color: var(--black__400);
    margin-bottom: 12px;
  }

  .li-list {
    display: flex !important;
    flex-direction: row;
    list-style: none;
    padding: 0px 16px;
    margin-bottom: 12px;
  }

  .li-text {
    overflow-wrap: break-word !important;
    margin-left: 10px;
    color: var(--black__500);
    font-size: var(--fs-caption);
    font-weight: 500;
    height: auto;
  }

  .li-link {
    text-decoration: none;
  }
`;


function Sidebar() {
  return (
    <Container>
      <ul>
        <li className="li-header">The Overflow Blog</li>

        <li className="li-list">
          <div>✏️</div>
          <Link to="#" className="li-link">
            <div className="li-text">
              You don’t have to build a browser in JavaScript anymore (Ep. 538)
            </div>
          </Link>
        </li>

        <li className="li-list">
          <div>✏️</div>
          <Link to="#" className="li-link">
            <div className="li-text">
              Serverless scales well, but most databases don’t
            </div>
          </Link>
        </li>

        <li className="li-header">Featured on Meta</li>

        <li className="li-list">
          <div>📋</div>
          <Link to="#" className="li-link">
            <div className="li-text">
              Ticket smash for [status-review] tag: Part Deux
            </div>
          </Link>
        </li>

        <li className="li-list">
          <div>📋</div>
          <Link to="#" className="li-link">
            <div className="li-text">
              Updated cookie consent popup adds a "Necessary cookies only"
              button
            </div>
          </Link>
        </li>

        <li className="li-list">
          <div>⭐️</div>
          <Link to="#" className="li-link">
            <div className="li-text">Collectives: The next iteration</div>
          </Link>
        </li>

        <li className="li-list">
          <div>⭐️</div>
          <Link to="#" className="li-link">
            <div className="li-text">
              We’ve made changes to our Privacy Notice for Collectives™
            </div>
          </Link>
        </li>

        <li className="li-list">
          <div>⭐️</div>
          <Link to="#" className="li-link">
            <div className="li-text">Temporary policy: ChatGPT is banned</div>
          </Link>
        </li>

        <li className="li-list">
          <div>⭐️</div>
          <Link to="#" className="li-link">
            <div className="li-text">The [amazon] tag is being burninated</div>
          </Link>
        </li>
      </ul>
    </Container>
  );
}

export default Sidebar;