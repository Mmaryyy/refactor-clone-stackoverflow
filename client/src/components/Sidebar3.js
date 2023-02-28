import styled from "styled-components";
import { useEffect } from 'react'


const Container = styled.div`
margin-bottom: 20px;
background-color: rgb(253,247,226);
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
border: 1px solid rgb(241,230,187);
border-radius: 3px;
width: 360px;
position: fixed;
ul {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  padding: 0px 15px;
  li {
      margin-left: 15px;
      margin-top: 12px;
      list-style-type: disc;
      font-size: 13px;
    }
  }
  p {
    margin-top: 12px;
    list-style-type: disc;
    font-size: 13px;
    line-height: 1.5;
  }

  .li-header {
    padding: 12px 15px;
    font-weight: 500;
    font-size: 15px;
    border-bottom: 1px solid rgb(241,230,187);
    background-color: rgb(251,243,213);
    color: var(--black__400);
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
    line-height: 1.5;
  }

  .blue {
    color: hsl(206,100%,40%);
    font-weight: 600;
    cursor: pointer;
    &.margin12 {
      margin-left: 25px;
    }
  }
`;


function Sidebar({setIsTitle, isTitle, isProblem, isTag}) {

useEffect(() => {
  setIsTitle(true);
}, []);

  return isTitle ? (
    <Container>
      <div className="li-header">How to Edit</div>
      <ul>
        <li className="li-list">
          Correct minor typos or mistakes
        </li>
        <li className="li-list">
          Clarify meaning without changing it
        </li>
        <li className="li-list">
          Add related resources or links
        </li>
        <li className="li-list">
          Always respect the author’s intent
        </li>
        <li className="li-list">
          Don’t use edits to reply to the author
        </li>
      </ul>
    </Container>
    ) : isProblem ? ( 
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
      </li>
        <div class='codeBlock'>
            ```python<br />
            <span class="blue">def </span>
            function(foo): <br />
            <span class="blue margin12">print</span>
            (foo)<br />
            ```
        </div>
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
        quote by placing {'>'} at start of line
      </li>
      <li className="li-list">
      to make links (use https whenever possible)<br />
      {'<https://example.com>'} <br />
      {'[example](https://example.com)'}<br />
      {'<a href="https://example.com">example</a>'}
      </li>
    </ul>
    </Container>
    ) : isTag ? ( 
    <Container>
    <div className="li-header">How to Format</div>
    <ul>
      <p>
      A tag is a keyword or label that categorizes your question with other, similar questions. Choose one or more (up to 5) tags that will help answerers to find and interpret your question.
      </p>

      <li className="li-list">
      complete the sentence: my question is about...
      </li>

      <li className="li-list">
      use tags that describe things or concepts that are essential, not incidental to your question
      </li>

      <li className="li-list">
      favor using 
      <span className='blue'> existing popular tags</span>
      </li>

      <li className="li-list">
      read the descriptions that appear below the tag
      </li>
      <p>If your question is primarily about a topic for which you can't find a tag:</p>
      <li className="li-list">
      combine multiple words into single-words with hyphens (e.g. 
      <span className='blue'> ruby-on-rails</span>
      ), up to a maximum of 35 characters

      </li>

      <li className="li-list">
      <span className='blue'>creating new tags is a privilege</span>
      ; if you can't yet create a tag you need, then post this question without it, then 
      <span className='blue'> ask the community to create it for you</span>
      </li>
    </ul>
    </Container>
    ) : <></>
  }

export default Sidebar;