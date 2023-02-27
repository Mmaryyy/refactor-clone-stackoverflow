import styled from "styled-components";


const Container = styled.div`
margin-top: 60px;
margin-bottom: 20px;
background-color: rgb(253,247,226);
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border: 1px solid rgb(241,230,187);
border-radius: 3px;
ul {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 0px 15px;
  /* margin-left: 30px; */
  li {
      margin-left: 15px;
      margin-top: 12px;
      list-style-type: disc;
      font-size: 13px;
    }
  }

  .li-header {
    padding: 12px 15px;
    font-weight: 700;
    font-size: 13px;
    border-bottom: 1px solid rgb(241,230,187);
    background-color: rgb(251,243,213);
    color: var(--black__400);
    /* margin-bottom: 12px; */
    /* border: 1px solid rgb(241,230,187); */
  }
  
  .li-text {
    overflow-wrap: break-word !important;
    /* margin-left: 10px; */
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

  .codeBlock {
    margin-top: 5px;
    /* margin-left: 15px; */
    padding: 8px;
    background-color: rgb(240,242,243);
    width: 70%;
    font-size: 13px;
    font-weight: 400;
  }
`;


function Sidebar() {
  return (
    // <Container>
    //   <div className="li-header">How to Edit</div>
    //   <ul>
    //     <li className="li-list">
    //       Correct minor typos or mistakes
    //     </li>
    //     <li className="li-list">
    //       Clarify meaning without changing it
    //     </li>
    //     <li className="li-list">
    //       Add related resources or links
    //     </li>
    //     <li className="li-list">
    //       Always respect the author’s intent
    //     </li>
    //     <li className="li-list">
    //       Don’t use edits to reply to the author
    //     </li>
    //   </ul>
    // </Container>

    <Container>
    <div className="li-header">How to Format</div>
    <ul>
      <li className="li-list">
        create code fences with backticks ` or tildes ~
      </li>
        <div class="codeBlock">
            ```<br />
            like so<br />
            ```
        </div>
      <li className="li-list">
        add language identifier to highlight code
        <div class='codeBlock'>
            ```python<br />
            
            <span class="fc-blue-600">def</span>
            <span class="fc-blue-600">print(foo)</span>
            ```
        </div>
      </li>
      <li className="li-list">
      put returns between paragraphs
      </li>
      <li className="li-list">
      for linebreak add 2 spaces at end
      </li>
      <li className="li-list">
      _italic_ or **bold**
      </li>
      <li className="li-list">
      indent code by 4 spaces
      </li>
      <li className="li-list">
      backtick escapes `like _so_`
      </li>
      <li className="li-list">
        quote by placing `{'>'}` at start of line
      </li>
      <li className="li-list">
      to make links (use https whenever possible)
      </li>
    </ul>
    </Container>

    // <Container>
    // <div className="li-header">How to Edit</div>
    // <ul>
    //   <li className="li-list">
    //     Correct minor typos or mistakes
    //   </li>
    //   <li className="li-list">
    //     Clarify meaning without changing it
    //   </li>
    //   <li className="li-list">
    //     Add related resources or links
    //   </li>
    //   <li className="li-list">
    //     Always respect the author’s intent
    //   </li>
    //   <li className="li-list">
    //     Don’t use edits to reply to the author
    //   </li>
    // </ul>
    // </Container>
  );
}

export default Sidebar;