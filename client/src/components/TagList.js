import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  border: 1px solid var(--black__100);
  border-radius: 5px;

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
  }
`


const TagList = ({data}) => {
  return (
    <Container>
      <div className="top_field">
        <div>
          <Link to="#" className="linkStyle tagname">{data.title}</Link>
        </div>
      </div>
      <div className="middle_field">
        {`${data.body.slice(0, 100)}...`}
      </div>
    </Container>
  );
}

export default TagList