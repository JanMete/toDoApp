import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form } from './components/Form/Form';
import { TodoItem } from './components/TodoItem/TodoItem';
import { getSubHeading } from './utils/getSubHeating';

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

type Todo = {
  name: string;
  done: boolean;
  id: number;
};

function App() {
  const [isFormShowen, setIsFormShowen] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      const parsedTodos = JSON.parse(storedTodos);
      if (parsedTodos.length > 0) {
        setTodos(parsedTodos);
      }
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addItem(newTodoName: string) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { name: newTodoName, done: false, id: Math.random() },
    ]);
    setIsFormShowen(false);
  }

  function deleteItem(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function finishItem(id: number) {
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
        <Form onFormSubmit={(newTodoName: string) => addItem(newTodoName)} />
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
