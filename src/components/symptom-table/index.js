import {React, useState, useEffect, useRef} from "react";
import { Link, useLocation } from "react-router-dom";
import {useTheme} from "../theme-color";

import style from "./symptomTable.module.scss"
import vaginalIcon from "../../assets/tracking-vaginalDryness.svg";
import jointMuscleIcon from "../../assets/tracking-jointMuscle.svg";
import sleepDisturbancesIcon from "../../assets/tracking-sleepDisturbances.svg";


const Row = ({icon, symptomName, severity}) => {
    const [chosenSeverity, setChosenSeverity] = useState("moderate");
    const [mild, setMild] = useState(style.mildUnchecked);
    const [styleModerate, setStyleModerate] = useState(style.moderateChecked);
    const [styleSevere, setStyleSevere] = useState(style.severeUnchecked);
    const { theme} = useTheme();
    const bgColor = {background: theme === "yellow" ? 'rgba(255, 197, 98, 0.50)' : 
                            theme === "blue" ?"rgba(66, 95, 128, 0.50)" : 
                            "rgba(246, 162, 144, 0.50)"};
    
    
    return (
        <div className={style.symptomRow}>
                <div className={style.symptomDescription}>
                    {icon ? <img alt="icon" src={icon} />: <></>}
                    <span>{symptomName}</span>
                </div>
                
                <div className={style.severityScale}>
                    <div className={style.mildUnchecked} style = {(chosenSeverity === "mild" ? bgColor : {})}></div>
                    <div className={style.moderateUnchecked }style = {chosenSeverity === "moderate" ? bgColor : {}}></div>
                    <div className={style.severeUnchecked} style = {chosenSeverity === "severe" ? bgColor : {}}></div>
                </div>
        </div>
    );
}

const sampleSymptomData = [
    {   symptomName: "Vaginal Dryness",
        icon: vaginalIcon,
        severity: "mild"},
    {   symptomName: "Joint/Muscle Pain",
        icon: jointMuscleIcon,
        severity: "mild"},
    {   symptomName: "Sleep Disturbances",
        icon: sleepDisturbancesIcon,
        severity: "mild"},
    
];
const SymptomTable = () => {
    
    return (
        <div className={style.container}>
            {sampleSymptomData?.map(({symptomName, icon, severity}) => {
                    return <Row icon = {icon} symptomName={symptomName} severity={severity}/>;
                })}
        </div>
    );
  };

  export default SymptomTable;