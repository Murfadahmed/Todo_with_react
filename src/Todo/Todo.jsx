import React, { useState } from "react";
import "./Todo.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { FcTodoList } from "react-icons/fc";
import { RiEditCircleFill, RiDeleteBinFill } from "react-icons/ri";

export default function Todo() {
  const [input, setInput] = useState("");
  const [des, setDes] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId,setEditId] = useState(0)

  const HandleSubmit = (e) => {
    e.preventDefault();
    if(editId)
    {
     const EditTodo = todos.find((item) => item.id === editId);

const updatedArray = todos.map((t) =>
  t.id === editId ? { id: t.id, input, des } : t
);

setTodos(updatedArray);
setInput('');
setEditId(0);

    }

    if (input && des !== "") {
      setTodos([{ id: `${input}-${Date.now()}`, input, des }, ...todos]);
    }
    setDes("");
    setInput("");
    console.log(todos[0].id);
  };
  const HandleDelete = (ID) => {
    const deleteArray = todos.filter((item) => item.id !== ID);
    setTodos([...deleteArray])
    // console.log(deleteArray);
  };

  const HandleEdit = (ID) =>{
    const edit = todos.find((item)=> item.id == ID)
    setInput(edit.input)
    setDes(edit.des)
    setEditId(ID)
  }

  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="head">
            <h1>Todo App </h1>
          </div>
          <div className="input">
            <form className="form" onSubmit={HandleSubmit}>
              <input
                placeholder="Add your goal--"
                className="work"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <textarea
                name="des"
                className="description"
                cols="13"
                rows="2"
                placeholder="description..."
                value={des}
                onChange={(e) => setDes(e.target.value)}
              ></textarea>

              <button className="addBtn" type="submit">
              {editId?(<RiEditCircleFill/>):(<BsPlusCircleFill />)}
              </button>
            </form>
          </div>
        </div>
        <div className="todosItems">
          {todos.map((item, index) => (
            <div key={todos[index].id} className="singleTodo">
              <div className="todoBtn">
                <button
                  className="delete"
                  onClick={() => HandleDelete(todos[index].id)}
                >
                  <RiDeleteBinFill />
                </button>
                <button 
                className="edit"
                onClick={()=>HandleEdit(todos[index].id)}
                >
                 <RiEditCircleFill/>
                  
                </button>
              </div>
              <p className="text">{item.input}</p>
              <p className="des">{item.des}</p>
            </div>
          ))}
        </div>
        <div className="footer">
          <p className="footerText">
            you have {todos.length}
            <span>
              <FcTodoList />
            </span>{" "}
            in your list
          </p>
        </div>
      </div>
    </>
  );
}
