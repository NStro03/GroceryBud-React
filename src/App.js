import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

let itemCreatedCount = 1;
function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [itemList, setItemList] = useState(getSavedList());
  // Editing States
  const [editMode, setEditMode] = useState(false);
  const [item2EditId, setItem2EditId] = useState(null);
  // Alert State
  const [alert, setAlert] = useState({ text: "", type: null, isShowing: false });
  // const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    localStorage.setItem('itemList', JSON.stringify(itemList));
  }, [itemList]);

  function getSavedList() {
    let savedlist = localStorage.getItem("itemList")
    if (savedlist) {
      return JSON.parse(savedlist)
    }
    return []
  }
  const submitHandler = (e) => {
    e.preventDefault();
    if (!currentInput) {
      showAlert("Please fill the item name", "danger")
    }
    else if (!editMode) {
      console.log("Item submitted: " + currentInput);
      setItemList([...itemList, { text: currentInput, id: itemCreatedCount }])
      itemCreatedCount++;
      showAlert("Item Added", "success");
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
      showAlert("Item Updated", "success");
    }
    setCurrentInput("");
    e.target.focus();
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
    showAlert("Item deleted", "danger")
  }

  const showAlert = (text, type) => {
    setAlert({ text: text, type: type, isShowing: true })
  }

  const hideAlert = () => {
    setAlert(preVal => ({ ...preVal, isShowing: false }))
  }

  const clearItemsList = () => {
    setItemList([]);
    itemCreatedCount = 1;
    showAlert("List is now Empty", "danger");
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={submitHandler}>
        {alert.isShowing && <Alert data={alert} hideAlertAction={hideAlert} />}
        <h3>Grocery Bud</h3>
        <div className='form-control'>
          <input id='itemToAdd'
            type='text'
            className='grocery'
            placeholder='eg: Wheat'
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
          />
          <button type='submit' className='submit-btn'>{editMode ? "Edit Item" : "Add Item"}</button>
        </div>
      </form>
      {itemList.length > 0 && (
        <div className='grocery-container'>
          <List items={itemList} editItemAction={editItemWithId} deleteItemAction={deleteItemWithId} />
          <button className='clear-btn' onClick={() => clearItemsList()}>Clear all items.</button>
        </div>
      )}

    </section>
  )
}

export default App
