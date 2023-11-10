import React from "react";
import "./Todo.css";

export default function Todo() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="head">
            <h1>Todo App</h1>
          </div>
          <div className="input">
            <form className="form">
              <input placeholder='Add your goal--' className="work" type="text" />
              <textarea
                name="des"
                className="description"
                cols="13"
                rows="3"
                placeholder="description..."
              ></textarea>

              <button className="addBtn" type="submit">
                Add work
              </button>
            </form>
          </div>
        </div>
        <div className="todosItems">
          <div className="singleTodo">
           <div className="todoBtn">
           <button className="delete">
              delete
            </button>
            <button className="edit">
              Edit
            </button>
           </div>
            <p className="text">
              dahi lana hai
            </p>
            <p className="des">
              adha kilo bagere pani or malai wala
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
