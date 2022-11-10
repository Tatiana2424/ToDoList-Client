import React from 'react';


interface HeaderProps {
  todoTitle: string;
}
let title: string
export const Header=() => (
  <div className="header_container">
    <h1 className="header_title">
      ToDo List
      {/* <b>{todoCount}</b> task(s) */}
    </h1>
  </div>
);