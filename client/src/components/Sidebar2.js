// import React from 'react';
// import { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom"



const Container = styled.div`
width: 300px;
background-color: white;
margin: 0px 0px 19px 0px;
`;

const Title = styled.div`
font-size: var(--fs-subheading);
color: hsl(210,8%,25%);
font-weight: 400;
margin-bottom: 1em;
`;

const BlogUl = styled.ul`
display:flex;
flex-direction: column;

`;

const BlogLi = styled.li`
display:flex;
flex-direction: row;
list-style: none;
height: auto;
padding: 0px;
margin: 0px 0px 10px 0px;
`;

const Favicon = styled.div`
margin: 0px 6px 0px 0px;
`;

const LinkText = styled(Link)`
text-decoration: none;

`;

const TextLi = styled.div`
color: var(--link__content);
font-weight: 500;
font-size: var(--fs-caption);
`;


function Sidebar2() {
  return (
    <Container>
      <Title>Hot Network Questions</Title>
      <BlogUl>
        <BlogLi>
          <Favicon>🍓</Favicon>
          <LinkText to="#">
            <TextLi>
            Do humans need some agency over the world around them for their lives to have some sense or purpose?
            </TextLi>
          </LinkText>
        </BlogLi>

        <BlogLi>
          <Favicon>🍓</Favicon>
          <LinkText to="#">
            <TextLi>
            What are the cheapest options for a thickening agent for making soups?
            </TextLi>
          </LinkText>
        </BlogLi>

        <BlogLi>
          <Favicon>🍓</Favicon>
          <LinkText to="#">
            <TextLi>
            Difference between Sunbeam and Lightning Bolt
            </TextLi>
          </LinkText>
        </BlogLi>

        <BlogLi>
          <Favicon>🍓</Favicon>
          <LinkText to="#">
            <TextLi>
            Aluminum window screen as wire mesh be for strengthening concrete?
            </TextLi>
          </LinkText>
        </BlogLi>

        <BlogLi>
          <Favicon>🍓</Favicon>
          <LinkText to="#">
            <TextLi>
            MOSFETs turn on without any voltage applied to the gate
            </TextLi>
          </LinkText>
        </BlogLi>


      </BlogUl>
    </Container>
  );
}

export default Sidebar2;