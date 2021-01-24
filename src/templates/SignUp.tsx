import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import {
  InputText,
  SecondButton,
  LinkContainerTop,
} from "../components/UIkit/index";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import { LinkContainer } from "../components/index";
import { signUp } from "../reducks/users/operations";
import styles from "../styles/auth/auth.module.scss";

const SignUp = () => {
  const [username, setUsername] = useState(""),
    [email, setEmail] = useState(""),
    [password, setPassword] = useState(""),
    [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  const fillIn =
    username !== "" &&
    email !== "" &&
    password !== "" &&
    confirmPassword !== "";
  const addClass = fillIn ? styles.sign_button__clicked : styles.sign_button;
  const icon = <FiberManualRecordOutlinedIcon style={{ height: 20 }} />;

  const inputUsername = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );
  const inputEmail = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [setEmail]
  );
  const inputPassword = useCallback(
    (event) => {
      setPassword(event.target.value);
    },
    [setPassword]
  );
  const inputConfirmPassword = useCallback(
    (event) => {
      setConfirmPassword(event.target.value);
    },
    [setConfirmPassword]
  );

  return (
    <>
      <div className={styles.sign_container}>
        <LinkContainerTop label={"アカウント登録"} icons={icon} />
        <div className={styles.sign_box}>
          <InputText
            id={"username"}
            label={"ユーザー名"}
            fullWidth={true}
            onChange={inputUsername}
            type={"text"}
            value={username}
            width={"280px"}
          />
          <InputText
            id={"email"}
            label={"メールアドレス"}
            fullWidth={true}
            onChange={inputEmail}
            type={"email"}
            value={email}
            width={"280px"}
          />
          <InputText
            id={password}
            label={"パスワード"}
            fullWidth={true}
            onChange={inputPassword}
            type={"password"}
            value={password}
            width={"280px"}
          />
          <InputText
            id={"confirmPassword"}
            label={"パスワード(再確認)"}
            fullWidth={true}
            onChange={inputConfirmPassword}
            type={"password"}
            value={confirmPassword}
            width={"280px"}
          />
          <div className={addClass}>
            <SecondButton
              label={"アカウント登録"}
              fullWidth={true}
              onClick={() =>
                dispatch(signUp(username, email, password, confirmPassword))
              }
            />
          </div>
        </div>
        <LinkContainer
          isArr={false}
          label={"ログイン"}
          buttonLabel={"アカウントをお持ちの方はこちら"}
          link={"/signin"}
          icons={icon}
        />
        <LinkContainer
          isArr={false}
          label={"テストログイン"}
          buttonLabel={"テストユーザーでログインする"}
          icons={icon}
          link={"/signin/test"}
        />
      </div>
    </>
  );
};

export default SignUp;
