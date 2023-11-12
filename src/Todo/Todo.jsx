import React, { useState } from "react";
import "./Todo.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { FcTodoList } from "react-icons/fc";
import { RiEditCircleFill, RiDeleteBinFill } from "react-icons/ri";

export default function Todo() {
  const [input, setInput] = useState("");
  const [des, setDes] = useState("");
  const [todos, setTodos] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault();

    if (input || des !== "") {
      setTodos([{ id: `${input}-${Date.now()}`, input, des }, ...todos]);
      console.log(todos);
    }
    setDes("");
    setInput("");
  };

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
                <BsPlusCircleFill />
              </button>
            </form>
          </div>
        </div>
        <div className="todosItems">
          {todos.map((item, index) => (
            <div key={index} className="singleTodo">
              <div className="todoBtn">
                <button className="delete">
                  <RiDeleteBinFill />
                </button>
                <button className="edit">
                  <RiEditCircleFill />
                </button>
              </div>
              <p className="text">{item.input}</p>
              <p className="des">{item.des}</p>
            </div>
          ))}
        </div>
        <div className="footer">
          <p className="footerText">
            you have 15{" "}
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
