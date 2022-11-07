import React from 'react';

// const DEFAULT_TODO = { name: '', description: '' };

// interface AddTodoPanelProps {
//   mode: 'add';
//   addTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
// }

// interface EditTodoPanelProps {
//   mode: 'edit';
//   editTodo: Omit<Todo, 'id' | 'checked'>;
//   changeTodo: ({ name, description }: Omit<Todo, 'id' | 'checked'>) => void;
// }

// type TodoPanelProps = AddTodoPanelProps | EditTodoPanelProps;

export const TodoPanel=()=> {
//   const isEdit = props.mode === 'edit';
//   const [todo, setTodo] = React.useState(isEdit ? props.editTodo : DEFAULT_TODO);

//   const onClick = () => {
//     if (isEdit) {
//       return props.changeTodo(todo);
//     }
//     props.addTodo(todo);
//     setTodo(DEFAULT_TODO);
//   };

//   const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const { value, name } = event.target;
//     setTodo({ ...todo, [name]: value });
//   };

  return (
    <div className="todo_panel_container">
      <div className="fields_container">
        <div className="field_container">
          <label htmlFor='name'>
            <div>name</div>
            <input autoComplete='off' id='name' name='name' />
          </label>
        </div>
        <div className="field_container">
          <label htmlFor='description'>
            <div>description</div>
            <input
              autoComplete='off'
              id='description'
             
              name='description'
            />
          </label>
        </div>
      </div>
      <div className="button_container">
        <button 
        className='button button_blue'
        
        >
            ADD
        </button>
      </div>
    </div>
  );
};