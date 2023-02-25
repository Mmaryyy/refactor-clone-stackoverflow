import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 5px;
  background-color: red;
  position: absolute;
  top: 30px;
  width: 95%;
  border-radius: 3px;
  background-color: white;
  border: 1px solid rgb(225, 236, 244);;

  .linkStyle {
    cursor: pointer;
    align-self: start;
    text-decoration: none;
    font-size: 13px;
    font-weight: 400;
    color: rgb(57, 116, 156);
    padding: 5px 6px;
    margin: 3px;
    background-color: rgb(225, 236, 244);
    border: 2px solid rgb(225, 236, 244);
    border-radius: 3px;
  }
  .error {
    align-self: start;
    text-decoration: none;
    font-size: 13px;
    font-weight: 400;
    color: rgb(57, 116, 156);
    /* padding: 5px 6px; */
    margin: 3px;
    /* background-color: rgb(225, 236, 244); */
    /* border: 2px solid rgb(225, 236, 244); */
    /* border-radius: 3px; */
  }
`;

const TagList = ({ data, tagClickHandler }) => {
  return (
    <Container>
      {data.map(tag => {
        return (
          <div key={tag.id} className='linkStyle' onClick={tagClickHandler}>
            {tag.title}
          </div>
        )
      })}
      {data.length === 0 ? <div className='error'>No Results found</div> : null}
    </Container>
  );
};

export default TagList;
