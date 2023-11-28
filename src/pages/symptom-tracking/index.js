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

const SymptomTracking = () => {
  const [showVideo, setShowVideo] = useState(false);
  const componentRef = useRef();
  const { theme} = useTheme();
  const headingBackgroundColor = {background: theme === "yellow" ? "#FFE6BB" : theme === "blue" ? "#E4F1E5" : "#FFEDEB"};
  const chosenBoxStyle = {background: theme === "yellow" ? "rgba(255, 197, 98, 0.50)" : 
                                    theme === "blue" ? "rgba(66, 95, 128, 0.50)" :
                                    "rgba(246, 162, 144, 0.50)",
                        border: theme === "yellow" ? "2px solid rgba(255, 197, 98, 0.50)":
                                theme === "blue" ? "2px solid rgba(66, 95, 128, 0.50)":
                                "2px solid rgba(246, 162, 144, 0.50)"};
  const logSymtpomsBGColor = {background: theme === "yellow" ? "rgba(255, 197, 98, 0.50)" : 
                                theme === "blue" ? "rgba(66, 95, 128, 0.50)" :
                                "rgba(246, 162, 144, 0.50)"}


  const handleClickOutside = (event) => {
    if (componentRef.current && !componentRef.current.contains(event.target)) {
      setShowVideo(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    return (
      <div className={style.container}>
        <div className={style.innercontainer}>
            <div className={style.navigation}>
                <div className={style.child1}>
                    <div className={style.title}>My Tracking</div>
                </div>
                <div className={style.child2}>
                    <div className={style.currentSelection} style={headingBackgroundColor}>
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
                        <p>Today's Log</p>
                    </div>
                </div>
                <div className={style.child2}>
                    <div className={style.option}>
                        <p>Insights</p>
                    </div>
                </div>
            </div>
            {/* Monthly Log */}
            <div className={style.rowlog}>
                <div className={style.title}>
                    Monthly Calendar
                    
                </div>
                <div className={style.monthRow}>
                    <LogTracker trackerType= {"month"} month={"Apr"}></LogTracker>
                    <LogTracker trackerType= {"month"} month={"May"}></LogTracker>

                </div>
                
            </div>
            <div className={style.rowSeparator}></div>
            {/* Weekly Log */}
            <div className={style.rowlog}>
                <div className={style.title}>
                    This Week's Log
                </div>
                <div className={style.subtitle}>
                    Monday, May 18 - Sunday, May 24
                </div>
                <LogTracker trackerType= {"week"}></LogTracker>
            </div>
            <div className={style.rowSeparator}></div>
            {/* Today's Log */}
            <div className={style.rowlog}>
                <div className={style.title}>
                    Today's Log
                </div>
                <div className={style.subtitle}>
                    Friday, May 22, 2023
                </div>
                <div className={style.todayRow}>
                    <div className={style.symptomSeverityContainer}>
                        <SymptomTable></SymptomTable>
                    </div>
                    <div className={style.symptomChoicesContainer}>
                        {symptomBoxData?.map(({symptomName, icon, isChosen}) => {
                            return <SymptomBox icon = {icon} symptomName={symptomName} isClicked={isChosen}/>;
                        })}
                    </div>
                    <div className={style.note}>
                        <p>Notes:</p>
                    </div>
                    <div className={style.logSymptomButton} style= {logSymtpomsBGColor}>
                        <p>Log Symptoms</p>
                    </div>
                </div>
                
            </div>
            <div className={style.rowSeparator}></div>
            {/* Insights Log */}
            <div className={style.rowlog}>
                <div className={style.title}>
                    Insights
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
        isChosen: true},
        {   symptomName: "Concentration Issues",
        icon: concetrationIcon,
        isChosen: false},
        {   symptomName: "Hot Flashes",
        icon: concetrationIcon,
        isChosen: false},
        {   symptomName: "Night Sweats",
        icon: nightsweatsIcon,
        isChosen: false},
        {   symptomName: "Joint/Muscle Pain",
        icon: musclePainIcon,
        isChosen: true},
        {   symptomName: "Sleep Disturbances",
        icon: sleepIcon,
        isChosen: true},

  ];
  export default SymptomTracking;