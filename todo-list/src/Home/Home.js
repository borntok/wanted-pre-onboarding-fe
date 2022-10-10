import styles from "./Home.module.css";
import InputForm from "./InputForm";

export default function Home() {
  function signUp(e) {
    e.preventDefault();
    console.log("회원가입");
  }

  function signIn(e) {
    e.preventDefault();
    console.log("로그인");
  }

  return (
    <main>
      <form className={styles.formContainer}>
        <div className={styles.inputForm}>
          <InputForm />
        </div>
        <button onClick={signUp} className={styles.button}>
          회원가입
        </button>
        <button onClick={signIn} className={styles.button}>
          로그인
        </button>
      </form>
    </main>
  );
}
