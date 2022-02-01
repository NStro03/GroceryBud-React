import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemCreatedCount, setItemCreatedCount] = useState(1);
  // Editing States
  const [editMode, setEditMode] = useState(false);
  const [item2EditId, setItem2EditId] = useState(null);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!editMode) {
      console.log("Item submitted: " + currentInput);
      setItemList([...itemList, { text: currentInput, id: itemCreatedCount }])
      setItemCreatedCount(preVal => preVal + 1);
    }
    else {
      const newItemList = itemList.map((item) => {
        if (item.id === item2EditId) {
          return { ...item, text: currentInput }
        }
        return item;
      })
      setItemList(newItemList);
      setEditMode(false);
      setItem2EditId(null);
    }
    setCurrentInput("");
  }

  const editItemWithId = (id) => {
    setEditMode(true);
    const item2Edit = itemList.find((item) => item.id === id);
    setItem2EditId(item2Edit.id);
    setCurrentInput(item2Edit.text);
  }

  const deleteItemWithId = (id) => {
    const newItemList = itemList.filter((item) => item.id !== id);
    setItemList(newItemList);
  }

  return (
    <section className='section-center'>
      <h2>Grocery Bud</h2>
      <form className='form' onSubmit={submitHandler}>
        <div className='form-control'>
          <input id='itemToAdd'
            type='text'
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
          />
          <button>{editMode ? "Edit Item" : "Add Item"}</button>
        </div>
      </form>

      <div className='grocery-container'>
        <List items={itemList} editItemAction={editItemWithId} deleteItemAction={deleteItemWithId} />
      </div>

    </section>
  )
}

export default App
