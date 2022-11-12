import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import "./CSS/style.css";
import { Header } from './PageComponents/Header';
import { TodoPanel} from './PageComponents/TodoPanel';
import { ToDoList} from './PageComponents/ToDoList';
import { CategoryPanel } from './PageComponents/CategoryPanel';
import { CategoryList } from './PageComponents/CategoryList';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import CategoryModel from './Models/CategoryModel';


function App() {

  return (
    <div className="app_container">
      <div className="container">
      <BrowserRouter>
       {/* <Header todoTitle={"Category List"}/> */}
         {/* <CategoryPanel/>
         <CategoryList/> */}
        
         <Routes>
          <Route path="/"element={<CategoryList/>} /> 
          <Route path="/todolist/:id" element={<ToDoList/>} /> 
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
