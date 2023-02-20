import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import TagList from "../components/TagList"

const Container = styled.div`
  max-width: 1100px;
  width: calc(100% - 164px);
  padding: 24px;
`

const Main = styled.div`
  .title {
    font-size: 27px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .body {
    font-size: 15px;
    margin-bottom: 16px;
    max-width: 600px;
    font-weight: 400;
  }
  .alltag_field {
    margin: -2px -2px 24px -2px;
  }

  .all_tag {
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    color: var(--link__content);
    display: flex;
    align-items: center;
    margin: 2px;
  }

  .filter_field {
    display: flex;
    flex-wrap: wrap !important;
    flex-direction: row;
    .tag_search {
      margin-bottom: 12px;
      position: relative;
    }

    #search {
      padding: 10px 10px 10px 32px;
      border: 1px solid var(--black__100);
      border-radius: 3px;
      ::placeholder {
        color: var(--black__100);
        font-size: 14px;
      }
    }

    .icon_search {
      position: absolute;
      top: 10px;
      left: 10px;
      fill: var(--black__200);
    }
  }

  .tag-filter {
    display: flex;
    margin-bottom: 12px;
    margin-left: auto;
  }

  .filter-box {
    padding: 11px;
    border: 1px solid var(--black__200);
    margin: 0 -1px -1px 0px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 500;
    color: var(--black__300);

    &.l_round {
      border-radius: 5px 0 0 5px;
    }
    &.r_round {
      border-radius: 0 5px 5px 0;
    }
  }

  .tags_list {
    border: 1px solid var(--black__300);
  }
`


const Tags = () => {
  return (
    <Container>
      <Main>
        <h1 className="title">Tags</h1>
        <p className="body">A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
        <div className="alltag_field">
          <Link to="#" className="all_tag">Show all tag synonyms</Link>
        </div>
        <div className="filter_field">
          <div className="tag_search">
            <input id="search" type="text" placeholder="Filter by tag name"></input>
            <svg aria-hidden="true" class="icon_search" width="18" height="18" viewBox="0 0 18 18"><path d="m18 16.5-5.14-5.18h-.35a7 7 0 1 0-1.19 1.19v.35L16.5 18l1.5-1.5ZM12 7A5 5 0 1 1 2 7a5 5 0 0 1 10 0Z"></path></svg>
          </div>
          <div className="tag-filter">
            <Link to="#" className="filter-box l_round">Popular</Link>
            <Link to="#" className="filter-box">Name</Link>
            <Link to="#" className="filter-box r_round">New</Link>
          </div>
        </div>
        <div className="tags_list">
          <TagList />
        </div>
      </Main>
    </Container>
  );
}

export default Tags