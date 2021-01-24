import React , {FC, ChangeEvent, FormEvent} from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  textField: {
    backgroundColor: "rgb(223, 252, 252)",
  },
}));

interface Props {
  id: string;
  label: string;
  fullWidth: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  value: string;
  width: string;
}

const InputText: FC<Props> = React.memo((props) => {
  const classes = useStyles();

  const onFormSubmit = (event: FormEvent<HTMLElement>): void => {
    event.preventDefault();
  }

  return (
    <form
      onSubmit={onFormSubmit}
      className={classes.root}
      style={{ width: props.width }}
      noValidate
      autoComplete="off"
    >
      <TextField
        className={classes.textField}
        fullWidth={props.fullWidth}
        id={props.id}
        label={props.label}
        onChange={props.onChange}
        type={props.type}
        value={props.value}
        variant="outlined"
      />
    </form>
  );
});

export default InputText;
