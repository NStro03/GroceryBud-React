import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
function List({items}){

  const listItems = items.map((item) => {
    return <div key={item.id}>{item.text}</div>
  })

  return (
    <div>{listItems}</div>
    
  )
}

export default List
