import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop10.module.css";

const Desktop10 = () => {
  const navigate = useNavigate();

  const onNextToggleClick = useCallback(() => {
    navigate("./desktop-11");
  }, [navigate]);

  const onNextToggle1Click = useCallback(() => {
    navigate("./desktop-9");
  }, [navigate]);

  const onText1Click = useCallback(() => {
    navigate("./desktop-10");
  }, [navigate]);

  return (
    <div className={styles.page8}>
      <div className={styles.rectangleDiv} />
      <div className={styles.userSecondBlock}>
        <div className={styles.userInfo}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <div className={styles.participant123}>Participant 123</div>
          <div className={styles.dummyUser123}>Dummy User 123</div>
        </div>
        <Button
          className={styles.nextToggle}
          sx={{ width: 161 }}
          variant="contained"
          color="primary"
          onClick={onNextToggleClick}
        >
          Finish
        </Button>
        <Button
          className={styles.nextToggle1}
          sx={{ width: 299 }}
          variant="contained"
          color="primary"
          onClick={onNextToggle1Click}
        >
          Mark for Assignment
        </Button>
        <img
          className={styles.screenshotFrom2022112218}
          alt=""
          src="../screenshot-from-20221122-182556-1@2x.png"
        />
      </div>
      <div className={styles.pageLayout}>
        <div className={styles.time2000}>
          <span>{`Time:  `}</span>
          <span className={styles.span}>20 : 00</span>
        </div>
      </div>
      <div className={styles.pageLayout1}>
        <div className={styles.questionNo1}>Question No: 1</div>
        <div className={styles.lineDiv} />
        <div className={styles.aTrainTravels240MilesAtA}>
          <p className={styles.aTrainTravels}>
            A train travels 240 miles at a speed of 80 miles/hour. On the way
            back the train slows down to 40 miles/hour. What is the overall time
            the train traveled?
          </p>
        </div>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv3} />
        <div className={styles.groupDiv1}>
          <div className={styles.groupDiv2}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv3}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv7} />
          </div>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv5}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv6}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv7}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv8}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv9}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv10}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv11}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv12}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv13}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv14}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv15}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv16}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv17}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv18}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv19}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv20}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv21}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.div}>
            <p className={styles.aTrainTravels}> Q 1</p>
          </div>
          <div className={styles.div1} onClick={onText1Click}>
            <p className={styles.aTrainTravels}> Q 2</p>
          </div>
          <div className={styles.div2}>
            <p className={styles.aTrainTravels}> Q 4</p>
          </div>
          <div className={styles.div3}>
            <p className={styles.aTrainTravels}> Q 3</p>
          </div>
          <div className={styles.div4}>
            <p className={styles.aTrainTravels}> Q 6</p>
          </div>
          <div className={styles.div5}>
            <p className={styles.aTrainTravels}> Q 5</p>
          </div>
          <div className={styles.div6}>
            <p className={styles.aTrainTravels}> Q 8</p>
          </div>
          <div className={styles.div7}>
            <p className={styles.aTrainTravels}> Q 7</p>
          </div>
          <div className={styles.div8}>
            <p className={styles.aTrainTravels}> Q 10</p>
          </div>
          <div className={styles.div9}>
            <p className={styles.aTrainTravels}> Q 9</p>
          </div>
          <div className={styles.div10}>
            <p className={styles.aTrainTravels}> Q 12</p>
          </div>
          <div className={styles.div11}>
            <p className={styles.aTrainTravels}> Q 11</p>
          </div>
          <div className={styles.div12}>
            <p className={styles.aTrainTravels}> Q 14</p>
          </div>
          <div className={styles.div13}>
            <p className={styles.aTrainTravels}> Q 13</p>
          </div>
          <div className={styles.div14}>
            <p className={styles.aTrainTravels}> Q 16</p>
          </div>
          <div className={styles.div15}>
            <p className={styles.aTrainTravels}> Q 15</p>
          </div>
          <div className={styles.div16}>
            <p className={styles.aTrainTravels}> Q 18</p>
          </div>
          <div className={styles.div17}>
            <p className={styles.aTrainTravels}> Q 17</p>
          </div>
          <div className={styles.div18}>
            <p className={styles.aTrainTravels}> Q 21</p>
          </div>
          <div className={styles.div19}>
            <p className={styles.aTrainTravels}> Q 20</p>
          </div>
          <div className={styles.div20}>
            <p className={styles.aTrainTravels}> Q 23</p>
          </div>
          <div className={styles.div21}>
            <p className={styles.aTrainTravels}> Q 22</p>
          </div>
          <div className={styles.div22}>
            <p className={styles.aTrainTravels}> Q 25</p>
          </div>
          <div className={styles.div23}>
            <p className={styles.aTrainTravels}> Q 24</p>
          </div>
          <div className={styles.div24}>
            <p className={styles.aTrainTravels}> Q 27</p>
          </div>
          <div className={styles.div25}>
            <p className={styles.aTrainTravels}> Q 26</p>
          </div>
          <div className={styles.div26}>
            <p className={styles.aTrainTravels}> Q 29</p>
          </div>
          <div className={styles.div27}>
            <p className={styles.aTrainTravels}> Q 31</p>
          </div>
          <div className={styles.div28}>
            <p className={styles.aTrainTravels}> Q 30</p>
          </div>
          <div className={styles.div29}>
            <p className={styles.aTrainTravels}> Q 33</p>
          </div>
          <div className={styles.div30}>
            <p className={styles.aTrainTravels}> Q 32</p>
          </div>
          <div className={styles.div31}>
            <p className={styles.aTrainTravels}> Q 35</p>
          </div>
          <div className={styles.div32}>
            <p className={styles.aTrainTravels}> Q 34</p>
          </div>
          <div className={styles.div33}>
            <p className={styles.aTrainTravels}> Q 37</p>
          </div>
          <div className={styles.div34}>
            <p className={styles.aTrainTravels}> Q 36</p>
          </div>
          <div className={styles.div35}>
            <p className={styles.aTrainTravels}> Q 39</p>
          </div>
          <div className={styles.div36}>
            <p className={styles.aTrainTravels}> Q 38</p>
          </div>
          <div className={styles.div37}>
            <p className={styles.aTrainTravels}> Q 41</p>
          </div>
          <div className={styles.div38}>
            <p className={styles.aTrainTravels}> Q 40</p>
          </div>
          <div className={styles.div39}>
            <p className={styles.aTrainTravels}> Q 28</p>
          </div>
        </div>
        <div className={styles.rectangleDiv44} />
        <div className={styles.rectangleDiv45} />
        <div className={styles.groupDiv22}>
          <div className={styles.groupDiv2}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv3}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv4}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv5}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv6}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv7}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv8}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv9}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv10}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv11}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv12}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv13}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv14}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv15}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv16}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv17}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv39}>
            <div className={styles.rectangleDiv4} />
          </div>
          <div className={styles.groupDiv19}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv20}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.groupDiv21}>
            <div className={styles.rectangleDiv4} />
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.div40}>
            <p className={styles.aTrainTravels}> Q 42</p>
          </div>
          <div className={styles.div41}>
            <p className={styles.aTrainTravels}> Q 43</p>
          </div>
          <div className={styles.div42}>
            <p className={styles.aTrainTravels}> Q 45</p>
          </div>
          <div className={styles.div43}>
            <p className={styles.aTrainTravels}> Q 44</p>
          </div>
          <div className={styles.div4}>
            <p className={styles.aTrainTravels}> Q 47</p>
          </div>
          <div className={styles.div45}>
            <p className={styles.aTrainTravels}> Q 46</p>
          </div>
          <div className={styles.div6}>
            <p className={styles.aTrainTravels}> Q 49</p>
          </div>
          <div className={styles.div47}>
            <p className={styles.aTrainTravels}> Q 48</p>
          </div>
          <div className={styles.div8}>
            <p className={styles.aTrainTravels}> Q 51</p>
          </div>
          <div className={styles.div49}>
            <p className={styles.aTrainTravels}> Q 50</p>
          </div>
          <div className={styles.div50}>
            <p className={styles.aTrainTravels}> Q 53</p>
          </div>
          <div className={styles.div51}>
            <p className={styles.aTrainTravels}> Q 52</p>
          </div>
          <div className={styles.div52}>
            <p className={styles.aTrainTravels}> Q 55</p>
          </div>
          <div className={styles.div53}>
            <p className={styles.aTrainTravels}> Q 54</p>
          </div>
          <div className={styles.div54}>
            <p className={styles.aTrainTravels}> Q 57</p>
          </div>
          <div className={styles.div55}>
            <p className={styles.aTrainTravels}> Q 56</p>
          </div>
          <div className={styles.div16}>
            <p className={styles.aTrainTravels}> Q 59</p>
          </div>
          <div className={styles.div57}>
            <p className={styles.aTrainTravels}> Q 58</p>
          </div>
          <div className={styles.div18}>
            <p className={styles.aTrainTravels}> Q 61</p>
          </div>
          <div className={styles.div59}>
            <p className={styles.aTrainTravels}> Q 60</p>
          </div>
          <div className={styles.div20}>
            <p className={styles.aTrainTravels}> Q 63</p>
          </div>
          <div className={styles.div61}>
            <p className={styles.aTrainTravels}> Q 62</p>
          </div>
          <div className={styles.div22}>
            <p className={styles.aTrainTravels}> Q 65</p>
          </div>
          <div className={styles.div63}>
            <p className={styles.aTrainTravels}> Q 64</p>
          </div>
          <div className={styles.div64}>
            <p className={styles.aTrainTravels}> Q 67</p>
          </div>
          <div className={styles.div65}>
            <p className={styles.aTrainTravels}> Q 66</p>
          </div>
          <div className={styles.div26}>
            <p className={styles.aTrainTravels}> Q 69</p>
          </div>
          <div className={styles.div27}>
            <p className={styles.aTrainTravels}> Q 71</p>
          </div>
          <div className={styles.div68}>
            <p className={styles.aTrainTravels}> Q 70</p>
          </div>
          <div className={styles.div69}>
            <p className={styles.aTrainTravels}> Q 73</p>
          </div>
          <div className={styles.div70}>
            <p className={styles.aTrainTravels}> Q 72</p>
          </div>
          <div className={styles.div31}>
            <p className={styles.aTrainTravels}> Q 75</p>
          </div>
          <div className={styles.div72}>
            <p className={styles.aTrainTravels}> Q 74</p>
          </div>
          <div className={styles.div33}>
            <p className={styles.aTrainTravels}> Q 77</p>
          </div>
          <div className={styles.div74}>
            <p className={styles.aTrainTravels}> Q 76</p>
          </div>
          <div className={styles.div35}>
            <p className={styles.aTrainTravels}> Q 79</p>
          </div>
          <div className={styles.div76}>
            <p className={styles.aTrainTravels}> Q 78</p>
          </div>
          <div className={styles.div77}>
            <p className={styles.aTrainTravels}> Q 80</p>
          </div>
          <div className={styles.div78}>
            <p className={styles.aTrainTravels}> Q 68</p>
          </div>
        </div>
      </div>
      <div className={styles.noOfQuesAttempted01}>No of Ques Attempted: 01</div>
      <div className={styles.noOfQuesLeft79}>No of Ques Left: 79</div>
      <div className={styles.option}>
        <img className={styles.ellipseIcon} alt="" src="../ellipse-1.svg" />
        <img className={styles.ellipseIcon1} alt="" src="../ellipse-22.svg" />
        <img className={styles.ellipseIcon2} alt="" src="../ellipse-1.svg" />
        <img className={styles.ellipseIcon3} alt="" src="../ellipse-1.svg" />
        <div className={styles.div79}>7</div>
        <div className={styles.div80}>10</div>
        <div className={styles.div81}>12</div>
        <div className={styles.div82}>9</div>
      </div>
    </div>
  );
};

export default Desktop10;
