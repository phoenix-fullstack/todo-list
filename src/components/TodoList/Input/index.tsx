import React, { useRef, FC, ReactElement } from 'react';
import styled from '@emotion/styled';

import { IToto } from '../typings'

interface IProps {
    addTodo: (todo: IToto) => void;
    todoList: IToto[];
};

const InputContainer = styled.div`
    .todo-input {
        display: flex;
        flex-direction: row;
        justify-items: center;
        >input {
            border: 1px solid lightcoral;
            border-radius: 3px;
            outline: none;
            width: 50%;
            height: 40px;
            &:hover {
                
            }
        }
        >button {
            width: 50%;
            border: none;
            border-radius: 3px;
            border-style: none;
            outline: none;
            font-size: 16px;
            background: lightseagreen;
            cursor: pointer;
            &:hover {
                background: lightpink;
            }
        }
    }
`;

const TdInput: FC<IProps> = ({
    addTodo,
    todoList
}): ReactElement => {

    const inputRef = useRef<HTMLInputElement>(null);

    const addItem = (): void => {
        const val: string = inputRef.current!.value.trim();
        if (val.length) {
            const isExist = todoList.find(todo => todo.content === val);

            if (isExist) {
                alert('已存在该代办项！');
                return;
            }
            addTodo({
                id: new Date().getTime(),
                content: val,
                completed: false
            });
            inputRef.current!.value = '';
        }
    }

    return (
        <InputContainer>
            <div className="todo-input">
                <input type="text" placeholder="请输入代办项" ref={inputRef} />
                <button onClick={addItem}>添加</button>
            </div>
        </InputContainer>
    );
};

export default TdInput;
