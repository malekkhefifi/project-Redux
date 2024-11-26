// ListTask.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from './actions';
import Task from './Task';

const ListTask = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector((state) => state);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.isDone;
    if (filter === 'incomplete') return !task.isDone;
    return true; // 'all' filter
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(setFilter('all'))}>Toutes</button>
        <button onClick={() => dispatch(setFilter('completed'))}>Terminées</button>
        <button onClick={() => dispatch(setFilter('incomplete'))}>Non terminées</button>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
