/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-22 14:24:38
 * @LastEditTime: 2022-08-22 20:16:42
 * @FilePath: \react-todolist-ts\src\components\TodoList\List\Item.tsx
 */
import React, { FC, ReactElement } from 'react';
import { ITodo } from '../types';

interface IProps {
    todo: ITodo;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TdItem: FC<IProps> = ({
    todo,
    toggleTodo,
    removeTodo
}):ReactElement => {

    const {id, content, completed} = todo;

    return (
        <div className="item">
            <input 
                type="text" 
                checked={completed}
                onChange = {() => toggleTodo(id)}    
            />
            <span 
                style={{textDecoration: completed ? 'line-through' : 'none'}}
            >{content}</span>
            <button 
                onClick={() => removeTodo(id)}
            >删除</button>

        </div>
    )
}

export default TdItem
