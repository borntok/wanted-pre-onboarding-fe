import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Divider from "./Divier";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Exit from "../Exit/Exit";

export default function Todo() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.access_token) {
      navigate("../", { replace: true });
    }
  });

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.access_token) {
      getTodos();
    }
  }, [todos]);

  function handleTextChange(text) {
    setText(text);
  }

  async function createTodo() {
    let data = JSON.stringify({
      todo: text,
    });
    const response = await axios.post("/api/todos", data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
    console.log(response);
  }

  async function getTodos() {
    const response = await axios.get("/api/todos", {
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });

    const newTodos = response.data;
    setTodos(newTodos);
  }

  async function handleSubmit() {
    createTodo();
    getTodos();
    setText("");
  }

  function handleToggle(id) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      console.log(todo.isCompleted);
      return todo;
    });
    setTodos(newTodos);
  }

  async function handleRemove(id) {
    const response = await axios.delete(`/api/todos/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });

    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(newTodos);
  }

  async function handleEditEnter(id, text, isCompleted) {
    let data = JSON.stringify({
      todo: text,
      isCompleted: isCompleted,
    });

    const response = await axios.put(`/api/todos/${id}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.access_token}`,
      },
    });
  }

  return (
    <main>
      <TodoInput
        text={text}
        onTextChange={handleTextChange}
        onSubmit={handleSubmit}
      />
      {/* <Divider /> */}
      <TodoList
        todos={todos}
        onToggleClick={handleToggle}
        onRemoveClick={handleRemove}
        onEditEnterClick={handleEditEnter}
      />
      <Divider />
      <Exit />
    </main>
  );
}
