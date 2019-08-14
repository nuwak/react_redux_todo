import React from 'react';
import PropTypes from 'prop-types';

import './todo-item.css';

const ToDoItem = ({ text, isCompleted, id, removeTask, completeTask }) => (
  <li className="todo-item">
    <i onClick={() => completeTask(id)} className={isCompleted ? 'mark far fa-check-circle' : 'mark far fa-circle'} />
    <span className={isCompleted ? 'completed text' : 'text'}>{text}</span>
    <i onClick={() => removeTask(id)} className="fas fa-times" />
  </li>
);

ToDoItem.propTypes = {
  text: PropTypes.string,
  isCompleted: PropTypes.bool,
  id: PropTypes.number,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func,
}

ToDoItem.defaultProps = {
  text: '',
  isCompleted: false,
  id: 0,
  removeTask: () => {},
  completeTask: () => {},
}

export default ToDoItem;
