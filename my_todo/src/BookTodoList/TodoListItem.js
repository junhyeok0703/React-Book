import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
  MdCheckBox,
} from 'react-icons/md';
import './TodoListItem.scss';
import cn from 'classnames';
const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, cheked } = todo;

  return (
    <div className="TodoListItem">
      <div className={cn('checkbox', { cheked })} onClick={() => onToggle(id)}>
        {cheked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}

        <div className="text">{text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default TodoListItem;
