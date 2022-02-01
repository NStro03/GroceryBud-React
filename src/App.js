import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [currentInput, setCurrentInput] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemCreatedCount, setItemCreatedCount] = useState(1);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Item submitted: " + currentInput);
    setItemList([...itemList, { text: currentInput, id: itemCreatedCount }])
    setItemCreatedCount(preVal => preVal+1);
    setCurrentInput("");
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
          <button>Submit</button>
        </div>
      </form>
      <List items={itemList} />
    </section>
  )
}

export default App
