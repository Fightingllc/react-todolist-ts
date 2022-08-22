/*
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-22 19:47:17
 * @LastEditTime: 2022-08-22 20:08:09
 * @FilePath: \react-todolist-ts\src\components\TodoList\reducer.ts
 */
import { IState, IAction, ACTION_TYPE, ITodo } from './types/index';
function todoReducer(state: IState, action: IAction) {
    // 里面的方法有 添加 删除

    const {type, payload} = action

    switch (type) {
        case ACTION_TYPE.ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, payload as ITodo]
            }
        case ACTION_TYPE.REMOVE_TODO:
            return {
                ...state,
                // 此时的payload 就是 id
                todoList: state.todoList.filter(todo => todo.id !== payload)
            }
        case ACTION_TYPE.TOGGLE_TODO:
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    return todo.id === payload ?
                    {
                        ...todo,
                        completed: !todo.completed
                    } :
                    {
                        ...todo
                    }
                })
            }

        default:
            return state
    }
}

export {
    todoReducer
}