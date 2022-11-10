import React from 'react';
import CategoryModel from '../Models/CategoryModel';
import { useState, useEffect } from "react";
import { getCaregoty, postCategory } from '../Api/categoryApi';
import { Button, Input } from 'antd';


export const CategoryPanel=()=> {

      const [category, setCategory]: [
        string,
        React.Dispatch<React.SetStateAction<string>>
      ] = useState<string>("");

  return (
    <div>
    <div className="header_container">
    <h1 className="header_title">
      Category list 
    </h1>
  </div>
    <div className="todo_panel_container">
      <div className="fields_container">
        <div className="field_container">
          <label htmlFor='name'>
            <div>Name</div>
            <Input 
            autoComplete='off' 
            id='name' 
            name='name' 
            maxLength={100}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setCategory(e.target.value)
            }
            />
          </label>
        </div>
      </div>
      <div className="button_container">
        <Button 
        className='button button_blue'
        onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
            console.log(category);
            postCategory({ name: category});
          //  window.location.reload()
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