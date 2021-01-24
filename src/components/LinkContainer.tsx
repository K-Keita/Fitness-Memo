import React, { FC, ReactNode } from "react";
import { LinkContainerTop } from "../components/UIkit/index";
import { PartsButton } from "./UIkit/index";

interface Props {
  isArr: boolean;
  icons: ReactNode;
  label: string;
  link: string;
  buttonLabel: string;
}

const LinkContainer: FC<Props> = (props) => {
  const link = props.link;
  const arr = props.isArr;

  const rows = [
    { name: "肩", link: `${link}/shoulder` },
    { name: "腕", link: `${link}/arm` },
    { name: "胸", link: `${link}/chest` },
    { name: "背中", link: `${link}/back` },
    { name: "脚", link: `${link}/reg` },
  ];

  const isArr = rows.map((row, index) => (
    <PartsButton label={row.name} key={String(index)} path={row.link} />
  ));

  const notArr = <PartsButton label={props.buttonLabel} path={props.link} />;
  const box = arr ? isArr : notArr;

  return (
    <>
      <LinkContainerTop icons={props.icons} label={props.label} />
      <div style={{display: "flex"}}>{box}</div>
    </>
  );
};

export default LinkContainer;
