import {React, useState, useEffect, useRef} from "react";
import { Link, useLocation } from "react-router-dom";
import {useTheme} from "../theme-color";

import style from "./symptombox.module.scss"

const SymptomBox = ({symptomName, icon, isClicked}) => {
    const { theme} = useTheme();
    const chosenBoxStyle = {background: theme === "yellow" ? "rgba(255, 197, 98, 0.50)" : 
                                    theme === "blue" ? "rgba(66, 95, 128, 0.50)" :
                                    "rgba(246, 162, 144, 0.50)",
                        border: theme === "yellow" ? "2px solid rgba(255, 197, 98, 0.50)":
                                theme === "blue" ? "2px solid rgba(66, 95, 128, 0.50)":
                                "2px solid rgba(246, 162, 144, 0.50)"};
    const boxStyle = isClicked ? chosenBoxStyle: {};
    const pStyle = isClicked ? {color: "#FFF"} : {};
    return (
            <div className={style.symptomBox} style = {boxStyle}>
                {icon ? <img alt="icon" src={icon} />: <></>}
                <p style = {pStyle}>{symptomName}</p>
            </div>
    );
  };

  export default SymptomBox;