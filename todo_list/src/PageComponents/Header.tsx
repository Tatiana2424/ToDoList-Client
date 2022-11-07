import React from 'react';


interface HeaderProps {
  todoCount: number;
}

export const Header: React.FC<HeaderProps> = ({ todoCount }) => (
  <div className="header_container">
    <h1 className="header_title">
      Todo list 
      {/* <b>{todoCount}</b> task(s) */}
    </h1>
  </div>
);