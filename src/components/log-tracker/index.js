import {React, useState, useEffect, useRef} from "react";
import { Link, useLocation } from "react-router-dom";
import {useTheme} from "../theme-color";


import monthlyStyle from "./monthly.module.scss";
import weeklyStyle from "./weekly.module.scss";
import dailyStyle from "./daily.module.scss";
import grayCircle from "../../assets/tracking-grayCircle.svg";
import pinkCircle from "../../assets/tracking-pinkCircle.svg";
import whiteCircle from "../../assets/tracking-whiteCircle.svg";
import yellowCircle from "../../assets/tracking-yellowCircle.svg";
import blueCircle from "../../assets/tracking-blueCircle.svg";
import LogModal from "../../components/log-modal";


const Day = ({color, isNumber, dayText}) => {
    const componentRef = useRef();
    const { theme} = useTheme();
    const [showVideo, setShowVideo] = useState(false);
    const [isModalOpen, setModalOpen] = useState(false);
    const coloredCircle = theme === "yellow" ? yellowCircle : theme === "blue" ? blueCircle : pinkCircle;
    const colorWheel = color === "gray" ? grayCircle : color === "white" ? whiteCircle: coloredCircle;
    const dayType = isNumber ? dailyStyle.dayNumber: 
                    color === "gray" ? dailyStyle.dayOfWeekGray : 
                    color === "white" ? dailyStyle.dayOfWeekWhite: 
                    dailyStyle.dayOfWeekPink;
    const backgroundColor = {background: color === "pink" ? 
                                        (theme === "yellow" ? "rgba(255, 197, 98, 0.50)" : 
                                        theme === "blue" ? "rgba(66, 95, 128, 0.50)" : 
                                        "rgba(246, 162, 144, 0.50)"): "",
                            color : color === "white" ?
                                        ( theme === "yellow" ? "rgba(255, 197, 98, 0.50)" :
                                        theme === "blue" ? "rgba(66, 95, 128, 0.50)" :
                                        "rgba(246, 162, 144, 0.50)" ) : "#FFF"};
    const backgroundColorStyle = isNumber ? {} : backgroundColor; 
    const isClickable = color === "gray" ? {} : {cursor : "pointer"}

    const openModal = () => {
        if (color === "pink") {
            setModalOpen(true);
        }
    }

    const closeModal = () => setModalOpen(false);


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
        <div>
            <div className = {dailyStyle.modalContainer}>
                <LogModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        <div className={dailyStyle.container} style = {isClickable} onClick={openModal}>
            <div className={dayType} style={backgroundColorStyle}>
                {dayText}
            </div>
            <img alt="icon" src={colorWheel} />
        </div>
        </div>
    );
}

