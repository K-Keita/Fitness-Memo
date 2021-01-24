import React, {FC} from "react";
import styles from '../../styles/UIkit/ListTitle.module.scss';

interface Props {
  label: string;
  nextDays: () => void;
  prevDays: () => void;
}

const LeftPaperTitle: FC<Props> = (props) => {

  return (
    <div>
      <span className={styles.b_change} onClick={props.prevDays}>
        &lt;
      </span>
      {props.label}
      <span className={styles.b_change} onClick={props.nextDays}>
        &gt;
      </span>
    </div>
  );
};

export default LeftPaperTitle;
