import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid var(--black__300);
  .top_field {
    display: flex;
    margin-bottom: 12px;

  }

  .middle_field {
    font-size: 14px;
    font-weight: 400;
    color: var(--black__400);
    margin-bottom: 12px;
  }

  .bottom_field {
    display: flex;
    justify-content: space-between;
  }

  .bottom_field2 {
    display: flex;
    flex-direction: column;
  }

  .linkStyle {
    text-decoration: none;
    font-size: 13px;
    font-weight: 400;
    &.tagname {
      color: rgb(57,116,156);
      padding: 5px 6px;
      margin: 2px 2px 2px 0;
      background-color: rgb(225,236,244);
      border: 1px solid rgb(225,236,244);
      border-radius: 3px;
    }
    &.bottom_info {
      color: var(--black__300);
      display: table-cell;
    }
  }
`


const TagList = () => {
  return (
    <Container>
      <div className="top_field">
        <div>
          <Link to="#" className="linkStyle tagname">Javascript</Link>
        </div>
      </div>
      <div className="middle_field">
        For questions about programming in ECMAScript (JavaScript/JS) and its different dialects/implementations...
      </div>
      <div className="bottom_field">
        <div className="linkStyle bottom_info">2476794y questions</div>
        <div className="bottom_field2">
          <Link to="#" className="linkStyle bottom_info">379 asked today,</Link>
          <Link to="#" className="linkStyle bottom_info">3259 this week</Link>
        </div>
      </div>
    </Container>
  );
}

export default TagList