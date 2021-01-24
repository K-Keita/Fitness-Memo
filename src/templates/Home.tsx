import React from "react";
import { DateList, TableBox } from "../components/index";
import { LinkContainer } from "../components/index";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import ListAltIcon from "@material-ui/icons/ListAlt";
import styles from "..//styles/home/Home.module.scss";

const d = new Date();
const year = d.getFullYear();
const month = d.getMonth() + 1;
const day = d.getDate();
const dateId = String(year) + String(month) + String(day);

const Home = () => {
  return (
    <>
      <div style={{ height: 20 }} />
      <div className={styles.flex_between}>
        <div className={styles.table_container}>
          <TableBox />
        </div>
        <div className={styles.list_container}>
          <DateList title={"今日のトレーニング"} dateId={dateId} />
        </div>
      </div>
      <LinkContainer
        buttonLabel={""}
        icons={<AddCircleOutlineIcon className="icon_align" />}
        label={"トレーニングメニューを登録"}
        link={"/registration"}
        isArr={true}
      />
      <LinkContainer
        buttonLabel={""}
        icons={<EditIcon className="icon_align" />}
        label={"メニューリストの編集"}
        link={"/edit"}
        isArr={true}
      />
      <LinkContainer
        icons={<ListAltIcon className="icon_align" />}
        label={"過去のトレーニング"}
        buttonLabel={"見る"}
        link={"/list"}
        isArr={false}
      />
    </>
  );
};

export default Home;
