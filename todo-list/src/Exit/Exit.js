import styles from "./Exit.module.css";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Exit() {
  const navigate = useNavigate();

  function handleExit() {
    localStorage.clear("access_token");
    navigate("../", { replace: true });
  }

  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={handleExit}>
        <RiLogoutBoxLine className={styles.icon} /> Exit
      </button>
    </div>
  );
}
