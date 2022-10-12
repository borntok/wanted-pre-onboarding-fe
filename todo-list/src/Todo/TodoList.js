import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem";

export default function TodoList(props) {
  return (
    <section>
      <ol className={styles.olContainer}>
        {props.todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              text={todo.todo}
              isChecked={todo.isCompleted}
            />
          );
        })}
      </ol>
    </section>
  );
}
