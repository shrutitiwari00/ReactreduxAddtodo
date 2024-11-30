import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from '../App/todoslice';
import '../App.css'

const Addtodo = () => {
  const [input, setinput] = useState("");
  const dispatch = useDispatch();

  const handlesubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      dispatch(addtodo(input));
      setinput("");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Addtodo;
