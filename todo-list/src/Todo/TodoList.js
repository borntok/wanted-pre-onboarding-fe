import styles from "./TodoList.module.css";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const arr = ["양치하기", "청소하기", "공부하기"];

  return (
    <section>
      <ol className={styles.olContainer}>
        {arr.map((todo, idx) => {
          return <TodoItem key={idx} text={todo} />;
        })}
      </ol>
    </section>
  );
}
