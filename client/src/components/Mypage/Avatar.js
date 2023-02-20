import React from 'react';
import styled from 'styled-components';

export const UserProfiles = styled.div`
  margin: 30px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5%;

  background-image: ${(props) =>
    props.img
      ? `url(${props.img})`
      : `url("https://placeimg.com/200/100/any")`};
`;

export default function Avatar({ width, height }) {
  return (
    <>
      <UserProfiles width={width} height={height} />
    </>
  );
}
