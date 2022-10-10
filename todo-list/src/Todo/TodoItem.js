import styles from "./TodoItem.module.css";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";

export default function TodoItem(props) {
  return (
    <li className={styles.container}>
      <BsCheckCircle className={styles.checkIcon} />
      <span>{props.text}</span>
      <AiOutlineEdit className={styles.editIcon} />
      <RiDeleteBinLine className={styles.removeIcon} />
    </li>
  );
}
