import { useState } from 'react';
import './App.css';
import styled from 'styled-components';
import { Form } from './components/Form/Form';
import { TodoItem } from './components/TodoItem/TodoItem';
import { getSubHeading } from './utils/getSubHeating.js';

const StyledContainerDiv = styled.div`
  display: inline-block;
  background-color: white;
  padding: 32px 24px;
  border-radius: 12px;
  max-width: 800px;
  @media screen and (max-width: 600px) {
    max-width: 100vw;
    margin: 0 10px;
  }
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
`;

const StyledButton = styled.button`
  background-color: var(--color-main);
  border: none;
  color: white;
  width: 50px;
  aspect-ratio: 1;
  font-size: 32px;
  border-radius: 50%;
  cursor: pointer;
`;

function App() {
  const [isFormShowen, setIsFormShowen] = useState(false);
  const [todos, setTodos] = useState([
    { name: 'Test', done: false, id: Math.random() },
  ]);

  function addItem(newTodoName) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { name: newTodoName, done: false, id: Math.random() },
    ]);
    setIsFormShowen(false);
  }

  function deleteItem(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function finishItem(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          done: true,
        };
      })
    );
  }

  return (
    <StyledContainerDiv>
      <StyledHeader>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubHeading(todos.length)}</h2>
        </div>
        {!isFormShowen && (
          <StyledButton onClick={() => setIsFormShowen(true)}>+</StyledButton>
        )}
      </StyledHeader>
      {isFormShowen && (
        <Form onFormSubmit={(newTodoName) => addItem(newTodoName)} />
      )}
      <ul>
        {todos.map(({ id, name, done }) => (
          <TodoItem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() => deleteItem(id)}
            onDoneButtonClick={() => finishItem(id)}
          />
        ))}
      </ul>
    </StyledContainerDiv>
  );
}

export default App;
