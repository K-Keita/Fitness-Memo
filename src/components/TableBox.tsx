import React, {FC} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TableField } from "./UIkit/index";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  tableCell: {
    fontSize: 18,
    textAlign: "center",
  },
  tableContainer: {
    width: "100%",
    minWidth: 355,
    boxSizing: "border-box",
    border: "solid 2px #00c853",
    backgroundColor: "rgb(38, 240, 139)",
    borderRadius: 2,
  },
  tableWidth: {
    minWidth: 300,
  },
});

const TableBox: FC = () => {
  const classes = useStyles();

  const parts = [
    { name: "肩", id: "shoulder" },
    { name: "腕", id: "arm" },
    { name: "胸", id: "chest" },
    { name: "背中", id: "back" },
    { name: "脚", id: "reg" },
  ];

  return (
    <TableContainer className={classes.tableContainer}>
      <Table className={classes.tableWidth} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableCell} width="25%">
              部位
            </TableCell>
            <TableCell className={classes.tableCell} width="45%">
              前回の日付
            </TableCell>
            <TableCell className={classes.tableCell} width="30%">
              経過日
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {parts.map((part) => {
            return <TableField key={part.id} name={part.name} part={part.id} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableBox;
