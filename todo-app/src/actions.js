// actions.js
export const ADD_TASK = 'ADD_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const SET_FILTER = 'SET_FILTER';

// Action pour ajouter une tâche
export const addTask = (description) => ({
  type: ADD_TASK,
  payload: { description }
});

// Action pour marquer une tâche comme terminée
export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: { id }
});

// Action pour éditer une tâche
export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description }
});

// Action pour supprimer une tâche
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: { id }
});

// Action pour filtrer les tâches
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: { filter }
});

