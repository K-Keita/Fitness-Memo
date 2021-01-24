import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import EditIcon from "@material-ui/icons/Edit";
import ListAltIcon from "@material-ui/icons/ListAlt";
import { LinkContainer, TransferList } from "../components/index";
import { PartsButton } from "../components/UIkit/index";

const RegistrationList = () => {
  let id = window.location.pathname.split("/registration/")[1];

  // if (id !== "") {
  //   id = id.split("/")[1];
  // }

  return (
    <>
      <div className="flex">
        <PartsButton label={"ホームに戻る"} path={"/"} />
      </div>
      <LinkContainer
        buttonLabel={""}
        icons={<AddCircleOutlineIcon className="icon_align" />}
        label={"トレーニングメニューを登録"}
        link={"/registration"}
        isArr={true}
      />
      <TransferList id={id} />
      <div className="medium-space" />
      <LinkContainer
        buttonLabel={""}
        icons={<EditIcon className="icon_align" />}
        label={"メニューリストの編集"}
        link={"/edit"}
        isArr={true}
      />
      <LinkContainer
        icons={<ListAltIcon className="icon_align" />}
        label={"過去のトレーニングリスト"}
        link={"/list"}
        buttonLabel={"見る"}
        isArr={false}
      />
    </>
  );
};

export default RegistrationList;
