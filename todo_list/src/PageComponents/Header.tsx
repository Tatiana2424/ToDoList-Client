import React, { ReactNode } from 'react';



interface HeaderProps {
  todoTitle: React.ReactNode;
}
let title: string
export const Header:React.FC<HeaderProps>=({todoTitle})=> {
  return(
  <div className="header_container">
    <h1 className="header_title">
      {todoTitle}
    {/* ToDo List */}
      {/* <b>{todoCount}</b> task(s) */}
    </h1>
  </div>
  )
};