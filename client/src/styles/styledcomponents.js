import styled from 'styled-components'

export const SubmitButton = styled.button`
    padding: 15px;
    width: fit-content;
    height: fit-content;
    white-space: nowrap !important;
    background: var(--button__back);
    color: white;
    border: 1px solid var(--link__content);
    box-shadow: inset 0 1px rgb(128, 192, 255);
    border-radius: 5px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    :hover {
        background: var(--button__back--hover);
    }
`

export const TagButton = styled.button`
    padding: 5px;
    border-radius: 5px;
    border: none;
    background: var(--tag__back);
    color: var(--tag__content);
    margin: 0 3px;
`

export const LinkContent = styled.a`
    text-decoration: none;
    color: var(--link__content);
    cursor: pointer;
    font-size: ${props => props.fs || 'var(--fs--lg)'} ;
    &:hover {
        color: var(--button__back);
    }
`