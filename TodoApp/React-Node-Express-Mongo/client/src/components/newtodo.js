import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTodo = ({ todo, onDelete, onRestore }) => {
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(todo.title);

  const handleDelete = () => {
    onDelete(todo._id);
  };

  const handleRestore = () => {
    onRestore(todo);
  };

  const handleUpdate = () => {
    // Assuming onUpdate is being passed if editing is implemented
  };

  return (
    <div className={`todo ${todo.completed ? 'completed' : ''}`}>
      <p>{todo.title}</p>
      
        <>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleRestore}>Restore</button>
        </>
    
    </div>
  );
};


export default NewTodo;
