import React from 'react';
import CategoryModel from '../Models/CategoryModel';
import { useState, useEffect } from "react";
import { deleteCategory, getCaregoty, postCategory, putCategory } from '../Api/categoryApi';
import { Link } from 'react-router-dom';
import { CategoryPanel } from './CategoryPanel';
import { Button, Input } from "antd";
import { CloseCircleOutlined } from '@ant-design/icons';

export const CategoryList = () => {
    const [categoty, setCategory]: [
        CategoryModel[],
        React.Dispatch<React.SetStateAction<CategoryModel[]>>
      ] = useState<CategoryModel[]>([]);
      useEffect((): void => {
        getCaregoty(setCategory);
      }, []);
      
      const [categoryIdForEdit, setCategoryIdForEdit] = React.useState<number | null>(null);
      const selectCategoryIdForEdit = (id: CategoryModel['id']) => {
        setCategoryIdForEdit(id);
      };  
      const [categoryName, setCategoryName]: [
        string,
        React.Dispatch<React.SetStateAction<string>>
      ] = useState<string>("");
      const [showWarning, setWarning] = useState(false);
      const[chosenCategory, setChosenCategory]: [
        number,
        React.Dispatch<React.SetStateAction<number>>
      ] = useState<number>(0);
return(
 <div>
    <CategoryPanel/>
    {categoty?.map((category1: CategoryModel) => {
       if(category1.id!=categoryIdForEdit)
       return (
        <div className="todo_item_container">
            <div>
                <div className="todo_item_title">  
                
                <Link 
                          to={"/todolist/" + category1.id}
                          className="title title"
                          state={{ id: category1.id }}
                        >
                           {category1.name}  
                        </Link>
                       
                </div>
            </div>
            <div className="todo_item_button_container">
                <Button 
                className='button button_orange'
                onClick={ (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                  selectCategoryIdForEdit(category1.id)
                   console.log(categoryName)
                   setCategoryName(category1.name)
                }}
                >
                  
                    EDIT
                </Button>
                <Button 
                className='button button_red'
                onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                    console.log(category1.id);
                    setWarning(!showWarning);
                    setChosenCategory(category1.id)
                   // deleteCategory(category1.id);
                    console.log("tt "+category1.id);
                  //  window.location.reload()
                 //  setTimeout(()=>{window.location.reload();},100);
                  }}
                >
                    DELETE
                 </Button>
                 
            </div>
        </div>
     );
     return(
      <div className="todo_panel_container">
      <div className="fields_container">
        <div className="field_container">
          <label htmlFor='name'>
            <div>Name</div>
            <Input
            id='name' 
            name='name'
            maxLength={100}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCategoryName(e.target.value)
            }
            defaultValue={category1.name}
           
          ></Input>
           
          </label>
        </div>
      </div>
      <div className="button_container">
        <Button 
        className='button button_blue'
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            console.log(categoryName);
            putCategory({id:category1.id, name: categoryName});
            setCategoryIdForEdit(null)
          //  window.location.reload()
           // setTimeout(()=>{window.location.reload();},100);
          }}
        >
            EDIT
        </Button>
      </div>
    </div>
     )
    })}
    {showWarning && (
                      <div id="myModal" className="modal">
                        <div className="modal-content">
                          <div>
                          <CloseCircleOutlined 
                          className='closeWarning'
                          onClick={() => setWarning(!showWarning)}
                          />
                      
                          <p className="warning-text">Are you sure you want to delete the category?</p>
                          <div className='warning'>
                          <Button
                            className="button_red button-warning"
                            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                             // console.log("yy "+category1.id);
                              deleteCategory(chosenCategory);
                              setWarning(!showWarning)
                            }}
                          >
                            {" "}
                            YES
                          </Button>
                          <Button
                         
                            className="button_green button-warning"
                            onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                               setWarning(!showWarning)
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


