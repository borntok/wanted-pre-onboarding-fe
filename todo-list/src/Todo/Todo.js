import Divider from "./Divier";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Todo() {
  return (
    <main>
      <TodoInput />
      <Divider />
      <TodoList />
    </main>
  );
}
