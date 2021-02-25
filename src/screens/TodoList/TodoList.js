import React from 'react';
import TodoListItem from './TodoListItem/TodoListItem';


const TodoList = ({todoListName, todoList}) => {
 
    return (
        <div className="todoList">
            <label className="todoList__lable">{todoListName}</label>
            <div className="todoList__container">
                {todoList.map((todo, id) =>
                    <TodoListItem
                        task={todo.task}
                        done={todo.done}
                        date={todo.date}
                        type={todo.type}
                        key={id} />)}
            </div> 
        </div>
    )
};

export default TodoList;