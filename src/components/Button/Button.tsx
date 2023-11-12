import styled from 'styled-components';

const StyledButton = styled.button`
  color: var(--color-main);
  background-color: transparent;
  border: solid 1px currentColor;
  border-radius: 4px;
  padding: 4px 8px;
  margin: 5px;
  padding: 5px 10px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: white;
    background-color: var(--color-main);
  }
`;

export function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
