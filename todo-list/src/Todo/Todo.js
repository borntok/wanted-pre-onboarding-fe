import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Divider from "./Divier";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Todo() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.access_token) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <main>
      <TodoInput />
      <Divider />
      <TodoList />
    </main>
  );
}
