import { useState } from "react";

function List() {
  const [list, setList] = useState([]);
  const [count, setCount] = useState(1);

  function additem() {
    const itemname = 'Item' + count;
    setList((previousState) => {
      return [...previousState, itemname];
    });
    setCount((previousState) => {
      return previousState + 1;
    });
  }

  console.log('current state',list)

  return (
    <>
      <h1>List</h1>
      <button onClick={additem}>Add item</button>
      <ul>
        {
          list.map((el, index) => <li key={index}>{el}</li>)
        }
      </ul>
    </>
  );
}

export default List;

