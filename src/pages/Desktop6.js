import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop6.module.css";

const Desktop6 = () => {
  const navigate = useNavigate();

  const onNextToggleClick = useCallback(() => {
    navigate("/desktop-7");
  }, [navigate]);

  return (
    <div className={styles.desktop6}>
      <div className={styles.thirdBlock}>
        <div className={styles.rectangleDiv} />
        <div className={styles.firstBlock}>
          <div className={styles.generalInstruction}>General Instruction:</div>
          <div className={styles.inThisRoundEachTeamHasIt}>
            <ol className={styles.ifTheTeamThatTheQuestion}>
              <li className={styles.ifATeamIsAnsweringAQuest}>
                <span>
                  In this round each team has its own quota of 4 questions and
                  otherquestions passed to it from the previous team that did
                  not answer.A team gets 30 seconds to answer the question
                  intended for it, and isawarded 20 points for answering it.
                </span>
              </li>
            </ol>
            <p className={styles.blankLine}>
              <span>&nbsp;</span>
            </p>
            <ol className={styles.ifTheTeamThatTheQuestion}>
              <li className={styles.ifATeamIsAnsweringAQuest}>
                <span>
                  If the team that the question intended for passes it. The next
                  team/s get15 seconds to answer it and is awarded 10 points for
                  the right answer.
                </span>
              </li>
            </ol>
            <p className={styles.blankLine}>
              <span>&nbsp;</span>
            </p>
            <ol className={styles.ifTheTeamThatTheQuestion}>
              <li className={styles.ifATeamIsAnsweringAQuest}>
                <span>
                  The team members can discuss before giving the answer
                </span>
              </li>
            </ol>
            <ul className={styles.ifTheTeamThatTheQuestion}>
              <li className={styles.ifATeamIsAnsweringAQuest}>
                <span>
                  If a team cannot answer a question they can pass it or after
                  30 secondsit gets automatically passed to the next team.
                </span>
              </li>
              <li className={styles.ifATeamIsAnsweringAQuest}>
                <span>
                  If a team is answering a question and the time passes, then
                  the teamgets to complete the answer and is awarded points for
                  the right answer.
                </span>
              </li>
              <li className={styles.ifATeamIsAnsweringAQuest}>
                <span>There is no negative marking for wrong answer.</span>
              </li>
            </ul>
            <p className={styles.blankLine}>
              <span>{`      `}</span>
            </p>
            <p className={styles.blankLine}>
              <span>{`     `}</span>
              <span className={styles.noBuzzerIs}>
                {" "}
                No buzzer is used in this round.
              </span>
            </p>
            <p className={styles.blankLine}>
              <span>&nbsp;</span>
            </p>
            <p className={styles.blankLine}>
              <span>&nbsp;</span>
            </p>
            <p className={styles.blankLine4}>
              <span>&nbsp;</span>
            </p>
          </div>
        </div>
        <Button
          className={styles.secondBlock}
          sx={{ width: 208 }}
          variant="outlined"
          color="primary"
        >
          View in:
        </Button>
        <div className={styles.thirdBlock1}>
          <div className={styles.rectangleDiv1} />
          <Button
            className={styles.nextToggle}
            sx={{ width: 161 }}
            variant="outlined"
            color="primary"
            onClick={onNextToggleClick}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Desktop6;
