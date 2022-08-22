/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-22 14:22:09
 * @LastEditTime: 2022-08-22 21:15:07
 * @FilePath: \react-todolist-ts\src\components\TodoList\index.tsx
 */
import React, { ReactElement, useCallback, useEffect, useReducer } from 'react'
import TdInput from './Input'
import TdList from './List'
import { todoReducer } from './reducer'
import { ACTION_TYPE, IState, ITodo } from './types'

// const initialState: IState = {
//     todoList: []
// }

// 官方文档有说明
// 惰性初始化 当useReducer执行的时候才会创建state
function init (initTodoList: ITodo[]): IState {
    return {
        todoList: initTodoList
    }
}

const TodoList = (): ReactElement => {

    

    // const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [state, dispatch] = useReducer(todoReducer, [], init);


    // 父组件更新 但是子组件没有更新时 此函数的句柄 会重新生成一次 不符合性能优化
    // 如果子组件的函数 是由父组件传递过去的  建议使用useCallback 包裹一下
    const addTodo = useCallback((todo: ITodo): void => {
        // console.log(todo);
        // setTodoList(todoList => [...todoList, todo])
        dispatch({
            type: ACTION_TYPE.ADD_TODO,
            payload: todo
        })
        
    },[])

    const removeTodo = useCallback((id: number) => {
        dispatch({
            type: ACTION_TYPE.REMOVE_TODO,
            payload: id
        })
    },[])

    const toggleTodo = useCallback((id: number) => {
        dispatch({
            type: ACTION_TYPE.TOGGLE_TODO,
            payload: id
        })
    },[])

    useEffect(() => {
        // console.log(state.todoList);
        const todoList = JSON.parse(localStorage.getItem('todolist') || '[]');

        dispatch({
            type: ACTION_TYPE.INIT_TODOLIST,
            payload: todoList
        })
    },[])

    useEffect(() => {
        // 每当修改todolist 时需要重新刷新localStorage
        localStorage.setItem('todolist', JSON.stringify(state.todoList))
    },[state.todoList])

  return (
    <div className='todo-list'>
        <TdInput 
            addTodo={addTodo}
            todoList={state.todoList}
        />
        <TdList 
            todoList={state.todoList} 
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
        />
    </div>
  )
}

export default TodoList