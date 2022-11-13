import React, { Dispatch, SetStateAction, useRef } from 'react';
import CategoryModel from '../Models/CategoryModel';
import { useState, useEffect } from "react";
import { getCategory, postCategory } from '../Api/categoryApi';
import { Button, Input } from 'antd';
import { Header } from './Header';

type Props = {
  setCategories: React.Dispatch<React.SetStateAction<CategoryModel[]>>
};

export const CategoryPanel=(props: Props)=> {

  // const [categories, setCategories]: [
  //   CategoryModel[],
  //   React.Dispatch<React.SetStateAction<CategoryModel[]>>
  // ] = useState<CategoryModel[]>([]);
  // useEffect((): void => {
  //   getCategory().then((resp): void => {
  //     setCategories(resp.data);
  //   });
  // }, []);

  const [category, setCategory]: [
    string,
    React.Dispatch<React.SetStateAction<string>>
  ] = useState<string>("");

  const Add = (e: React.MouseEvent<HTMLElement, MouseEvent>): void => {
    postCategory({ name: category })
      .then(function (response): void {
        getCategory().then((resp): void => {
          props.setCategories(resp.data);
         // console.log(resp.data);
        });
      })
      .catch(function (error): void {
        console.log(error);
      });
  };
  
  return (
    <div>
    <Header todoTitle={'Category List'}/>
    <div className="todo_panel_container">
      <div className="fields_container">
        <div className="field_container">
          <label htmlFor='name'>
            <div>Name</div>
            <Input 
            autoComplete='off' 
            id='name' 
            name='name' 
            value={category}
            maxLength={100}
            placeholder={"add new category"}
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
           // postCategory({ name: category});
           Add(e)
           setCategory('');
           
           console.log(category);
          //  window.location.reload()
           // setTimeout(()=>{window.location.reload();},100)
          }}
        >
            ADD
        </Button>
      </div>
    </div>
    </div>
  );
};