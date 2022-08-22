/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-22 14:22:09
 * @LastEditTime: 2022-08-22 19:42:03
 * @FilePath: \react-todolist-ts\src\components\TodoList\index1.tsx
 */
import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import TdInput from './Input'
import TdList from './List'
import { ITodo } from './types'

const TodoList = (): ReactElement => {
    const [todoList, setTodoList] = useState<ITodo[]>([]);

    // 父组件更新 但是子组件没有更新时 此函数的句柄 会重新生成一次 不符合性能优化
    // 如果子组件的函数 是由父组件传递过去的  建议使用useCallback 包裹一下
    const addTodo = useCallback((todo: ITodo) => {
        // console.log(todo);
        setTodoList(todoList => [...todoList, todo])
        
    },[])

    useEffect(() => {
        console.log(todoList);
        
    },[todoList])

  return (
    <div className='todo-list'>
        <TdInput 
            addTodo={addTodo}
            todoList={todoList}
        />
        {/* <TdList todoList={todoList} /> */}
    </div>
  )
}

export default TodoList