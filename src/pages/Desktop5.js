import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "./Desktop5.module.css";

const Desktop5 = () => {
  
  return (
    <div className={styles.page3}>
      <div className={styles.rectangleDiv} />
      <Button
        className={styles.sumbit}
        sx={{ width: 189 }}
        variant="contained"
        color="primary"
      >
        <Link to = {'/desktop-6'}>
          I Confirm
        </Link>
      </Button>
      <Button
        className={styles.deny}
        sx={{ width: 189 }}
        variant="outlined"
        color="primary"
      >
        I Deny
      </Button>
      <div className={styles.toProceedWithTheExamConf}>
        To proceed with the exam, confirm your identity
      </div>
      <img
        className={styles.screenshotFrom2022112217}
        alt=""
        src="../screenshot-from-20221122-170814-1@2x.png"
      />
      <div className={styles.userSecondBlock}>
        <div className={styles.userInfo}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <div className={styles.participant123}>Participant 123</div>
          <div className={styles.dummyUser123}>Dummy User 123</div>
          <img
            className={styles.screenshotFrom2022112218}
            alt=""
            src="../screenshot-from-20221122-182556-11@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Desktop5;

