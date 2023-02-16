import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
    border: 1px solid black;
    width: 200px;
    /* height: calc(100vh); */
    display: flex;
    flex-direction: column;
    color: var(--main__content);
`

const TapContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const TapLink = styled(Link)`
    color: var(--main__content);
    padding: 20px;
    text-decoration: none;
    cursor: pointer;
    &:focus {
        background: var(--menu__active);
        border-right: 0.5rem solid var(--point__color);
        font-weight: bold;
        color: black;
    }
`

const Nav = () => {
    
  return (
    <div>
        <NavContainer>
            <TapLink to='/'>Home</TapLink>
            <p>PUBLIC</p>
                <TapContainer>
                <TapLink to='/questions'> 🌏 Questions</TapLink>
                <TapLink to='/tags' paddingLeft={'40px'}>Tags</TapLink>
                <TapLink to='/users'>Users</TapLink>
                </TapContainer>
        </NavContainer>
    </div>
  )
}

export default Nav