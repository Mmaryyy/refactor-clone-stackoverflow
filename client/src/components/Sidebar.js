import styled from "styled-components";
import { Link } from "react-router-dom"


const Container = styled.div`
margin-top: 60px;
margin-bottom: 20px;
background-color: rgb(253,247,226);
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border: 1px solid rgb(241,230,187);
border-radius: 3px;
  ul {
    display:flex;
    flex-direction: column;
  }

  .li-header {
    list-style: none;
    padding: 12px 15px;
    font-weight: 700;
    font-size: 13px;
    border-bottom: 1px solid rgb(241,230,187);
    background-color: rgb(251,243,213);
    color: var(--black__400);
    margin-bottom: 12px;
    /* border: 1px solid rgb(241,230,187); */
    &.bottom {
      border-top: 1px solid rgb(241,230,187);
    }
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
    font-size: 13px;
    font-weight: 400;
    height: auto;
      :hover {
        color: var(--black__300);
    }
  }

  .li-link {
    text-decoration: none;
  }

  .svg-icon {
    fill: var(--black__400);
  }
`;


function Sidebar() {
  return (
    <Container>
      <ul>
        <li className="li-header">The Overflow Blog</li>

        <li className="li-list">
          <div>
            <svg
              aria-hidden="true"
              className="svg-icon"
              width="14"
              height="14"
              viewBox="0 0 14 14">
              <path d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"></path>
            </svg>
          </div>
          <Link to="#" className="li-link">
            <div className="li-text">
              You don’t have to build a browser in JavaScript anymore (Ep. 538)
            </div>
          </Link>
        </li>

        <li className="li-list">
          <div>
            <svg
              aria-hidden="true"
              className="svg-icon"
              width="14"
              height="14"
              viewBox="0 0 14 14">
              <path d="m11.1 1.71 1.13 1.12c.2.2.2.51 0 .71L11.1 4.7 9.21 2.86l1.17-1.15c.2-.2.51-.2.71 0ZM2 10.12l6.37-6.43 1.88 1.88L3.88 12H2v-1.88Z"></path>
            </svg>
          </div>
          <Link to="#" className="li-link">
            <div className="li-text">
              Serverless scales well, but most databases don’t
            </div>
          </Link>
        </li>

        <li className="li-header bottom">Featured on Meta</li>

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