// import React from 'react';
// import { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom"



const Container = styled.div`
/* width: 300px; */
background-color: white;
margin: 0px 0px 19px 0px;
  .title {
    font-size: var(--fs-subheading);
    color: hsl(210,8%,25%);
    font-weight: 400;
    margin-bottom: 1em;
  }

  ul {
    display:flex;
    flex-direction: column;
  }

  li {
    display:flex;
    flex-direction: row;
    list-style: none;
    height: auto;
    padding: 0px;
    margin: 0px 0px 10px 0px;
  }

  .li-icon {
    margin: 0px 6px 0px 0px;
  }

  .li-link {
    text-decoration: none;
  }

  .li-text {
    color: var(--link__content);
    font-size: var(--fs-caption);
    font-weight: 500;
  }
`;

function Sidebar2() {
  return (
    <Container>
      <div className="title">Hot Network Questions</div>
      <ul>
        <li>
          <div className="li-icon">🍓</div>
          <Link to="#" className="li-link">
            <div className="li-text">
              Do humans need some agency over the world around them for their
              lives to have some sense or purpose?
            </div>
          </Link>
        </li>

        <li>
          <div className="li-icon">🍓</div>
          <Link to="#" className="li-link">
            <div className="li-text">
              What are the cheapest options for a thickening agent for making
              soups?
            </div>
          </Link>
        </li>

        <li>
          <div className="li-icon">🍓</div>
          <Link to="#" className="li-link">
            <div className="li-text">
              Difference between Sunbeam and Lightning Bolt
            </div>
          </Link>
        </li>

        <li>
          <div className="li-icon">🍓</div>
          <Link to="#" className="li-link">
            <div className="li-text">
              Aluminum window screen as wire mesh be for strengthening concrete?
            </div>
          </Link>
        </li>

        <li>
          <div className="li-icon">🍓</div>
          <Link to="#" className="li-link">
            <div className="li-text">
              MOSFETs turn on without any voltage applied to the gate
            </div>
          </Link>
        </li>
      </ul>
    </Container>
  );
}

export default Sidebar2;