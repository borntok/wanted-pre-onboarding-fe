import styles from "./TodoInput.module.css";
import { AiOutlineEnter } from "react-icons/ai";

export default function TodoInput(props) {
  function handleInputChange(e) {
    props.onTextChange(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit();
  }

  return (
    <section className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          placeholder="해야할 Todo"
          value={props.text || ""}
          onChange={handleInputChange}
        />
        <button className={styles.enter} type="submit">
          <AiOutlineEnter />
        </button>
      </form>
    </section>
  );
}
