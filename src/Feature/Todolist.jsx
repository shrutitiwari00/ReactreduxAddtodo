import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removetodo, updatetodo } from '../App/todoslice';
import '../App.css'

const Todolist = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [editId, setEditid] = useState(null);
  const [editText, setEdittext] = useState("");

  const handleUpdate = (id, text) => {
    setEditid(id);
    setEdittext(text);
  };

  const handleSave = () => {
    if (editText.trim() !== "") {
      dispatch(updatetodo({ id: editId, text: editText }));
      setEditid(null);
      setEdittext("");
    }
  };

  return (
    <div className="container">
      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {editId === item.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEdittext(e.target.value)}
                />
                <button className="edit-button" onClick={handleSave}>
                  Save
                </button>
                <button onClick={() => setEditid(null)}>Cancel</button>
              </>
            ) : (
              <>
                <h1>{item.text}</h1>
                <button
                  className="edit-button"
                  onClick={() => handleUpdate(item.id, item.text)}
                >
                  Update
                </button>
                <button onClick={() => dispatch(removetodo(item.id))}>X</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
