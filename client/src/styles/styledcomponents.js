import styled from "styled-components";

export const SubmitButton = styled.button`
  padding: 10px;
  width: fit-content;
  height: fit-content;
  margin: ${(props) => props.margin || 0};
  white-space: nowrap !important;
  background: ${props => props.bg || 'var(--button__back)'};
  color: ${props => props.color || 'white'};
  border: 1px solid var(--link__content);
  box-shadow: inset 0 1px ${props => props.shadow || '#80C0FF'};
  border-radius: 5px;
  font-size: var(--fs--mid);
  font-weight: 550;
  cursor: pointer;
  :hover {
    background: ${props => props.hover || 'var(--button__back--hover)'};
  }
`;
export const SubmitInput = styled.input`
  padding: 10px;
  width: fit-content;
  height: fit-content;
  margin: ${(props) => props.margin || 0};
  white-space: nowrap !important;
  background: ${props => props.bg || 'var(--button__back)'};
  color: ${props => props.color || 'white'};
  border: 1px solid var(--link__content);
  box-shadow: inset 0 1px ${props => props.shadow || '#80C0FF'};
  border-radius: 5px;
  font-size: var(--fs--mid);
  font-weight: 550;
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
`;

export const LinkContent = styled.a`
  /* display: flex;
  align-items: center; */
  text-decoration: none;
  color: var(--link__content);
  margin: 0 10px 0 0;
  cursor: pointer;
  font-size: ${(props) => props.fs || "var(--fs--lg)"};
  &:hover {
    color: var(--button__back);
  }
`;

export const CommonWrapper = styled.div`
  display: ${(props) => props.display || "flex"};
  margin: ${(props) => props.margin || 0};
  justify-content: ${(props) => props.justify || null};
  flex-direction: ${(props) => props.direct || null};
  align-items: ${(props) => props.align || null};
  width: 100%;
  border-bottom: ${(props) => props.bottom || null};
  padding: ${(props) => props.padding || null};
`;
// 내부 컨텐츠가 다른 버튼
export const BaseButton = styled.button`
  border: none;
  background: none;
  color: ${props => props.color || 'var(--black__300)'};
  cursor: pointer;
  font-size: ${props => props.size || 'var(--fs--lg)'};
  font-weight: ${props => props.weight || null};
  margin: ${props => props.margin || null};
`