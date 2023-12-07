import {React, useState, useEffect, useRef} from "react";
import { Link, useLocation } from "react-router-dom";
import {useTheme} from "../theme-color";

import style from "./symptomTable.module.scss"
import vaginalIcon from "../../assets/tracking-vaginalDryness.svg";
import jointMuscleIcon from "../../assets/tracking-jointMuscle.svg";
import sleepDisturbancesIcon from "../../assets/tracking-sleepDisturbances.svg";
import musclePainIcon from "../../assets/tracking-jointMuscle.svg";
import sleepIcon from "../../assets/tracking-sleepDisturbances.svg";
import brainFogIcon from "../../assets/tracking-brainFog.svg";
import fatigueIcon from "../../assets/tracking-fatigue.svg";
import coldFlashesIcon from "../../assets/tracking-coldFlashes.svg";
import anxietyIcon from "../../assets/tracking-anxiety.svg";
import concetrationIcon from "../../assets/tracking-concetration.svg";
import nightsweatsIcon from "../../assets/tracking-nightsweats.svg";

const SymptomTable = ({isToday}) => {
        const Row = ({icon, symptomName, severity}) => {
            const startingSeverity = severity ? severity : "";    
            const [chosenSeverity, setChosenSeverity] = useState(startingSeverity);
            
            const { theme} = useTheme();
            const bgColor = {background: theme === "yellow" ? 'rgba(255, 197, 98, 0.50)' : 
                                    theme === "blue" ?"rgba(66, 95, 128, 0.50)" : 
                                    "rgba(246, 162, 144, 0.50)"};
            const handleSeverityChosen = (Severity) => {
                const severityData = Severity === chosenSeverity ? "" : Severity;
                if (Severity === chosenSeverity) {
                    console.log(Severity + ' is unclicked!');
                } else {
                    console.log(Severity + ' is clicked!');
                }
                setChosenSeverity(severityData);
                 //Update row symptom data
                 //TODO - do we allow for past day edits?
               
                 setTodayDataList(prevData =>
                    prevData.map(symptom =>
                      symptom.symptomName === symptomName ? { ...symptom, severity: severityData } : symptom
                    )
                );
                //Update box button to true if not already
                setTodaySymptomBoxData(prevData =>
                    prevData.map(symptom =>
                      symptom.symptomName === symptomName ? { ...symptom, isChosen: true } : symptom
                    )
                );
                
            };
            
            return (
                <div className={style.symptomRow}>
                        <div className={style.symptomDescription}>
                            {icon ? <img alt="icon" src={icon} />: <></>}
                            <span>{symptomName}</span>
                        </div>
                        
                        <div className={style.severityScale}>
                            <div className={style.mildUnchecked} onClick = {() => handleSeverityChosen("mild")} style = {(chosenSeverity === "mild" ? bgColor : {})} ></div>
                            <div className={style.moderateUnchecked } onClick = {() => handleSeverityChosen("moderate")} style = {chosenSeverity === "moderate" ? bgColor : {} }></div>
                            <div className={style.severeUnchecked} onClick = {() => handleSeverityChosen("severe")} style = {chosenSeverity === "severe" ? bgColor : {}} ></div>
                        </div>
                </div>
            );
        }

        const SymptomBox = ({symptomName, icon, isClicked}) => {
            const { theme} = useTheme();
            const chosenBoxStyle = {background: theme === "yellow" ? "rgba(255, 197, 98, 0.50)" : 
                                            theme === "blue" ? "rgba(66, 95, 128, 0.50)" :
                                            "rgba(246, 162, 144, 0.50)",
                                border: theme === "yellow" ? "2px solid rgba(255, 197, 98, 0.50)":
                                        theme === "blue" ? "2px solid rgba(66, 95, 128, 0.50)":
                                        "2px solid rgba(246, 162, 144, 0.50)"};
            const [isChosen, setIsChosen] = useState(isClicked);
            const boxStyle = isChosen ? chosenBoxStyle: {};
            const pStyle = isChosen ? {color: "#FFF"} : {};
            const handleSymptomClicked = () => {
                console.log(symptomName + 'clicked!');
                if (isChosen) {
                    //already chosen -> need to remove from sampleSymptomData
                    console.log(symptomName + ' removing from symptom row!');
                    //remove row
                    setTodayDataList(prevData =>
                        prevData.filter(symptom => symptom.symptomName !== symptomName)
                      );
                } else {
                    //add to sampleSymptom Data
                    console.log(symptomName + ' adding to symptom row!');
                    const newData = {
                        symptomName : symptomName,
                        icon : icon,
                    }
                    //Update Rows
                    const symptomRowDataPrev = searchSymptomByName(symptomName);
                    if (symptomRowDataPrev === null) {
                        setTodayDataList(prevData => [...prevData, newData]);
                    }
                    
                    //const prevSymptomBoxData = searchSymptomByName(symptomName);
                    //prevSymptomBoxData.isClicked = true;
                     
                    



                    //console.log(prevSymptomBoxData.symptomName);
                }
                //Update box button
                setTodaySymptomBoxData(prevData =>
                    prevData.map(symptom =>
                      symptom.symptomName === symptomName ? { ...symptom, isChosen: !symptom.isChosen } : symptom
                    )
                );
                setIsChosen(!isChosen);
            };
            return (
                    <div className={style.symptomBox} style = {boxStyle} onClick={handleSymptomClicked}>
                        {icon ? <img alt="icon" src={icon} />: <></>}
                        <p style = {pStyle}>{symptomName}</p>
                    </div>
            );
        };
        const sampleSymptomDataHistory = [
            {   symptomName: "Vaginal Dryness",
                icon: vaginalIcon,
                severity: "severe"},
            {   symptomName: "Joint/Muscle Pain",
                icon: jointMuscleIcon,
                severity: "mild"},
            {   symptomName: "Sleep Disturbances",
                icon: sleepDisturbancesIcon,
                severity: "mild"},
            
        ];
        const sampleSymptomData = [
            {   symptomName: "Vaginal Dryness",
                icon: vaginalIcon},
            {   symptomName: "Joint/Muscle Pain",
                icon: jointMuscleIcon,},
            {   symptomName: "Sleep Disturbances",
                icon: sleepDisturbancesIcon,},
            
        ];

        const symptomBoxData = [
            {   symptomName: "Brain Fog",
                icon: brainFogIcon,
                isChosen: false},
                {   symptomName: "Fatigue",
                icon: fatigueIcon,
                isChosen: false},
                {   symptomName: "Cold Flashes",
                icon: coldFlashesIcon,
                isChosen: false},
                {   symptomName: "Vaginal Dryness",
                icon: vaginalIcon,
                isChosen: false},
                {   symptomName: "Anxiety",
                icon: anxietyIcon,
                isChosen: false},
                {   symptomName: "Concentration Issues",
                icon: concetrationIcon,
                isChosen: false},
                {   symptomName: "Hot Flashes",
                icon: nightsweatsIcon,
                isChosen: false},
                {   symptomName: "Night Sweats",
                icon: nightsweatsIcon,
                isChosen: false},
                {   symptomName: "Joint/Muscle Pain",
                icon: musclePainIcon,
                isChosen: false},
                {   symptomName: "Sleep Disturbances",
                icon: sleepIcon,
                isChosen: false},

        ];
    const [todayDataList, setTodayDataList] = useState(sampleSymptomData);
    const [todaySymptomBoxData, setTodaySymptomBoxData] = useState(symptomBoxData);

    const searchSymptomByName = (name) => {
        const foundSymptom = todayDataList.find(symptom => symptom.symptomName === name);
        console.log("found " + foundSymptom);
        return foundSymptom || null;
    };
//const SymptomTable = ({isToday}) => {
    const dataToUse = isToday ? todayDataList : sampleSymptomDataHistory;
    return (
        <div className={style.container}>
            <div className={style.descriptionRow}>
                <div className={style.spacer}></div>
                <div className={style.severityScale}>
                    <div className={style.severity}>
                        Mild
                    </div>
                    <div className={style.severity}>
                        Moderate
                    </div>
                    <div className={style.severity}>
                        Severe
                    </div>
                </div>
            </div>
            {dataToUse?.map(({symptomName, icon, severity}) => {
                    return <Row icon = {icon} symptomName={symptomName} severity={severity}/>;
                })}
            {isToday ? <div className={style.symptomChoicesContainer}>
                        {todaySymptomBoxData?.map(({symptomName, icon, isChosen}) => {
                            return <SymptomBox icon = {icon} symptomName={symptomName} isClicked={isChosen}/>;
                        })} 
            </div>: <></>}
        </div>
    );
  };

  export default SymptomTable;