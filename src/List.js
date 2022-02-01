import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
function List({ items, editItemAction, deleteItemAction }) {

  const listItems = items.map((item) => {
    return (
      <div className='grocery-item' key={item.id}>
        <p key={item.id}>{item.text}</p>
        <button onClick={() => editItemAction(item.id)}><FaEdit /></button>
        <button onClick={() => deleteItemAction(item.id)}><FaTrash /></button>
      </div>
    )

  })

  return (
    <div className='grocery-list'>{listItems}</div>
  )
}

export default List
