// reducers.js
import { ADD_TASK, TOGGLE_TASK, EDIT_TASK, DELETE_TASK, SET_FILTER } from './actions';

const initialState = {
  tasks: [],
  filter: 'all',  // Valeurs possibles : 'all', 'completed', 'incomplete'
};

// Reducer pour les tâches
export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: Date.now(),  // Utilisation de Date.now pour un id unique
        description: action.payload.description,
        isDone: false
      };
      return {
        ...state,
        tasks: [...state.tasks, newTask]
      };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
        )
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task => 
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        )
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload.id)
      };

    case SET_FILTER:
      return {
        ...state,
        filter: action.payload.filter
      };

    default:
      return state;
  }
};
