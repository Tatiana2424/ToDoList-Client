import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { deleteToDoList, getToDoList, getToDoListByCategoryId, putToDoList } from '../Api/toDoListApi';
import ToDoListModel from '../Models/ToDoListModel';
import { CategoryPanel } from './CategoryPanel';

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
   // console.log(location.state.id)
  
    const [todoIdForEdit, setTodoIdForEdit] = React.useState<number | null>(null);
    const selectTodoIdForEdit = (id: ToDoListModel['id']) => {
      setTodoIdForEdit(id);
    };
    const [todolistName, setTodolistName]: [
      string,
      React.Dispatch<React.SetStateAction<string>>
    ] = useState<string>("");
    const [todolistDescription, setTodolistDescription]: [
      string,
      React.Dispatch<React.SetStateAction<string>>
    ] = useState<string>("");
    
return (
  <div>
    <TodoPanel/>
    {todolist?.map((todoItem) => {
       if(todoItem.id!=todoIdForEdit)
        return (
         
    <div>      

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
      <button 
      
      className='button button_orange'
      onClick={async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        selectTodoIdForEdit(todoItem.id)
        console.log("uuuu "+todoItem.id);
        console.log("pppp "+todoIdForEdit);
       //state={{ id: todoItem.id }}
      // setTimeout(()=>{window.location.reload();},100);
       //  setShowToDo(!showToDo)
      }}
 
      >
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
  </div>
    );
    return (
     // <TodoEditPanel key={todoItem.id} />
      <div className="todo_panel_container">
        <div className="fields_container">
          <div className="field_container">
            <label htmlFor='name'>
              <div>name</div>
              <input autoComplete='off' 
              id='name'
              name='name' 
           
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTodolistName(e.target.value)
              }
              
               />
            </label>
          </div>
          <div className="field_container">
            <label htmlFor='description'>
              <div>description</div>
              <input
                autoComplete='off'
                id='description'
                name='description'
               
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTodolistDescription(e.target.value)
                }
              />
            </label>
          </div>
        </div>
        <div className="button_container">
        
          <button 
          className='button button_blue'
          onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            console.log(todolistName);
            putToDoList(todoItem.id,{id:todoItem.id, name: todolistName, description:todolistDescription, categoryId:location.state.id});
            console.log(todolistDescription)
            
            setTodoIdForEdit(null)
           // setTimeout(()=>{window.location.reload();},100);
          }}
          >
              EDIT
             
          </button>
        </div>
      </div>
    );
  })}
  </div>
);
};