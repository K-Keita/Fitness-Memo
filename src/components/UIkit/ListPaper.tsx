import React, {FC, ReactNode} from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Checkbox from "@material-ui/core/Checkbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 370,
    minWidth: 270,
    border: "solid 2px #00c853",
    boxSizing: "border-box",
    borderRadius: 2,
    backgroundColor: "mintcream",
    margin: "20px auto",
    height: 260,
    padding: 0,
  },
  cardHeader: {
    margin: 0,
    textAlign: "center",
    fontSize: 18,
    height: 45,
    borderBottom: "solid 2px gray",
    boxSizing: "border-box",
    backgroundColor: "rgb(38, 240, 139)",
  },
  list: {
    height: 200,
    overflow: "auto",
  },
  text: {
    padding: 6,
    textAlign: "left",
  },
});

interface Item {
  name: string;
  part?: string;
}

interface Props {
  box: boolean;
  check: boolean;
  items: Item[];
  title: string|ReactNode
  handleToggle: (value: Item) => void;
  checked: Item[];
}

const ListPaper: FC<Props> = React.memo((props) => {
  const classes = useStyles();

  const check = props.check ? {display: "block"} : {display: "none"};
  const text = props.check ? "" : classes.text;

  return (
    <Card className={classes.root}>
      <CardHeader className={classes.cardHeader} title={props.title} />
      <List className={classes.list}>
        {props.items.map((value, index) => {
          const labelId = `label-${value}`;
          const colorBox = props.box
            ? `color-box color_${value.part}`
            : `color-box color_${props.title}`;

          return (
            <div key={index}>
              <ListItem
                button
                dense
                role={undefined}
                key={value.name}
                onClick={() => props.handleToggle(value)}
              >
                <div style={check}>
                  <Checkbox
                    checked={props.checked.indexOf(value) !== -1}
                    disableRipple
                    edge="start"
                    inputProps={{ "aria-labelledby": labelId }}
                    tabIndex={-1}
                  />
                </div>
                <ListItemText
                  className={text}
                  id={labelId}
                  primary={value.name}
                />
                <div className={colorBox} />
              </ListItem>
            </div>
          );
        })}
      </List>
    </Card>
  );
});

export default ListPaper;
