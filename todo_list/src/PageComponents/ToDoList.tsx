import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { deleteToDoList, getToDoList, getToDoListByCategoryId } from '../Api/toDoListApi';
import ToDoListModel from '../Models/ToDoListModel';
import { TodoPanel } from './TodoPanel';


export const ToDoList = () => {
  const location = useLocation();
  const [todolist, setTodolist]: [
      ToDoListModel[],
      React.Dispatch<React.SetStateAction<ToDoListModel[]>>
    ] = useState<ToDoListModel[]>([]);
    useEffect((): void => {
      getToDoListByCategoryId(location.state.id,setTodolist);
    }, []);
    console.log(location.state.id)
   
   
return (
  <div>
    <TodoPanel/>
    {todolist?.map((todoItem) => {
        return (
  <div className="todo_item_container">
    <div>
      
      <div
        className="todo_item_title"
      >
        {todoItem.name}
       
      </div>
      <div aria-hidden 
    //   onClick={() => checkTodo(todo.id)} className={styles.todo_item_description}
      >
        {todoItem.description}
        
      </div>
    </div>
    <div className="todo_item_button_container">
      <button className='button button_orange'>
        EDIT
      </button>
      <button 
      className='button button_red'
      onClick={async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        console.log(todoItem.id);
        deleteToDoList(todoItem.id);
      // setTimeout(()=>{window.location.reload();},100);
      }}
      >
        DELETE
      </button>
    </div>
  </div>
    );
  })}
  </div>
);
};