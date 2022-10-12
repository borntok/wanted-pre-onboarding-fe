import styles from "./TodoItem.module.css";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";

export default function TodoItem(props) {
  function handleToggleClick() {
    props.onToggleClick(props.id);
  }

  return (
    <li className={styles.container}>
      <BsCheckCircle
        className={[
          styles.checkIcon,
          `${
            props.isCompleted
              ? styles.checkedCircleIcon
              : styles.unCheckedCircleIcon
          }`,
        ].join(" ")}
        onClick={handleToggleClick}
      />
      <span className={props.isCompleted ? styles.lineThrow : ""}>
        {props.text}
      </span>
      <AiOutlineEdit className={styles.editIcon} />
      <RiDeleteBinLine className={styles.removeIcon} />
    </li>
  );
}
