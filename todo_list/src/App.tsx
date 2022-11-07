import React from 'react';
import logo from './logo.svg';
import './App.css';
import "./CSS/style.css";
import { Header } from './PageComponents/Header';
import { TodoPanel} from './PageComponents/TodoPanel';
import { ToDoList} from './PageComponents/ToDoList';
import { CategoryPanel } from './PageComponents/CategoryPanel';
import { CategoryList } from './PageComponents/CategoryList';
import { BrowserRouter, Route,Routes } from 'react-router-dom';



function App() {
  return (
    <div className="app_container">
      <div className="container">
      
        <Header todoCount={2}/>
         <CategoryPanel/>
         <CategoryList/>
         <BrowserRouter>
         <Routes>
          <Route path="/services/:id" element={<ToDoList/>} /> 
        </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
