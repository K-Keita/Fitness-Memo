import React, { FC, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  InputText,
  SecondButton,
  LinkContainerTop,
} from "../components/UIkit/index";
import FiberManualRecordOutlinedIcon from "@material-ui/icons/FiberManualRecordOutlined";
import { LinkContainer } from "../components/index";
import { anonymousSignIn } from "../reducks/users/operations";
import styles from "../styles/auth/auth.module.scss";

const TestUserSign: FC = () => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const fillIn = username !== "";
  const addClass = fillIn ? styles.sign_button__clicked : styles.sign_button;
  const icon = <FiberManualRecordOutlinedIcon style={{ height: 20 }} />;

  const inputUsername = useCallback(
    (event) => {
      setUsername(event.target.value);
    },
    [setUsername]
  );

  return (
    <>
      <div className={styles.sign_container}>
        <LinkContainerTop label={"テストユーザーログイン"} icons={icon} />
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
          <div className={addClass}>
            <SecondButton
              label={"テストユーザーでログインする"}
              fullWidth={true}
              onClick={() => dispatch(anonymousSignIn(username))}
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
          label={"ログイン"}
          buttonLabel={"アカウントをお持ちの方はこちら"}
          link={"/signin"}
          icons={icon}
        />
      </div>
    </>
  );
};

export default TestUserSign;
