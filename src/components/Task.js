import React from 'react';

function Task({ task, onDeleteTask }) {
  const handleDelete = () => {
    if (onDeleteTask && typeof onDeleteTask === 'function') {
      onDeleteTask(task.id);
    }
  };

  return (
    <div className="task">
      {task && task.text && <p>{task.text}</p>}
      {task && task.category && <p>Category: {task.category}</p>}
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Task;
