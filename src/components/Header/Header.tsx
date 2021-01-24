import React, {FC} from "react";
import Button from "@material-ui/core/Button";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { Divider } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { signOut } from "../../reducks/users/operations";
import { useDispatch, useSelector } from "react-redux";
import { getIsSignedIn } from "../../reducks/users/selectors";

const useStyles = makeStyles({
  headPosition: {
    background: "rgb(223, 252, 252)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 10,
  },
  mainColor: {
    backgroundColor: green["A400"],
  },
  title: {
    color: green["A400"],
    margin: " 15px 0 5px 0",
    fontSize: 30,
  },
  root: {
    margin: "0 auto",
    width: "95%",
    minWidth: 360,
    display: "flex",
    justifyContent: "space-between",
  },
  primary: {
    borderColor: green["A400"],
    borderRadius: 50,
    height: 35,
    color: green["700"],
    fontSize: 12,
    margin: "15px 0 0 0",
    "&:hover": {
      height: 45,
    },
  },
});

const Header: FC = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  const isSignedIn: boolean = getIsSignedIn(selector);

  return (
    <div className={classes.headPosition}>
      <div className={classes.root}>
        <h2 className={classes.title}>
          <HomeOutlinedIcon fontSize="large" className="icon_align" />
          {"Fitness-Memo"}
        </h2>
        {isSignedIn && (
          <>
            <Button
              className={classes.primary}
              href="#outlined-buttons"
              onClick={() => dispatch(signOut())}
              variant="outlined"
            >
              ログアウト
            </Button>
          </>
        )}
      </div>
      <Divider style={{ margin: "0 auto", width: "95%" }} />
    </div>
  );
};

export default Header;
