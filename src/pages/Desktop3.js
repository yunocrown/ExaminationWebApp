import { useCallback } from "react";
//import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop3.module.css";

const Desktop3 = () => {
  const navigate = useNavigate();

  const onUsernameContainerClick = useCallback(() => {
    navigate("/desktop-4");
  }, [navigate]);

  return (
    <div className={styles.page1}>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <div className={styles.username} onClick={onUsernameContainerClick}>
        <img className={styles.iconsuser} alt="" src="../iconsuser1.svg" />
        <div className={styles.rectangleDiv2} />
        <div className={styles.enterYourUsername}>Enter Your Username</div>
      </div>
      <div className={styles.password}>
        <img className={styles.passwordIcon} alt="" src="../password.svg" />  
        <div className={styles.rectangleDiv2} />
        <div className={styles.enterYourUsername}>Enter Your Password</div>
      </div>
      <div className={styles.sumbit}>
          <div className={styles.rectangleDiv3} />
          <div className={styles.sumbit1}>Sumbit</div>
      </div>
    </div>
  );
};

export default Desktop3;

