import React from "react";

import style from "./symptom.module.scss";
import moderate from "../../assets/home-moderateSymptom.svg";
import extreme from "../../assets/home-extremeSymptom.svg";

export default function Symptom({symptomName, severity}) {
    const symptomSeverity = severity === "moderate" ? moderate : extreme;
    return (
        <div className={style.symptomContainer}>
                <div className={style.imageContainer}>
                  <img alt="icon" src={symptomSeverity} />
                </div>
                <div className={style.textContainer}> 
                  <p className={style.symptom}> {symptomName} </p>
                </div>
              </div>
    );
}