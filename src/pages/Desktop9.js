import styles from "./Desktop9.module.css";
import React , { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Desktop9 = () => {
  const navigate = useNavigate();
  const onNextToggleClick = useCallback(() => {
    navigate("./desktop-10")
  } , [navigate]);

  return (
    <div className={styles.desktop9}>
      <div className={styles.rectangleDiv} />
      <div className={styles.userSecondBlock}>
        <div className={styles.userInfo}>
          <div className={styles.rectangleDiv1} />
          <div className={styles.rectangleDiv2} />
          <div className={styles.rectangleDiv3} />
          <div className={styles.participant123}>Participant 123</div>
          <div className={styles.dummyUser123}>Dummy User 123</div>
          <img className={styles.iconsuser} alt="" src="../iconsuser.svg" />
        </div>
        <div className={styles.nextToggle}>
          <div className={styles.groupDiv}>
            <div className={styles.rectangleDiv4} />
          </div>
          <Button
            className = { styles.finish}
            sx = {{width : 161 }}
            variant = "contained"
            onclick = {onNextToggleClick}>
              Finish
          </Button>
        </div>
        <div className={styles.nextToggle1}>
          <div className={styles.groupDiv1}>
            <div className={styles.rectangleDiv5} />
          </div>
          <div className={styles.markForAssignment}>Mark for Assignment</div>
        </div>
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
        <div className={styles.Text} >
          <p>hello is the text which is inside the question panel, either edit it or make copies of it and you're good to go</p>
        </div>
      </div>
      <div className={styles.rectangleDiv6} />
      <div className={styles.groupDiv2}>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv9}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv10}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv11}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv12}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv13}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv14}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv15}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv16}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv17}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv18}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv19}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv20}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv21}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv22}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.div}>
          <p className={styles.q1}>Q 1</p>
        </div>
        <div className={styles.div1}>
          <p className={styles.q1}>Q 2</p>
        </div>
        <div className={styles.div2}>
          <p className={styles.q1}>Q 4</p>
        </div>
        <div className={styles.div3}>
          <p className={styles.q1}>Q 3</p>
        </div>
        <div className={styles.div4}>
          <p className={styles.q1}>Q 6</p>
        </div>
        <div className={styles.div5}>
          <p className={styles.q1}>Q 5</p>
        </div>
        <div className={styles.div6}>
          <p className={styles.q1}>Q 8</p>
        </div>
        <div className={styles.div7}>
          <p className={styles.q1}>Q 7</p>
        </div>
        <div className={styles.div8}>
          <p className={styles.q1}>Q 10</p>
        </div>
        <div className={styles.div9}>
          <p className={styles.q1}>Q 9</p>
        </div>
        <div className={styles.div10}>
          <p className={styles.q1}>Q 12</p>
        </div>
        <div className={styles.div11}>
          <p className={styles.q1}>Q 11</p>
        </div>
        <div className={styles.div12}>
          <p className={styles.q1}>Q 14</p>
        </div>
        <div className={styles.div13}>
          <p className={styles.q1}>Q 13</p>
        </div>
        <div className={styles.div14}>
          <p className={styles.q1}>Q 16</p>
        </div>
        <div className={styles.div15}>
          <p className={styles.q1}>Q 15</p>
        </div>
        <div className={styles.div16}>
          <p className={styles.q1}>Q 18</p>
        </div>
        <div className={styles.div17}>
          <p className={styles.q1}>Q 17</p>
        </div>
        <div className={styles.div18}>
          <p className={styles.q1}>Q 21</p>
        </div>
        <div className={styles.div19}>
          <p className={styles.q1}>Q 20</p>
        </div>
        <div className={styles.div20}>
          <p className={styles.q1}>Q 23</p>
        </div>
        <div className={styles.div21}>
          <p className={styles.q1}>Q 22</p>
        </div>
        <div className={styles.div22}>
          <p className={styles.q1}>Q 25</p>
        </div>
        <div className={styles.div23}>
          <p className={styles.q1}>Q 24</p>
        </div>
        <div className={styles.div24}>
          <p className={styles.q1}>Q 27</p>
        </div>
        <div className={styles.div25}>
          <p className={styles.q1}>Q 26</p>
        </div>
        <div className={styles.div26}>
          <p className={styles.q1}>Q 29</p>
        </div>
        <div className={styles.div27}>
          <p className={styles.q1}>Q 31</p>
        </div>
        <div className={styles.div28}>
          <p className={styles.q1}>Q 30</p>
        </div>
        <div className={styles.div29}>
          <p className={styles.q1}>Q 33</p>
        </div>
        <div className={styles.div30}>
          <p className={styles.q1}>Q 32</p>
        </div>
        <div className={styles.div31}>
          <p className={styles.q1}>Q 35</p>
        </div>
        <div className={styles.div32}>
          <p className={styles.q1}>Q 34</p>
        </div>
        <div className={styles.div33}>
          <p className={styles.q1}>Q 37</p>
        </div>
        <div className={styles.div34}>
          <p className={styles.q1}>Q 36</p>
        </div>
        <div className={styles.div35}>
          <p className={styles.q1}>Q 39</p>
        </div>
        <div className={styles.div36}>
          <p className={styles.q1}>Q 38</p>
        </div>
        <div className={styles.div37}>
          <p className={styles.q1}>Q 41</p>
        </div>
        <div className={styles.div38}>
          <p className={styles.q1}>Q 40</p>
        </div>
        <div className={styles.div39}>
          <p className={styles.q1}>Q 28</p>
        </div>
      </div>
      <div className={styles.rectangleDiv47} />
      <div className={styles.rectangleDiv48} />
      <div className={styles.groupDiv23}>
        <div className={styles.groupDiv3}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv9}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv10}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv11}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv12}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv13}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv14}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv15}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv16}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv17}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv18}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv40}>
          <div className={styles.rectangleDiv7} />
        </div>
        <div className={styles.groupDiv20}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv21}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.groupDiv22}>
          <div className={styles.rectangleDiv7} />
          <div className={styles.rectangleDiv8} />
        </div>
        <div className={styles.div40}>
          <p className={styles.q1}>Q 42</p>
        </div>
        <div className={styles.div41}>
          <p className={styles.q1}>Q 43</p>
        </div>
        <div className={styles.div42}>
          <p className={styles.q1}>Q 45</p>
        </div>
        <div className={styles.div43}>
          <p className={styles.q1}>Q 44</p>
        </div>
        <div className={styles.div44}>
          <p className={styles.q1}>Q 47</p>
        </div>
        <div className={styles.div45}>
          <p className={styles.q1}>Q 46</p>
        </div>
        <div className={styles.div46}>
          <p className={styles.q1}>Q 49</p>
        </div>
        <div className={styles.div47}>
          <p className={styles.q1}>Q 48</p>
        </div>
        <div className={styles.div8}>
          <p className={styles.q1}>Q 51</p>
        </div>
        <div className={styles.div49}>
          <p className={styles.q1}>Q 50</p>
        </div>
        <div className={styles.div50}>
          <p className={styles.q1}>Q 53</p>
        </div>
        <div className={styles.div51}>
          <p className={styles.q1}>Q 52</p>
        </div>
        <div className={styles.div52}>
          <p className={styles.q1}>Q 55</p>
        </div>
        <div className={styles.div53}>
          <p className={styles.q1}>Q 54</p>
        </div>
        <div className={styles.div54}>
          <p className={styles.q1}>Q 57</p>
        </div>
        <div className={styles.div55}>
          <p className={styles.q1}>Q 56</p>
        </div>
        <div className={styles.div56}>
          <p className={styles.q1}>Q 59</p>
        </div>
        <div className={styles.div57}>
          <p className={styles.q1}>Q 58</p>
        </div>
        <div className={styles.div18}>
          <p className={styles.q1}>Q 61</p>
        </div>
        <div className={styles.div19}>
          <p className={styles.q1}>Q 60</p>
        </div>
        <div className={styles.div20}>
          <p className={styles.q1}>Q 63</p>
        </div>
        <div className={styles.div21}>
          <p className={styles.q1}>Q 62</p>
        </div>
        <div className={styles.div22}>
          <p className={styles.q1}>Q 65</p>
        </div>
        <div className={styles.div23}>
          <p className={styles.q1}>Q 64</p>
        </div>
        <div className={styles.div24}>
          <p className={styles.q1}>Q 67</p>
        </div>
        <div className={styles.div25}>
          <p className={styles.q1}>Q 66</p>
        </div>
        <div className={styles.div26}>
          <p className={styles.q1}>Q 69</p>
        </div>
        <div className={styles.div27}>
          <p className={styles.q1}>Q 71</p>
        </div>
        <div className={styles.div28}>
          <p className={styles.q1}>Q 70</p>
        </div>
        <div className={styles.div29}>
          <p className={styles.q1}>Q 73</p>
        </div>
        <div className={styles.div30}>
          <p className={styles.q1}>Q 72</p>
        </div>
        <div className={styles.div31}>
          <p className={styles.q1}>Q 75</p>
        </div>
        <div className={styles.div32}>
          <p className={styles.q1}>Q 74</p>
        </div>
        <div className={styles.div33}>
          <p className={styles.q1}>Q 77</p>
        </div>
        <div className={styles.div34}>
          <p className={styles.q1}>Q 76</p>
        </div>
        <div className={styles.div35}>
          <p className={styles.q1}>Q 79</p>
        </div>
        <div className={styles.div36}>
          <p className={styles.q1}>Q 78</p>
        </div>
        <div className={styles.div38}>
          <p className={styles.q1}>Q 80</p>
        </div>
        <div className={styles.div39}>
          <p className={styles.q1}>Q 68</p>
        </div>
      </div>
      <div className={styles.noOfQuesAttempted01}>No of Ques Attempted: 01</div>
      <div className={styles.noOfQuesLeft79}>No of Ques Left: 79</div>
    </div>
  );
};

export default Desktop9;
