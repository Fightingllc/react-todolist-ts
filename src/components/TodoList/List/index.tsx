import React, { FC, ReactElement } from 'react'
import { ITodo } from '../types';

interface IProps {
    todoList: ITodo[];
}

const TdList: FC<IProps>  = ({
    todoList
}):ReactElement => {

  return (
    <div className='td-list'>
        fff
    </div>
  )
}

export default TdList