const sampleWeekData = [
        {   dayOfWeek: "M",
            color: "pink",},
        {   dayOfWeek: "T",
            color: "gray",},
        {   dayOfWeek: "W",
            color: "pink",},
        {   dayOfWeek: "T",
            color: "pink",},
        {   dayOfWeek: "F",
            color: "white",},
        {   dayOfWeek: "S",
            color: "white",},
        {   dayOfWeek: "S",
            color: "white",},
        
];
const sampleMonthData = [
        {   dayText: "1",
            color: "pink",
            dayOfWeek: "S",
        },
        {   dayText: "2",
            color: "pink",
            dayOfWeek: "S",},
        {   dayText: "3",
            color: "pink",
            dayOfWeek: "M",},
        {   dayText: "4",
            color: "pink",
            dayOfWeek: "T",},
        {   dayText: "5",
            color: "pink",
            dayOfWeek: "W",},
        {   dayText: "6",
            color: "pink",
            dayOfWeek: "T",},
        {   dayText: "7",
            color: "pink",
            dayOfWeek: "F",},
        {   dayText: "8",
            color: "pink",
            dayOfWeek: "S",},
        {   dayText: "9",
            color: "pink",
            dayOfWeek: "S",},
        {   dayText: "10",
            color: "pink",
            dayOfWeek: "M",},
        {   dayText: "11",
            color: "pink",
            dayOfWeek: "T",},
        {   dayText: "12",
            color: "gray",
            dayOfWeek: "W",},
        {   dayText: "13",
            color: "pink",
            dayOfWeek: "T",},
        {   dayText: "14",
            color: "pink",
            dayOfWeek: "F",},
        {   dayText: "15",
            color: "pink",
            dayOfWeek: "S",},
        {   dayText: "16",
            color: "pink",
            dayOfWeek: "S",},
        {   dayText: "17",
            color: "pink",
            dayOfWeek: "M",},
        {   dayText: "18",
            color: "pink",
            dayOfWeek: "T",},
        {   dayText: "19",
            color: "pink",
            dayOfWeek: "W",},
        {   dayText: "20",
            color: "gray",
            dayOfWeek: "T",},
        {   dayText: "21",
            color: "gray",
            dayOfWeek: "F",},
        {   dayText: "22",
            color: "gray",
            dayOfWeek: "S",},
        {   dayText: "23",
            color: "pink",
            dayOfWeek: "S",},
        {   dayText: "24",
            color: "gray",
            dayOfWeek: "M",},
        {   dayText: "25",
            color: "gray",
            dayOfWeek: "T",},
        {   dayText: "26",
            color: "pink",
            dayOfWeek: "W",},
        {   dayText: "27",
            color: "pink",
            dayOfWeek: "T",},
        {   dayText: "28",
            color: "pink",
            dayOfWeek: "F",},
        {   dayText: "29",
            color: "pink",
            dayOfWeek: "S",},
        {   dayText: "30",
            color: "pink",
            dayOfWeek: "S",},
]

const LogTracker = ({trackerType, month}) => {
    const { theme} = useTheme();
    const backgroundColor = {background: theme === "yellow" ? "#FFE6BB" : theme === "blue" ? "#E4F1E5" : "#FFEDEB"};

    const WeekView = () => {
        return (
            <div className={weeklyStyle.container} style={backgroundColor}>
               {sampleWeekData?.map(({color, dayOfWeek}) => {
                    return <Day color = {color} isNumber={false} dayText={dayOfWeek}/>;
                })}
            </div>
        );
    }
    const MonthView = (month) => {
        return (
            <div className={monthlyStyle.container} style={backgroundColor}>
                <div className={monthlyStyle.month}>
                    {month}
                </div>
                <div className={monthlyStyle.weeksContainer}>
                    <div className={monthlyStyle.weekRow}>
                        {sampleMonthData.slice(0,2)?.map(({color, dayText}) => {
                            return <Day color = {color} isNumber={true} dayText={dayText}/>;
                        })}
                    </div>
                    <div className={monthlyStyle.weekRow}>
                        {sampleMonthData.slice(2,9)?.map(({color, dayText}) => {
                                return <Day color = {color} isNumber={true} dayText={dayText}/>;
                        })}
                    </div>
                    <div className={monthlyStyle.weekRow}>
                        {sampleMonthData.slice(9,16)?.map(({color, dayText}) => {
                            return <Day color = {color} isNumber={true} dayText={dayText}/>;
                        })}
                    </div>
                    <div className={monthlyStyle.weekRow}>
                        {sampleMonthData.slice(16, 23)?.map(({color, dayText}) => {
                            return <Day color = {color} isNumber={true} dayText={dayText}/>;
                        })}
                    </div>
                    <div className={monthlyStyle.weekRow}>
                        {sampleMonthData.slice(23,30)?.map(({color, dayText}) => {
                            return <Day color = {color} isNumber={true} dayText={dayText}/>;
                        })}
                    </div>
                </div>
            
            </div>
        );
    }
    

    return (
        trackerType==="week" ? WeekView() : MonthView(month)
    );
  };

  export default LogTracker;