import {React, useState, useEffect, useRef} from "react";
import { Link, useLocation } from "react-router-dom";
import {useTheme} from "../../components/theme-color";


import style from "./symptomtracking.module.scss";
import moreInfoIcon from "../../assets/resources-moreinfo.svg";
import playIcon from "../../assets/resources-play.svg";
import VideoReel from "../../components/video-reel";
import LogTracker from "../../components/log-tracker"
import SymptomTable from "../../components/symptom-table";
import SymptomBox from "../../components/symptom-box";
import vaginalIcon from "../../assets/tracking-vaginalDryness.svg";
import musclePainIcon from "../../assets/tracking-jointMuscle.svg";
import sleepIcon from "../../assets/tracking-sleepDisturbances.svg";
import brainFogIcon from "../../assets/tracking-brainFog.svg";
import fatigueIcon from "../../assets/tracking-fatigue.svg";
import coldFlashesIcon from "../../assets/tracking-coldFlashes.svg";
import anxietyIcon from "../../assets/tracking-anxiety.svg";
import concetrationIcon from "../../assets/tracking-concetration.svg";
import nightsweatsIcon from "../../assets/tracking-nightsweats.svg";
import LogModal from "../../components/log-modal";
import TrendsGraph from "../../components/trends-graph"

const SymptomTracking = () => {

  const { theme} = useTheme();
  const headingBackgroundColor = {background: theme === "yellow" ? "#FFE6BB" : theme === "blue" ? "#E4F1E5" : "#F6D1CC"};
  const logSymtpomsBGColor = {background: theme === "yellow" ? "rgba(255, 197, 98, 0.50)" : 
                                theme === "blue" ? "rgba(66, 95, 128, 0.50)" :
                                "rgba(246, 162, 144, 0.50)"}

    const [logSymptomsText, setLogSymptomsText]  = useState("Log Symptoms");
    const [inputNote, setInputNote] = useState('');
    const [monthData, setMonthData] = useState(sampleMonthData);
    const handleNoteChange = (event) => {
        setInputNote(event.target.value);
    };

  const handleCompletedLog = () => {
    console.log("symptom logging completed")
     //Update logged symptoms
     setMonthData(prevData =>
        prevData.map(symptom =>
          symptom.dayText === "28" ? { ...symptom, color: "pink" } : symptom
        )
    );
    setLogSymptomsText('Thanks for Logging!')
  };


    return (
    <div className={style.container}>
        
      <div className={style.mainContainer}>
        <div className={style.innercontainer}>
            <div className={style.navigation}>
                <div className={style.child1}>
                    <div className={style.title}>My Tracking</div>
                </div>
                <div className={style.child2}>
                    <div className={style.currentSelection} style={headingBackgroundColor}>
                        <p>Today's Log</p>
                    </div>
                </div>
                <div className={style.child2}>
                    <div className={style.option} >
                        <p>Monthly Calendar</p>
                    </div>
                </div>
                <div className={style.child2}>
                    <div className={style.option}>
                        <p>Weekly Log</p>
                    </div>
                </div>
                
                <div className={style.child2}>
                    <div className={style.option}>
                        <p>Insights</p>
                    </div>
                </div>
            </div>
            {/* Today's Log */}
            <div className={style.rowlog}>
                <div className={style.title} style={{textAlign: "left"}}>
                    Today's Log
                </div>
                <div className={style.subtitle}>
                    Thursday, April 28, 2023
                </div>
                <div className={style.todayRow}>
                    <div className={style.symptomSeverityContainer}>
                        <SymptomTable isToday={true}></SymptomTable>
                    </div>
                    <div className={style.note}>

                        <textarea
                                type="text"
                                value={inputNote}
                                onChange={handleNoteChange}
                                placeholder="Notes:"
                                />
                    </div>
                    <div className={style.logSymptomButton} style= {logSymtpomsBGColor} onClick={() => handleCompletedLog()}>
                        <p>{logSymptomsText}</p>
                    </div>
                </div>
                
            </div>
            <div className={style.rowSeparator}></div>
            {/* Monthly Log */}
            <div className={style.rowlog}>
                <div className={style.title}>
                    Monthly Calendar
                    
                </div>
                <div className={style.monthRow}>
                    <LogTracker trackerType= {"month"} month={"Apr"} monthData={monthData}></LogTracker>
                    
                </div>
                
            </div>
            <div className={style.rowSeparator}></div>
            {/* Weekly Log */}
            <div className={style.rowlog}>
                <div className={style.title}>
                    This Week's Log
                </div>
                <div className={style.subtitle} style={{textAlign: "center"}}>
                    Sunday, April 24 - Saturday, April 30
                </div>
                <div className={style.weeklyRow}>
                    <LogTracker trackerType= {"week"} monthData={monthData}></LogTracker>
                </div>
            </div>
            <div className={style.rowSeparator}></div>
            
            {/* Insights Log */}
            <div className={style.rowlog}>
                <div className={style.title} style={{textAlign: "left"}}>
                    Insights
                </div>
                <TrendsGraph></TrendsGraph>
            </div>
            
        </div>
      </div>
      </div>
    );
  };

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
        {   symptomName: "Concentration Issues",
        icon: nightsweatsIcon,
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

  const sampleMonthData = [
    {   dayText: "1",
        color: "pink",
        dayOfWeek: "Friday",
    },
    {   dayText: "2",
        color: "pink",
        dayOfWeek: "Saturday",},
    {   dayText: "3",
        color: "pink",
        dayOfWeek: "Sunday",},
    {   dayText: "4",
        color: "pink",
        dayOfWeek: "Monday",},
    {   dayText: "5",
        color: "pink",
        dayOfWeek: "Tuesday",},
    {   dayText: "6",
        color: "pink",
        dayOfWeek: "Wednesday",},
    {   dayText: "7",
        color: "pink",
        dayOfWeek: "Thursday",},
    {   dayText: "8",
        color: "pink",
        dayOfWeek: "Friday",},
    {   dayText: "9",
        color: "pink",
        dayOfWeek: "Saturday",},
    {   dayText: "10",
        color: "pink",
        dayOfWeek: "Sunday",},
    {   dayText: "11",
        color: "pink",
        dayOfWeek: "Monday",},
    {   dayText: "12",
        color: "gray",
        dayOfWeek: "Tuesday",},
    {   dayText: "13",
        color: "pink",
        dayOfWeek: "Wednesday",},
    {   dayText: "14",
        color: "pink",
        dayOfWeek: "Thursday",},
    {   dayText: "15",
        color: "pink",
        dayOfWeek: "Friday",},
    {   dayText: "16",
        color: "pink",
        dayOfWeek: "Saturday",},
    {   dayText: "17",
        color: "pink",
        dayOfWeek: "Sunday",},
    {   dayText: "18",
        color: "pink",
        dayOfWeek: "Monday",},
    {   dayText: "19",
        color: "pink",
        dayOfWeek: "Tuesday",},
    {   dayText: "20",
        color: "gray",
        dayOfWeek: "Wednesday",},
    {   dayText: "21",
        color: "gray",
        dayOfWeek: "Thursday",},
    {   dayText: "22",
        color: "gray",
        dayOfWeek: "Friday",},
    {   dayText: "23",
        color: "pink",
        dayOfWeek: "Saturday",},
    {   dayText: "24",
        color: "pink",
        dayOfWeek: "Sunday",},
    {   dayText: "25",
        color: "pink",
        dayOfWeek: "Monday",},
    {   dayText: "26",
        color: "gray",
        dayOfWeek: "Tuesday",},
    {   dayText: "27",
        color: "pink",
        dayOfWeek: "Wednesday",},
    {   dayText: "28",
        color: "white",
        dayOfWeek: "Thursday",},
    {   dayText: "29",
        color: "white",
        dayOfWeek: "Friday",},
    {   dayText: "30",
        color: "white",
        dayOfWeek: "Saturday",},
]
  export default SymptomTracking;