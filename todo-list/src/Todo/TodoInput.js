import styles from "./TodoInput.module.css";

export default function TodoInput() {
  return (
    <section className={styles.container}>
      <form className={styles.formContainer}>
        <input className={styles.input} placeholder="해야할 Todo" />
        <button className={styles.enter} type="submit">
          버튼
        </button>
      </form>
    </section>
  );
}
