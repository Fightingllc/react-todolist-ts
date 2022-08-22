/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-22 14:36:03
 * @LastEditTime: 2022-08-22 21:14:26
 * @FilePath: \react-todolist-ts\src\components\TodoList\types\index.ts
 */
export interface ITodo {
    id: number,
    content: string,
    completed: boolean
}

export interface IState {
    todoList: ITodo[]
}


// 定义action 的枚举
export interface IAction {
    type: ACTION_TYPE,
    // 可能根据id来操作（id: number）
    payload: ITodo | ITodo[] | number
}

export enum ACTION_TYPE {
    ADD_TODO = 'addTodo',
    REMOVE_TODO =  'removeTodo',
    TOGGLE_TODO = 'toggleTodo',
    INIT_TODOLIST = 'initTodoList'
}