import React from 'react';
import styled from 'styled-components';
export const UserProfiles = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5%;
`;

export default function Avatar({ width, height }) {
  return (
    <>
      <UserProfiles width={width} height={height} />
    </>
  );
}
