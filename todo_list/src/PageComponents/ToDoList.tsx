import React from 'react';


// interface TodoItemProps {
//   todo: Todo;
//   deleteTodo: (id: Todo['id']) => void;
//   checkTodo: (id: Todo['id']) => void;
//   selectTodoIdForEdit: (id: Todo['id']) => void;
// }

export const ToDoList = ({}) => (
  <div className="todo_item_container">
    <div>
      <div
     
       
        // onClick={() => checkTodo(todo.id)}
        className="todo_item_title"
      >
        {/* {todo.name} */}
        Task_1
      </div>
      <div aria-hidden 
    //   onClick={() => checkTodo(todo.id)} className={styles.todo_item_description}
      >
        {/* {todo.description} */}
        xfjf gfxjxgj xgjfxjx
      </div>
    </div>
    <div className="todo_item_button_container">
      <button className='button button_orange'>
        EDIT
      </button>
      <button className='button button_red'>
        DELETE
      </button>
    </div>
  </div>
);