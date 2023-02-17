// import React from 'react';
// import { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom"



const Container = styled.div`
box-sizing: inherit;
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
width: 300px;
height: 41.7px;
padding: 12px 15px;
font-weight: bold;
font-size: small;
border: 1px solid rgb(241,230,187);
background-color: rgb(251,243,213);
`;

const BlogLi = styled.li`
display:flex;
flex-direction: row;
list-style: none;
width: 298px;
/* height: 34px; */
height: auto;
padding: 0px 16px;
margin: 12px 0px;
`;

const TextLi = styled.div`
overflow-wrap: break-word !important;
margin-left: 10px;
color: black;
font-size: 14px;
font-weight: 500;
height: auto;
`;

// const TextLi = styled(Link)`
// overflow-wrap: break-word !important;
// margin-left: 10px;
// color: black;
// font-size: 14px;
// font-weight: 500;
// height: auto;
// `;


function Sidebar() {
  return (
      <Container>
        <Blog>
          <BlogUl>

            <BlogHLi>The Overflow Blog</BlogHLi>

            <BlogLi>
              <div>✏️</div>
              <Link to="#">
                <TextLi>You don’t have to build a browser in JavaScript anymore (Ep. 538)</TextLi>
              </Link>
            </BlogLi>

            <BlogLi>
              <div>✏️</div>
              <Link to="#">
                <TextLi>Serverless scales well, but most databases don’t</TextLi>
              </Link>
            </BlogLi>

            <BlogHLi>Featured on Meta</BlogHLi>

            <BlogLi>
              <div>📋</div>
              <Link to="#">
                <TextLi>Ticket smash for [status-review] tag: Part Deux</TextLi>
              </Link>
            </BlogLi>

            <BlogLi>
              <div>📋</div>
              <Link to="#">
                <TextLi>Updated cookie consent popup adds a "Necessary cookies only" button</TextLi>
              </Link>
            </BlogLi>

            <BlogLi>
              <div>⭐️</div>
              <Link to="#">
                <TextLi>Collectives: The next iteration</TextLi>
              </Link>
            </BlogLi>

            <BlogLi>
              <div>⭐️</div>
              <Link to="#">
                <TextLi>We’ve made changes to our Privacy Notice for Collectives™</TextLi>
              </Link>
            </BlogLi>

            <BlogLi>
              <div>⭐️</div>
              <Link to="#">
                <TextLi>Temporary policy: ChatGPT is banned</TextLi>
              </Link>
            </BlogLi>

            <BlogLi>
              <div>⭐️</div>
              <Link to="#">
                <TextLi>The [amazon] tag is being burninated</TextLi>
              </Link>
            </BlogLi>

          </BlogUl>
        </Blog>
      </Container>
  );
}

export default Sidebar;