import React, {FC} from "react";
import Divider from "@material-ui/core/Divider";
import green from "@material-ui/core/colors/green";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: green["A400"],
    margin: " 10px 0 0 0",
    minWidth: 350,
  },
});

interface Props {
  icons: React.ReactNode;
  label: string;
}

const LinkContainerTop: FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div>
      <h2 className={classes.root}>
        {props.icons}
        {props.label}
      </h2>
      <Divider />
    </div>
  );
};

export default LinkContainerTop;
