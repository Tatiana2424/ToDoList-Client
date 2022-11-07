import React from 'react';
import CategoryModel from '../Models/CategoryModel';
import { useState, useEffect } from "react";
import { deleteCategory, getCaregoty, postCategory } from '../Api/categoryApi';
import { Link } from 'react-router-dom';

export const CategoryList = () => {
    const [categoty, setCategory]: [
        CategoryModel[],
        React.Dispatch<React.SetStateAction<CategoryModel[]>>
      ] = useState<CategoryModel[]>([]);
      useEffect((): void => {
        getCaregoty(setCategory);
      }, []);
  
return(
 <div>
    {categoty?.map((category1) => {
        return (
        <div className="todo_item_container">
            <div>
                <div className="todo_item_title">  
                
                {/* <Link
                          to={"/todolist/" + category1.id}
                          className="title"
                         // state={{ id: category1.id }}
                        >
                          
                        </Link> */}
                        {category1.name}  
                </div>
            </div>
            <div className="todo_item_button_container">
                <button className='button button_orange'>
                    EDIT
                </button>
                <button 
                className='button button_red'
                onClick={async (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                    console.log(category1.id);
                    deleteCategory(category1.id);
                   setTimeout(()=>{window.location.reload();},100);
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


