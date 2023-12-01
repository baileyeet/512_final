import {React, useState, useEffect, useRef} from "react";
import { Link, useLocation } from "react-router-dom";
import {useTheme} from "../theme-color";

import style from "./trends.module.scss"
import chosenCheckMark from "../../assets/tracking-chosenSymptomCheck.svg";
import greenSymptomCircle from "../../assets/tracking-greenSymptomCircle.svg";
import yellowSymptomCircle from "../../assets/tracking-yellowSymptomCircle.svg";
import unchosenSymptomCirlce from "../../assets/tracking-unchosenSymptom.svg";
import graph from "../../assets/tracking-graph.svg"

const SymptomOption = ({symptomName, isChosen}) => {
    const textStyle = isChosen ? style.chosenSymptom : style.unchosenSymptom;
    const symptomCircle = isChosen ? (symptomName === "Vaginal Dryness" ? greenSymptomCircle: yellowSymptomCircle): unchosenSymptomCirlce; 
    return (
        <div className={style.symptomOption}>
            <div className={style.checkMarkContainer}>
                {isChosen ? <img alt="icon" src={chosenCheckMark} />: <div></div>}
            </div>
            <div className={style.symptomCircle}>
                 <img alt="icon" src={symptomCircle} />
            </div>
            <span className={textStyle}>{symptomName}</span>
        </div>

    );
}

const sampleSymptomData = [
    {   symptomName: "Vaginal Dryness",
        isClicked: true},
    {   symptomName: "Joint/Muscle Pain",
        isClicked: true},
    {   symptomName: "Sleep Disturbances",
    isClicked: false},
    
];
const TrendsGraph = () => {
    const { theme} = useTheme();
    const bgColor = {background: theme === "yellow" ? 'rgba(255, 197, 98, 0.50)' : 
                            theme === "blue" ?"rgba(66, 95, 128, 0.50)" : 
                            "rgba(246, 162, 144, 0.50)"};
    const headingFontColor = {color: theme === "yellow" ? "#FFFFFF" :
                            theme === "blue" ? "#FFF": 
                        "#7B5148"};
    
    return (
        <div className={style.container}>
            <div className={style.child1}>
                <div className={style.optionRow}>
                    <div className={style.otherOption}>
                        <p>Today</p>
                    </div>
                    <div className={style.selectedOption} style = {bgColor}>
                        <p>Weekly Summary</p>
                    </div>
                    <div className={style.otherOption}>
                        <p>Overall Trend</p>
                    </div>
                </div>
                <div className={style.chosenSymptomsRow}>
                {sampleSymptomData?.map(({symptomName, isClicked}) => {
                    return <SymptomOption symptomName={symptomName} isChosen={isClicked}/>;
                })}
                </div>
                <div className={style.graphRow}>
                <img alt="icon" src={graph} />
                <div className={style.week}>
                    Week of 4/4/2023
                </div>
                </div>
                
            </div>
            <div className={style.child2} style ={bgColor}>
                <div className={style.heading} style = {headingFontColor}>
                    Suggestion for you
                </div>
                <div className={style.t}>
                    Your joint/muscle pain is more severe compared to last week. Temporarily reducing caffeine intake might help with your overall sleep quality. Read more about that here.
                </div>
                <div className={style.t}>
                Your vaginal dryness has improved significantly over the week! See what could be affecting that here.
                </div>
                <div className={style.heading} style = {headingFontColor}>
                    Your Notes
                </div>
                <div className={style.t}>
                Medical appointment w Dr. Andrew in 2 weeks.
                Talk to Shirley abt x. 
                </div>
            </div>
        </div>
    );
  };

  export default TrendsGraph;