import { useState } from "react";
import styles from "./Home.module.css";
import axios from "axios";
import { TODO_API } from "../api";

axios.defaults.withCredentials = "include";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);

  function checkEmail(e) {
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    setEmail(e.target.value);

    if (!emailRegex.test(e.target.value)) {
      setEmailCheck(false);
      console.log("잘못된 이메일");
    } else {
      setEmailCheck(true);
      console.log("굿");
    }
  }

  function checkPassword(e) {
    const passwordRegex = /^[A-Za-z0-9]{8,20}$/;

    setPassword(e.target.value);

    if (!passwordRegex.test(e.target.value)) {
      setPasswordCheck(false);
      console.log("잘못된 비밀번호", password);
    } else {
      setPasswordCheck(true);
      console.log("비밀번호 486", password);
    }
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  async function signUp() {
    try {
      const response = await axios.post("/auth/signup", {
        email: email,
        password: password,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log("회원가입");
  }

  function signIn() {
    console.log("로그인");
  }

  return (
    <main>
      <form className={styles.formContainer} onSubmit={onSubmit}>
        <div className={styles.inputForm}>
          <div>
            <input
              className={styles.input}
              type="email"
              placeholder="이메일을 입력해 주세요."
              onChange={checkEmail}
              required
            />
          </div>
          <div>
            <input
              className={styles.input}
              type="password"
              minLength="8"
              placeholder="비밀번호를 입력해 주세요."
              onChange={checkPassword}
              required
            />
          </div>
        </div>
        <button
          className={styles.button}
          disabled={!emailCheck || !passwordCheck}
          onClick={signUp}
        >
          회원가입
        </button>
        <button
          className={styles.button}
          disabled={!emailCheck || !passwordCheck}
          onClick={signIn}
        >
          로그인
        </button>
      </form>
    </main>
  );
}
