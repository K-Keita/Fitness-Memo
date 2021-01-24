import React, {FC} from "react";
import Button from "@material-ui/core/Button";
import green from "@material-ui/core/colors/green";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  primary: {
    borderColor: green["A400"],
    borderRadius: 50,
    color: green["500"],
    margin: "5px",
    "&:hover": {
      height: "110%",
      width: "110%",
    },
  },
}));

interface Props {
  label: string;
  path: string;
}

const PartsButton: FC<Props> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Button
        className={classes.primary}
        href="#outlined-buttons"
        onClick={() => dispatch(push(props.path))}
        variant="outlined"
      >
        {props.label}
      </Button>
    </div>
  );
};

export default PartsButton;
