import styled from 'styled-components';
import { Button } from '../Button/Button';

const StyledLi = styled.li`
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  border-top: 1px solid black;
  margin-top: 16px;
  padding-top: 16px;
  min-width: 400px;
  @media screen and (max-width: 600px) {
    max-width: 100vw;
    min-width: 0;
  }
`;

const StyledSpan = styled.span`
  text-decoration: ${({ $done }) => ($done ? 'line-through' : '')};
`;

const StyledButtonContainer = styled.div`
  display: flex;
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
      <StyledButtonContainer className='buttonContainer'>
        {!done && <Button onClick={onDoneButtonClick}>Zrobione</Button>}
        <Button onClick={onDeleteButtonClick}>Usuń</Button>
      </StyledButtonContainer>
    </StyledLi>
  );
}
