export interface IToto {
  id: number;
  content: string;
  completed: boolean;
};

export interface IState {
  todoList: IToto[];
};

export interface IAction {
  type: ACTION_TYPE,
  payload: IToto | IToto[] | number
}

export enum ACTION_TYPE {
  ADD_TODO = 'addTodo',
  REMOVE_TODO = 'removeTodo',
  TOGGLE_TODO = 'toggleTodo',
  INIT_TODOLIST = 'initialList'
}