import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
function List({ items, editItemAction, deleteItemAction }) {
  console.log(items)
  const listItems = items.map((item) => {
    return (
      <div className='grocery-item' key={item.id}>
        <p className='title'>{item.text}</p>
        <div className='btn-container'>
          <button className='edit-btn' onClick={() => editItemAction(item.id)}><FaEdit /></button>
          <button className='delete-btn' onClick={() => deleteItemAction(item.id)}><FaTrash /></button>
        </div>

      </div>
    )

  })

  return (
    <div className='grocery-list'>{listItems}</div>
  )
}

export default List
