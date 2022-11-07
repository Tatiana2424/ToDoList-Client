import React from 'react';
import CategoryModel from '../Models/CategoryModel';
import { useState, useEffect } from "react";
import { getCaregoty, postCategory } from '../Api/categoryApi';


export const CategoryPanel=()=> {

      const [category, setCategory]: [
        string,
        React.Dispatch<React.SetStateAction<string>>
      ] = useState<string>("");

  return (
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
                setCategory(e.target.value)
            }
            />
          </label>
        </div>
      </div>
      <div className="button_container">
        <button 
        className='button button_blue'
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            console.log(category);
            postCategory({ name: category});
            setTimeout(()=>{window.location.reload();},100);
          }}
        >
            ADD
        </button>
      </div>
    </div>
  );
};