import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { deleteToDoList, getToDoList, getToDoListByCategoryId, putToDoList } from '../Api/toDoListApi';
import ToDoListModel from '../Models/ToDoListModel';
import { CategoryPanel } from './CategoryPanel';
import {CheckSquareOutlined, CloseCircleOutlined, CloseSquareOutlined  } from "@ant-design/icons";
import { TodoPanel } from './TodoPanel';
import { Button, Input } from 'antd';


export const ToDoList = () => {
  const location = useLocation();
  const [todolist, setTodolist]: [
      ToDoListModel[],
      React.Dispatch<React.SetStateAction<ToDoListModel[]>>
    ] = useState<ToDoListModel[]>([]);
    // useEffect((): void => {
    //   getToDoListByCategoryId(location.state.id,setTodolist);
    // }, []);
  
    useEffect((): void => {
      getToDoListByCategoryId(location.state.id).then((resp): void => {
        setTodolist(resp.data);
      });
    }, []);

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

    const [todoId, setTodoId]: [
      number,
      React.Dispatch<React.SetStateAction<number>>
    ] = useState<number>(0);

    const [todolistStatus, setTodolistStatus]: [
      boolean,
        React.Dispatch<React.SetStateAction<boolean>>
      ] = useState<boolean>(false);

    const [showWarningToDo, setWarningToDo] = useState(false);
    const[chosenToDO, setChosenToDo]: [
      number,
      React.Dispatch<React.SetStateAction<number>>
    ] = useState<number>(0);

    const showDeleteConfirm = () => {
      deleteToDoList(chosenToDO).then((resp) => {
        getToDoListByCategoryId(location.state.id).then((resp): void => {
          setTodolist(resp.data);
        });
      });
     // window.location.reload();
};

const [showEditToDo, setShowEditToDo]: [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] = useState<boolean>(true);

const RenameToDo = (): void => {
 // let model: CategoryModel = categoty;
//  model.name = categoryName;
  putToDoList({id:todoId, name: todolistName, description: todolistDescription, categoryId: location.state.id, status:todolistStatus}).then(function (response): void {
    getToDoListByCategoryId(location.state.id).then((resp): void => {
      setTodolist(resp.data);
    });
  });
  setShowEditToDo(!showEditToDo);
};
return (
  <div>
    <TodoPanel setToDoList={setTodolist}/>
    {todolist?.map((todoItem: ToDoListModel) => {
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
    <div className="icon">
    
    </div>
    <div className="todo_item_button_container">
      {todoItem.status?(
    <CheckSquareOutlined
     className="checkCircleOutlined"
     onClick={():void => {
      let toDoListVal: ToDoListModel = todoItem;
      toDoListVal.status = !toDoListVal.status;
      putToDoList(toDoListVal);
      setTodolistStatus(toDoListVal.status)
      console.log("stat: "+todolistStatus);
     }
    }
     />
      ):(
        <CloseSquareOutlined
     className="closeCircleOutlined"
     onClick={():void => {
      let toDoListVal: ToDoListModel = todoItem;
      toDoListVal.status = !toDoListVal.status;
      putToDoList(toDoListVal);
      setTodolistStatus(toDoListVal.status)
      console.log("stat: "+todolistStatus);
     }
    }
     />
      )
    }
    <div className="edit-delete">
      <Button 
      
      className='button button_orange'
      onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        selectTodoIdForEdit(todoItem.id)
        setTodoId(todoItem.id)
        setTodolistName(todoItem.name)
        setTodolistDescription(todoItem.description)
        console.log("uuuu "+todoItem.name);
        console.log("status "+todoItem.status);
      
      }}
 
      >
        EDIT
      </Button>
      <Button 
      className='button button_red'
      onClick={async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
        console.log(todoItem.id);
       // deleteToDoList(todoItem.id);
        setChosenToDo(todoItem.id)
        setWarningToDo(!showWarningToDo);
      // setTimeout(()=>{window.location.reload();},100);
      }}
      >
        DELETE
      </Button>
           
    </div>
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
              <Input autoComplete='off' 
              id='name'
              name='name'
              maxLength={50} 
              defaultValue={todoItem.name}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTodolistName(e.target.value)
              }
              
               />
            </label>
          </div>
          <div className="field_container">
            <label htmlFor='description'>
              <div>description</div>
              <Input
                autoComplete='off'
                id='description'
                name='description'
                maxLength={200}
                defaultValue={todoItem.description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setTodolistDescription(e.target.value)
                }
              />
            </label>
          </div>
        </div>
        <div className="button_container">
        
          <Button
          className='button button_blue'
          onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            console.log(todolistName);
            RenameToDo()
            //putToDoList({id:todoItem.id, name: todolistName, description:todolistDescription, categoryId:location.state.id,status:false});
            console.log(todolistDescription)
            
            setTodoIdForEdit(null)
           // setTimeout(()=>{window.location.reload();},100);
          }}
          >
              EDIT
             
          </Button>
        </div>
      </div>
    );
  })}
  {showWarningToDo && (
                      <div id="myModal" className="modal">
                        <div className="modal-content">
                          <div>
                          <CloseCircleOutlined 
                          className='closeWarning'
                          onClick={() => setWarningToDo(!showWarningToDo)}
                          />
                      
                          <p className="warning-text">Are you sure you want to delete the todo item?</p>
                          <div className='warning'>
                          <button
                            className="button_red button-warning"
                            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                              showDeleteConfirm()
                            //  deleteToDoList(chosenToDO);
                              setWarningToDo(!showWarningToDo);
                            }}
                          >
                            {" "}
                            YES
                          </button>
                          <Button
                         
                            className="button_green button-warning"
                            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                              setWarningToDo(!showWarningToDo);
                            }}
                          >
                            {" "}
                            NO
                          </Button>
                          </div>
                          </div>
                        </div>
                      </div>
                    )}
  </div>
);
};