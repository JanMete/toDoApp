import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button/Button';
import { FormProps } from '../../Interfaces/interfaces';

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

export function Form({ onFormSubmit }: FormProps) {
  const [inputValue, setInputValue] = useState('');
  return (
    <StyledForm
      onSubmit={(e) => {
        e.preventDefault();
        if (inputValue.trim() === '') {
          return;
        }

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
