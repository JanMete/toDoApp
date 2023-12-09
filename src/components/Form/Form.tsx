import { useState, useEffect } from 'react';
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
const StyledDiv = styled.div`
  margin-top: 1rem;
  color: red;
`;

export function Form({ onFormSubmit }: FormProps) {
  const [inputValue, setInputValue] = useState('');
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;

    if (showError) {
      timeoutId = setTimeout(() => {
        setShowError(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [showError]);

  return (
    <>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          if (inputValue.trim() === '') {
            setShowError(true);
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
      {showError && (
        <StyledDiv data-test='errorDiv'>
          <p>Zadanie nie może być puste!</p>
        </StyledDiv>
      )}
    </>
  );
}
