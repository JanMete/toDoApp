import styled from 'styled-components';
import { Button } from '../Button/Button';

const StyledLi = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 8px;
  border-top: 1px solid black;
  margin-top: 16px;
  padding-top: 16px;
  min-width: 400px;
`;

const StyledSpan = styled.span`
  width: 100%;
  text-decoration: ${({ $done }) => ($done ? 'line-through' : '')};
`;

export function TodoItem({
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
}) {
  return (
    <StyledLi>
      <StyledSpan $done={done}>{name}</StyledSpan>
      {!done && <Button onClick={onDoneButtonClick}>Zrobione</Button>}
      <Button onClick={onDeleteButtonClick}>Usuń</Button>
    </StyledLi>
  );
}
