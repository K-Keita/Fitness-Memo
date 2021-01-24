import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import { ListPaper } from "./UIkit/index";
import { getUserId } from "../reducks/users/selectors";

interface Props {
  dateId: string;
  title: string;
}

interface Menu {
  name: string;
  part?: string;
}

const DateList: FC<Props> = (props) => {
  const [checked, setChecked] = useState<Menu[]>([]),
    [menuList, setMenuList] = useState<Menu[]>([]);

  const selector = useSelector((state) => state);
  const uid: string = getUserId(selector);

  const id = String(props.dateId);

  const handleToggle = (value: Menu): void => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  useEffect(() => {
    db.collection("users")
      .doc(uid)
      .collection("dayMenus")
      .doc(id)
      .get()
      .then((snapshot) => {
        if (!snapshot.exists) {
          setMenuList([{ name: "Training-OFF" }]);
        } else {
          const data = snapshot.data();
          if (data) {
            if (data.fitItems.length === 0) {
              setMenuList([{ name: "Training-OFF" }]);
            } else {
              data.fitItems.map((value: Menu, index: number) => {
                return (value.name = `${index + 1}:　${value.name}`);
              });
              setMenuList(data.fitItems);
            }
          }
        }
      })
      .catch(() => {
        console.log(Error);
      });
  }, [id, uid]);

  return (
    <ListPaper
      box={true}
      checked={checked}
      check={false}
      handleToggle={handleToggle}
      title={props.title}
      items={menuList}
    />
  );
};

export default DateList;
