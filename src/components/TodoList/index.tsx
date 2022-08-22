/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-22 14:22:09
 * @LastEditTime: 2022-08-22 19:58:25
 * @FilePath: \react-todolist-ts\src\components\TodoList\index.tsx
 */
import React, { ReactElement, useCallback, useEffect, useReducer } from 'react'
import TdInput from './Input'
import TdList from './List'
import { todoReducer } from './reducer'
import { ACTION_TYPE, IState, ITodo } from './types'

const initialState: IState = {
    todoList: []
}

const TodoList = (): ReactElement => {

    

    // const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [state, dispatch] = useReducer(todoReducer, initialState);


    // 父组件更新 但是子组件没有更新时 此函数的句柄 会重新生成一次 不符合性能优化
    // 如果子组件的函数 是由父组件传递过去的  建议使用useCallback 包裹一下
    const addTodo = useCallback((todo: ITodo) => {
        // console.log(todo);
        // setTodoList(todoList => [...todoList, todo])
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo
        })
        
    },[])

    useEffect(() => {
        console.log(state.todoList);
        
    },[state.todoList])

  return (
    <div className='todo-list'>
        <TdInput 
            addTodo={addTodo}
            todoList={state.todoList}
        />
        <TdList todoList={state.todoList} />
    </div>
  )
}

export default TodoList