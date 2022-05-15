import React from 'react'
import { ItemProp } from '../interfaces/Items'

interface TodoItemProp {
  item: ItemProp
  handleDelete: (id: number) => void
  handleCheck: (id: number) => void
}

const TodoItem: React.FC<TodoItemProp> = ({ item, handleDelete, handleCheck }) => {
  return (
    <div className="item">
      <input type="checkbox" onChange={() => { handleCheck(item.id); handleDelete(item.id) }} />
      <label htmlFor=""
        onClick={() => handleDelete(item.id)}>
        {item.name}
      </label>
    </div>
  )
}

export default TodoItem