import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';

const StyledForm = styled.form`
  display: flex;
  gap: 12px;
  margin-top: 24px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  border: solid 1px currentColor;
  border-radius: 4px;
`;

export function Form({ onFormSubmit }) {
  const [inputValue, setInputValue] = useState('');
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        onFormSubmit(inputValue);
      }}
    >
      <StyledInput
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type='text'
      />
      <Button>Dodaj</Button>
    </StyledForm>
  );
}
