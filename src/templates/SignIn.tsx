import React, { useCallback, useState } from "react";
import {
  InputText,
  SecondButton,
  LinkContainerTop,
} from "../components/UIkit/index";
import { LinkContainer } from "../components/index";
import { signIn } from "../reducks/users/operations";
import { useDispatch } from "react-redux";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import styles from "../styles/auth/auth.module.scss";

const SignIn = () => {
  const [email, setEmail] = useState(""),
    [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const fillIn = email !== "" && password !== "";
  const addClass = fillIn ? styles.sign_button__clicked : styles.sign_button;
  const icon = <FiberManualRecordOutlinedIcon style={{ height: 20 }} />;

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

  return (
    <div className={styles.sign_container}>
      <LinkContainerTop label={"ログイン"} icons={icon} />
      <div className={styles.sign_box}>
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
          id={"password"}
          label={"パスワード"}
          fullWidth={true}
          onChange={inputPassword}
          type={"password"}
          value={password}
          width={"280px"}
        />
        <div className={addClass}>
          <SecondButton
            label={"サインイン"}
            fullWidth={true}
            onClick={() => dispatch(signIn(email, password))}
          />
        </div>
      </div>
      <LinkContainer
        isArr={false}
        label={"アカウント登録"}
        buttonLabel={"アカウント登録はこちら"}
        link={"/signup"}
        icons={icon}
      />
      <LinkContainer
        isArr={false}
        label={"パスワード再設定"}
        buttonLabel={"パスワードをお忘れの方はこちら"}
        link={"reset"}
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
  );
};

export default SignIn;
