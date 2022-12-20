import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop8.module.css";

const Desktop8 = () => {
  const navigate = useNavigate();

  const onSumbitContainerClick = useCallback(() => {
    navigate("/desktop-9");
  }, [navigate]);

  const onGroupContainer2Click = useCallback(() => {
    navigate("/desktop-6");
  }, [navigate]);

  const onRectangle6Click = useCallback(() => {
    navigate("/desktop-7");
  }, [navigate]);

  return (
    <div className={styles.desktop8}>
      <div className={styles.secondBlock}>
        <div className={styles.viewIn}>View in:</div>
        <div className={styles.rectangleDiv} />
        <div className={styles.english}>English</div>
        <img className={styles.polygonIcon} alt="" src="../polygon-1.svg" />
      </div>
      <div className={styles.rectangleDiv1} />
      <div className={styles.textSection}>
        <div className={styles.recruitmentOfJaipurAssociat}>
          Recruitment of Jaipur Association ( Customer Support and Sales ) is
        </div>
        <div className={styles.stateBankOfIndia}>State Bank of India</div>
        <div className={styles.instructions}>Instructions</div>
        <div className={styles.theTextDisplayedOnTheScre}>
          <ol className={styles.theTextDisplayedOnTheScre1}>
            <li className={styles.theTextDisplayed}>
              The text displayed on the screen must be written by you in the
              space provided in the capital letters. You will be given 5 minutes
              for this activity.
            </li>
            <li className={styles.theTextDisplayed}>
              The Question Paper contains of objective type questions as follows
            </li>
          </ol>
        </div>
      </div>
      <div className={styles.tabluarInfo}>
        <div className={styles.groupDiv}>
          <div className={styles.tableInformation}>
            <div className={styles.noOfQue}>
              <div className={styles.noOfQs}>No of Qs.</div>
              <div className={styles.div}>35</div>
              <div className={styles.div1}>35</div>
              <div className={styles.div2}>30</div>
              <div className={styles.div3}>100</div>
            </div>
            <div className={styles.pD}>
              <div
                className={styles.durationForPDCandidatesEl}
              >{`Duration for P&D Candidates eligible for following time`}</div>
              <div className={styles.minutesForEveryHourOfExam}>
                20 Minutes for every hour of Examination
              </div>
            </div>
            <div className={styles.duration}>
              <div className={styles.duration1}>Duration</div>
              <div className={styles.minutes}>20 Minutes</div>
              <div className={styles.minutes1}>20 Minutes</div>
              <div className={styles.minutes2}>20 Minutes</div>
            </div>
            <div className={styles.maximumMarks}>
              <div className={styles.maximumMarks1}>Maximum marks</div>
              <div className={styles.div4}>35</div>
              <div className={styles.div5}>35</div>
              <div className={styles.div6}>30</div>
              <div className={styles.div7}>100</div>
            </div>
            <div className={styles.nameOfTheTest}>
              <div className={styles.nameOfTheTest1}>Name of the Test</div>
              <div className={styles.resoningAbility}>Resoning Ability</div>
              <div className={styles.numericalAbility}>Numerical Ability</div>
              <div className={styles.englishAbility}>English Ability</div>
              <div className={styles.total}>Total</div>
            </div>
            <div className={styles.sNo}>
              <div className={styles.sNo1}>S No.</div>
              <div className={styles.div8}>1</div>
              <div className={styles.div9}>2</div>
              <div className={styles.div10}>3</div>
            </div>
            <img
              className={styles.rectangleStructureIcon}
              alt=""
              src="../rectangle-structure.svg"
            />
          </div>
          <div className={styles.groupDiv1}>
            <div className={styles.rectangleDiv2} />
          </div>
        </div>
      </div>
      <div className={styles.rectangleDiv3} />
      <div className={styles.sumbit} onClick={onSumbitContainerClick}>
        <div className={styles.rectangleDiv4} />
        <div className={styles.iAmReadyToBegin}>I am ready to begin</div>
      </div>
      <div className={styles.nextToggle}>
        <div className={styles.groupDiv2} onClick={onGroupContainer2Click}>
          <div className={styles.rectangleDiv5} />
        </div>
        <div className={styles.previous}>Previous</div>
        <img className={styles.groupIcon} alt="" src="../group-4.svg" />
        <img className={styles.groupIcon1} alt="" src="../group-5.svg" />
      </div>
      <div className={styles.rectangleDiv6} onClick={onRectangle6Click} />
      <div className={styles.thisIsTheDeclarationTheI}>
        This is the declaration the I’ve read all the instructions given above
        and all the information provided by me is correct and if any wrong
        information is filled it will be my reponsibility.
      </div>
    </div>
  );
};

export default Desktop8;
