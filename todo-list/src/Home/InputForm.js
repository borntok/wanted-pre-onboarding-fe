import styles from "./InputForm.module.css";

export default function InputForm() {
  function checkEmail(email) {
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    console.log(email.target.value, emailRegex.test(email.target.value));
  }

  return (
    <>
      <div>
        <input
          className={styles.input}
          type="email"
          placeholder="이메일을 입력해 주세요."
          onBlur={checkEmail}
        />
      </div>
      <div>
        <input
          className={styles.input}
          type="password"
          minLength="8"
          placeholder="비밀번호를 입력해 주세요."
          required
        />
      </div>
    </>
  );
}
