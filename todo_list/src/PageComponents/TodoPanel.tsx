import { Button, Input } from 'antd';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getToDoListByCategoryId, postToDoList } from '../Api/toDoListApi';
import ToDoListModel from '../Models/ToDoListModel';
import { Header } from './Header';

type Props = {
  setToDoList: React.Dispatch<React.SetStateAction<ToDoListModel[]>>
};

export const TodoPanel=(props: Props)=> {
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
  console.log("ggg "+location.state.name)

  // const [category, setCategory]: [
  //   string,
  //   React.Dispatch<React.SetStateAction<string>>
  // ] = useState<string>("");

  const AddToDo = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    postToDoList({ name: todolistName, description: todolistDescription, categoryId: location.state.id,status:false})
      .then(function (response): void {
        getToDoListByCategoryId(location.state.id).then((resp): void => {
          props.setToDoList(resp.data);
         // console.log(resp.data);
        });
      })
      .catch(function (error): void {
        console.log(error);
      });
  };

  return (
    <div>
     <Header todoTitle={'ToDo List "'+location.state.name+'"'}/> 
    <div className="todo_panel_container">
      <div className="fields_container">
        <div className="field_container">
          <label htmlFor='name'>
            <div>Name</div>
            <Input autoComplete='off' 
            id='name'
            name='name' 
            value={todolistName}
            maxLength={50}
            placeholder={"add name for todo item"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTodolistName(e.target.value)
            }
             />
          </label>
        </div>
        <div className="field_container">
          <label htmlFor='description'>
            <div>Description</div>
            <Input
              autoComplete='off'
              id='description'
              name='description'
              value={todolistDescription}
              maxLength={200}
              placeholder={"add description for todo item"}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTodolistDescription(e.target.value)
              }
            />
          </label>
        </div>
      </div>
      <div className="button_container">
      <Button 
        className='button button_green'
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {navigate("/")}}
        >

           BACK TO CATEGORY LIST
        </Button>
        <Button 
        className='button button_blue'
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
          console.log(todolistName);
         // postToDoList({ name: todolistName, description:todolistDescription, categoryId:location.state.id,status:false});
         AddToDo(e)
         console.log(todolistDescription)
         setTodolistName("")
         setTodolistDescription("")
         // setTimeout(()=>{window.location.reload();},100);
        }}
        >
            ADD
        </Button>
      </div>
    </div>
    </div>
  );
};