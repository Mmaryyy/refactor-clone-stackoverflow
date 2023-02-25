import React from 'react';
import user from '../../datas/userData.json';
import styled from 'styled-components';

export const UserProfiles = styled.div`
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 7px;
  /* 나중에 수정 */
  background-image: ${(props) =>
    props.img
      ? `url(${props.img})`
      : `url("https://placeimg.com/200/100/any")`};

  &:hover {
    height: ${(props) => props.height};
  }
`;

export default function Avatar({ width, height, margin }) {
  return (
    <>
      <UserProfiles width={width} height={height} margin={margin} />
    </>
  );
}
