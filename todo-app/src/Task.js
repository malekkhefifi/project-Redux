// Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask, deleteTask } from './actions';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    dispatch(editTask(task.id, newDescription));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div>
      <div style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
        {isEditing ? (
          <input 
            type="text" 
            value={newDescription} 
            onChange={(e) => setNewDescription(e.target.value)} 
          />
        ) : (
          <span>{task.description}</span>
        )}
      </div>
      <button onClick={handleToggle}>{task.isDone ? 'Marquer comme non fait' : 'Marquer comme fait'}</button>
      <button onClick={handleDelete}>Supprimer</button>
      {isEditing ? (
        <button onClick={handleEdit}>Sauvegarder</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Modifier</button>
      )}
    </div>
  );
};

export default Task;
