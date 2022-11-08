import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { postToDoList } from '../Api/toDoListApi';



export const TodoPanel=()=> {
  const location = useLocation();
  let navigate = useNavigate();
  const [todolistName, setTodolistName]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");
  const [todolistDescription, setTodolistDescription]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");
 // console.log("ggg "+location.state.id)
  return (
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
        className='button button_green'
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {navigate("/")}}
        >

           BACK TO CATEGORY LIST
        </button>
        <button 
        className='button button_blue'
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
          console.log(todolistName);
          postToDoList({ name: todolistName, description:todolistDescription, categoryId:location.state.id});
          console.log(todolistDescription)
         // setTimeout(()=>{window.location.reload();},100);
        }}
        >
            ADD
        </button>
      </div>
    </div>
  );
};