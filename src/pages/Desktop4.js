import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop4.module.css";

const Desktop4 = () => {
  const navigate = useNavigate();

  const onSumbitContainerClick = useCallback(() => {
    navigate("/desktop-5");
  }, [navigate]);

  return (
    <div className={styles.desktop4}>
      <div className={styles.firstBlock}>
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleDiv1} />
        <div className={styles.username}>
          <img className={styles.iconsuser} alt="" src="../iconsuser1.svg" />
          <div className={styles.rectangleDiv2} />
          <div className={styles.participant123}>Participant 123</div>
        </div>
        <img className={styles.passwordIcon} alt="" src="../password.svg" />
        <div className={styles.sumbit} onClick={onSumbitContainerClick}>
          <div className={styles.rectangleDiv3} />
          <div className={styles.sumbit1}>Sumbit</div>
        </div>
      </div>
      <img className={styles.ellipseIcon} alt="" src="../ellipse-1.svg" />
      <img className={styles.ellipseIcon1} alt="" src="../ellipse-1.svg" />
      <img className={styles.ellipseIcon2} alt="" src="../ellipse-1.svg" />
      <img className={styles.ellipseIcon3} alt="" src="../ellipse-1.svg" />
      <img className={styles.ellipseIcon4} alt="" src="../ellipse-1.svg" />
      <img className={styles.ellipseIcon5} alt="" src="../ellipse-1.svg" />
      <img className={styles.ellipseIcon6} alt="" src="../ellipse-1.svg" />
    </div>
  );
};

export default Desktop4;
