import styled from 'styled-components'

export const SubmitButton = styled.button`
    padding: 15px;
    background: var(--button__back);
    color: white;
    border: 1px solid var(--link__content);
    box-shadow: inset 0 1px white;
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
