import React, {FC} from "react";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  primary: {
    borderColor: green["A400"],
    color: green["700"],
    margin: 0,
  },
}));

interface Props {
  fullWidth: boolean;
  label: string;
  onClick: () => void;
}

const SecondButton: FC<Props> = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        className={classes.primary}
        fullWidth={props.fullWidth}
        href="#outlined-buttons"
        onClick={props.onClick}
        variant="outlined"
      >
        {props.label}
      </Button>
    </div>
  );
};

export default SecondButton;
