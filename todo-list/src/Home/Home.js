import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import axios from "axios";

axios.defaults.withCredentials = "include";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.access_token) {
      navigate("../todo", { replace: true });
    }
  });

  function checkEmail(e) {
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    setEmail(e.target.value);

    if (!emailRegex.test(e.target.value)) {
      setEmailCheck(false);
    } else {
      setEmailCheck(true);
    }
  }

  function checkPassword(e) {
    const passwordRegex = /^[A-Za-z0-9]{8,20}$/;

    setPassword(e.target.value);

    if (!passwordRegex.test(e.target.value)) {
      setPasswordCheck(false);
    } else {
      setPasswordCheck(true);
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

      if (response.status === 201) {
        alert("회원가입이 완료되었습니다.");
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function signIn() {
    try {
      const response = await axios.post("/auth/signin", {
        email: email,
        password: password,
      });
      console.log(response);

      if (response.data.access_token) {
        localStorage.setItem("access_token", response.data.access_token);
      }
      if (response.status === 200) {
        navigate("../todo", { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
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
