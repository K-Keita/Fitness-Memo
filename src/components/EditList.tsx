import React, { FC, ChangeEvent, useCallback, useEffect, useState } from "react";
import { db } from "../firebase/index";
import { getFitnessMenu, getUserId } from "../reducks/users/selectors";
import { InputText, SecondButton } from "./UIkit/index";
import { ListPaper } from "./UIkit/index";
import { saveMenus } from "../reducks/users/operations";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/editList/EditList.module.scss";

interface Item {
  name: string;
  part?: string;
}



const EditList: FC = () => {
  const [checked, setChecked] = useState<Item[]>([]),
    [fitMenus, setFitMenus] = useState<Item[]>([]),
    [scrollLine, setScrollLine] = useState<boolean>(false),
    [value, setValue] = useState<string>("");

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const menus = getFitnessMenu(selector),
    uid = getUserId(selector);

  let id = window.location.pathname.split("/edit")[1];
  if (id !== "") {
    id = id.split("/")[1];
  }

  const selectItems = checked.length === 0;
  const classes = selectItems ? styles.b_delete : styles.b_delete__clicked;
  const isEmpty = value === "" ? styles.b_add : styles.b_add__clicked;

  const inputValue = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }, [setValue]);

  const handleToggle = (value: Item): void => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const deleteItems = (checked: Item[]): false | void => {
    if (checked.length === 0) {
      return false;
    }
    db.collection("users")
      .doc(uid)
      .get()
      .then((snapshot) => {
        const data = snapshot.data();
        if(data) {
          const items: Item[] = data.fitMenus[id];
          console.log(items, checked)

          checked.map((value) => {
            return items.splice(items.indexOf(value), 1);
          });

          dispatch(saveMenus(uid, id, items));
          setFitMenus(items);
        }
      });
    const newChecked: Item[] = [];
    setChecked(newChecked);
  };

  const addMenu = (items: Item[], value: string): false | void => {
    if (value === "") {
      return false;
    }
    const newItem = { name: value, part: id };
    const menus: string[] = [];
    items.map(value => {
      return menus.push(value.name);
    })
    if (menus.indexOf(value) !== -1) {
      alert ("すでに同じ名前があります")
      return false;
    }


    const newMenu = [...items, newItem];

    setFitMenus(newMenu);
    setValue("");
    setScrollLine(!scrollLine);
    dispatch(saveMenus(uid, id, newMenu));
  };

  useEffect(() => {
    const scrollArea = document.getElementById("scroll-area");
    if (scrollArea) {
      scrollArea.scrollTop = scrollArea.scrollHeight;
    }
  }, [scrollLine]);

  useEffect(() => {
    setFitMenus(menus[id]);
  }, [menus, id]);

  return (
    <>
      <div id="scroll-area">
        <ListPaper
          box={false}
          checked={checked}
          handleToggle={handleToggle}
          items={fitMenus}
          title={id}
          check={true}
        />
      </div>
      <div className={classes}>
        <SecondButton
          fullWidth={true}
          label={"削除"}
          onClick={() => {
            deleteItems(checked);
          }}
        />
      </div>
      <div className={styles.input_center}>
        <InputText
        id={"newMenu"}
          fullWidth={true}
          label={"新規メニュー"}
          onChange={inputValue}
          type={"text"}
          value={value}
          width={"260px"}
        />
        <div className={isEmpty}>
          <SecondButton
            fullWidth={true}
            label={"追加"}
            onClick={() => {
              addMenu(fitMenus, value);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default EditList;
