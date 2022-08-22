/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-22 14:18:26
 * @LastEditTime: 2022-08-22 14:49:54
 * @FilePath: \react-todolist-ts\src\components\TodoList\Input\index.tsx
 */
import React, { FC, ReactElement, useRef } from 'react'
import { ITodo } from '../types';

interface IProps {
    addTodo: (todo: ITodo) => void;
    todoList: ITodo[];
}

const TdInput: FC<IProps> = ({
    addTodo,
    todoList
}):ReactElement => {

    // 需要拿到input 中的值 使用useRef
    // 此时是一个input ts泛型为 HTMLInputElement
    const inputRef = useRef<HTMLInputElement>(null);

    // 判断input中的值是否为空 是否该项已存在
    const addItem = (): void => {
        // 判空 inputRef对象可能为 "null"  使用 ！ 做个断言
        const val: string = inputRef.current!.value.trim();

        if(val.length) {
            const isExist = todoList.find(todo => todo.content === val);

            if(isExist) {
                alert("已存在该项")
                return
            }
            // 若不存在 就调用父级的addtodo 方法 传递数据
            addTodo({
                id: new Date().getTime(),
                content: val,
                completed: false
            });

            // 最后记得清空input 中的数据
            inputRef.current!.value = '';
        }
    }

  return (
    <div className='todo-input'>
        <input type="text" ref={ inputRef } placeholder='请输入代办事项'/>
        <button onClick={addItem}>添加</button>
    </div>
  )
}

export default TdInput