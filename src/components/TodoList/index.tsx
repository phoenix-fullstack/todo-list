import React, { FC, ReactElement, useCallback, useEffect, useReducer } from 'react';
import TdInput from './Input';
import TdList from './List';
import { IToto, IState, ACTION_TYPE } from './typings';
import { todoReducer } from './reducer';

// const initialState: IState = {
//     todoList: []
// };

function init(initTodoList: IToto[]): IState {
    return {
        todoList: initTodoList
    }
}

const TodoList: FC = (): ReactElement => {
    // const [todoList, setTodoList] = useState<IToto[]>([]);

    const [state, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        const todoList: IToto[] = JSON.parse(localStorage.getItem('todolist') || '[]');
        dispatch({
            type: ACTION_TYPE.INIT_TODOLIST,
            payload: todoList
        })
    }, []);

    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(state.todoList));
    }, [state.todoList])

    const addTodo = useCallback((todo: IToto): void => {
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo
        })
    }, []);

    const toggleTodo = useCallback((id: number): void => {
        dispatch({
            type: ACTION_TYPE.TOGGLE_TODO,
            payload: id
        })
    }, []);

    const removeTodo = useCallback((id: number): void => {
        dispatch({
            type: ACTION_TYPE.REMOVE_TODO,
            payload: id
        })
    }, []);

    return (
        <div className="todo-list">
            <TdInput
                addTodo={addTodo}
                todoList={state.todoList}
            />
            <TdList
                todoList={state.todoList}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
            />
        </div>
    )
};

export default TodoList;
