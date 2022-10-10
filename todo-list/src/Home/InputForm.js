import styles from "./InputForm.module.css";

export default function InputForm() {
  return (
    <>
      <div>
        <input className={styles.input} placeholder="이메일을 입력해 주세요." />
      </div>
      <div>
        <input
          className={styles.input}
          placeholder="비밀번호를 입력해 주세요."
        />
      </div>
    </>
  );
}
