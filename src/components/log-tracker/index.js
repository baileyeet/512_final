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


const Day = ({color, isNumber, day, dayOfWeek}) => {
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
    const dayText = isNumber ? day: dayOfWeek[0];

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
                <LogModal isOpen={isModalOpen} onClose={closeModal} day={day} dayOfWeek={dayOfWeek}/>
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



const LogTracker = ({trackerType, month, monthData}) => {
    const { theme} = useTheme();
    const backgroundColor = {background: theme === "yellow" ? "#FFE6BB" : theme === "blue" ? "#E4F1E5" : "#FFEDEB"};

    const WeekView = () => {
        return (
            <div className={weeklyStyle.container} style={backgroundColor}>
               {monthData.slice(23,30)?.map(({color, dayOfWeek, dayText}) => {
                    return <Day color = {color} isNumber={false} day={dayText}dayOfWeek={dayOfWeek}/>;
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
                        {monthData.slice(0,2)?.map(({color, dayText, dayOfWeek}) => {
                            return <Day color = {color} isNumber={true} day={dayText} dayOfWeek={dayOfWeek}/>;
                        })}
                    </div>
                    <div className={monthlyStyle.weekRow}>
                        {monthData.slice(2,9)?.map(({color, dayText, dayOfWeek}) => {
                                return <Day color = {color} isNumber={true} day={dayText} dayOfWeek={dayOfWeek}/>;
                        })}
                    </div>
                    <div className={monthlyStyle.weekRow}>
                        {monthData.slice(9,16)?.map(({color, dayText, dayOfWeek}) => {
                            return <Day color = {color} isNumber={true} day={dayText} dayOfWeek={dayOfWeek}/>;
                        })}
                    </div>
                    <div className={monthlyStyle.weekRow}>
                        {monthData.slice(16, 23)?.map(({color, dayText, dayOfWeek}) => {
                            return <Day color = {color} isNumber={true} day={dayText} dayOfWeek={dayOfWeek}/>;
                        })}
                    </div>
                    <div className={monthlyStyle.weekRow}>
                        {monthData.slice(23,30)?.map(({color, dayText, dayOfWeek}) => {
                            return <Day color = {color} isNumber={true} day={dayText} dayOfWeek={dayOfWeek}/>;
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