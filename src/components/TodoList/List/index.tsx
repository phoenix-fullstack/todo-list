import React, { FC, ReactElement } from 'react';
import { IToto } from '../typings';
import TdItem from './Item';

interface IProps {
    todoList: IToto[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TdList: FC<IProps> = ({
    todoList,
    toggleTodo,
    removeTodo
}): ReactElement => {
    return (
        <div className="todo-list">
            {
                todoList && todoList.map((todo: IToto) => {
                    return (
                        <TdItem
                            key={todo.id}
                            todo={todo}
                            toggleTodo={toggleTodo}
                            removeTodo={removeTodo}
                        />
                    )
                })
            }
        </div>
    );
};

export default TdList;