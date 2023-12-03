export interface FormProps {
  onFormSubmit: (newTodoName: string) => void;
}
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}
export interface TodoItemProps {
  name: string;
  done: boolean;
  onDeleteButtonClick: () => void;
  onDoneButtonClick: () => void;
}
