import React from "react";

import style from "./body.module.scss";

import momoDot from "../../assets/map-momoDot.svg"
import momoDotRed from "../../assets/map-momoDotRed.svg"

const BodyPart = ({bodyPart}) => {
    const Heart = () => {
        return (<img alt="icon" src={momoDot} className={style.momoHeartDot}/>)
    }
    const Head = () => {
        return (<img alt="icon" src={momoDot} className={style.momoHeadDot}/>)
    }
    const Eye = () => {
        return (<img alt="icon" src={momoDotRed} className={style.momoEyeDot}/>)
    }
    const Hand = () => {
        return (<img alt="icon" src={momoDotRed} className={style.momoHandDot}/>)
    }
    const Chest = () => {
        return (<img alt="icon" src={momoDot} className={style.momoChestDot}/>)
    }
    const Torso = () => {
        return (<img alt="icon" src={momoDot} className={style.momoTorsoDot}/>)
    }
    const Leg = () => {
        return (<img alt="icon" src={momoDot} className={style.momoLegDot}/>)
    }
    return (
        bodyPart === "chest" ? Chest(): 
        bodyPart === "hand" ? Hand() : 
        bodyPart === "torso" ? Torso() : 
        bodyPart === "leg" ? Leg() : 
        bodyPart === "eye" ? Eye() : 
        bodyPart === "head"? Head() : Heart()
    );
    
}
export default BodyPart;