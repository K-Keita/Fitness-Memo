import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { EditList, LinkContainer } from "../components";
import { PartsButton } from "../components/UIkit/index";

const EditMenuList = () => {
  return (
    <>
      <div className="flex">
        <PartsButton label={"ホームに戻る"} path={"/"} />
      </div>
      <LinkContainer
        buttonLabel={""}
        icons={<EditIcon className="icon_align" />}
        label={"メニューリストの編集"}
        link={"/edit"}
        isArr={true}
      />
      <EditList />
      <div className="medium-space" />
      <LinkContainer
        buttonLabel={""}
        icons={<AddCircleOutlineIcon className="icon_align" />}
        label={"トレーニングメニューを登録"}
        link={"/registration"}
        isArr={true}
      />
      <LinkContainer
        icons={<ListAltIcon className="icon_align" />}
        label={"過去のトレーニング"}
        link={"/list"}
        buttonLabel={"見る"}
        isArr={false}
      />
    </>
  );
};

export default EditMenuList;
