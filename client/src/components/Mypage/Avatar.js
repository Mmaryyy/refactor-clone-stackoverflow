import styled from 'styled-components';
import { useSelector } from 'react-redux';

export const UserProfiles = styled.div`
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 7px;
  background-size: cover;
  background-repeat: no-repeat;

  /* 나중에 수정 */
  background-image: ${(props) =>
    props
      ? `url(${props.img})`
      : `url("/image/Avatar1.png")`};
  cursor: pointer;
  &:hover {
    height: ${(props) => props.height};
  }
`;

export default function Avatar({ width, height, margin, user }) {
// let userImg = `url("/image/Avatar1.png")`;


  return (
    <>
      <UserProfiles width={width} height={height} margin={margin} img={user.img}
      />
    </>
  );
}
