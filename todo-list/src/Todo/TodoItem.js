import styles from "./TodoItem.module.css";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { AiOutlineEnter } from "react-icons/ai";
import { useState } from "react";

export default function TodoItem(props) {
  const [editing, setEditing] = useState(false);
  const [editText, setEditText] = useState(props.text);

  function handleToggleClick() {
    props.onToggleClick(props.id);
  }

  function handleRemoveClick() {
    props.onRemoveClick(props.id);
  }

  function handleEditClick() {
    setEditing(true);
  }

  function handleEditEnterClick(e) {
    e.preventDefault();
    props.onEditEnterClick(props.id, editText, props.isCompleted);
    setEditing(false);
  }

  function handleEditTextChange(e) {
    setEditText(e.target.value);
  }

  function handleEditCancel() {
    setEditing(false);
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
      {editing ? (
        <>
          <form className={styles.editForm}>
            <input
              className={[
                styles.input,
                `${props.isCompleted ? styles.lineThrow : ""}`,
              ].join(" ")}
              value={editText}
              onChange={handleEditTextChange}
            />
            <AiOutlineEnter
              onClick={handleEditEnterClick}
              className={styles.editIcon}
            />
          </form>
          <MdOutlineCancel
            onClick={handleEditCancel}
            className={styles.removeIcon}
          />
        </>
      ) : (
        <>
          <span
            className={[
              styles.item,
              `${props.isCompleted ? styles.lineThrow : ""}`,
            ].join(" ")}
          >
            {editText}
          </span>
          <AiOutlineEdit
            className={styles.editIcon}
            onClick={handleEditClick}
          />
          <RiDeleteBinLine
            className={styles.removeIcon}
            onClick={handleRemoveClick}
          />
        </>
      )}
    </li>
  );
}
