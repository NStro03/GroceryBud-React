import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
function List({ items, editItem }) {

  const listItems = items.map((item) => {
    return (
      <div className='grocery-item'>
        <p key={item.id}>{item.text}</p>
        <button onClick={() => editItem(item.id)}><FaEdit /></button>
      </div>
    )

  })

  return (
    <div className='grocery-list'>{listItems}</div>
  )
}

export default List
