import React from 'react';
import CategoryModel from '../Models/CategoryModel';
import { useState, useEffect } from "react";
import { deleteCategory, getCaregoty, postCategory, putCategory } from '../Api/categoryApi';
import { Link } from 'react-router-dom';
import { CategoryPanel } from './CategoryPanel';

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
return(
 <div>
    <CategoryPanel/>
    {categoty?.map((category1) => {
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
                <button 
                className='button button_orange'
                onClick={async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                  selectCategoryIdForEdit(category1.id)
                
                }}
                >
                  
                    EDIT
                </button>
                <button 
                className='button button_red'
                onClick={async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                    console.log(category1.id);
                    deleteCategory(category1.id);
                  //  window.location.reload()
                 //  setTimeout(()=>{window.location.reload();},100);
                  }}
                >
                    DELETE
                 </button>
            </div>
        </div>
     );
     return(
      <div className="todo_panel_container">
      <div className="fields_container">
        <div className="field_container">
          <label htmlFor='name'>
            <div>Name</div>
            <input 
            autoComplete='off' 
            id='name' 
            name='name' 
           
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCategoryName(e.target.value)
            }
            />
          </label>
        </div>
      </div>
      <div className="button_container">
        <button 
        className='button button_blue'
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            console.log(categoryName);
            putCategory(category1.id,{id:category1.id, name: categoryName});
            setCategoryIdForEdit(null)
          //  window.location.reload()
           // setTimeout(()=>{window.location.reload();},100);
          }}
        >
            EDIT
        </button>
      </div>
    </div>
     )
    })}
  </div>
);
};


