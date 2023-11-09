import {React, useEffect, useState} from "react";

import style1 from "./symptoms.module.scss";
import style2 from "./symptoms2.module.scss";
import style3 from "./symptoms3.module.scss";
import momo1 from "../../assets/map-momo1.svg"
import momo1Heart from "../../assets/map-momoHeart.svg"
import momo2 from "../../assets/map-momo2.svg"
import momoDot from "../../assets/map-momoDot.svg"
import momoDotRed from "../../assets/map-momoDotRed.svg"
import rightArrowImg from "../../assets/rightArrow.png";
import BodyPart from "../../components/body-part-dots";

const SymptomMap = () => {
    const [mapStage, setMapStage] = useState("stage1");
    const [bodyPart, setBodyPart] = useState("heart");
    const [bodyPartHeading, setBodyPartHeading] = useState("");
    const [bodyPartDescription, setBodyPartDescription] = useState("");
  
    const handleHeartClicked = () => {
        console.log('heart clicked!');
        setMapStage("stage2");
    };
    const backArrowClicked = () => {
        setMapStage("stage2");
    };
    const handleDotClicked = (bodyPartChosen) => {
        console.log('Component clicked!');
        setMapStage("stage3");
        setBodyPart(bodyPartChosen);
        setBodyPartHeading(symptomData[bodyPart].heading);
        setBodyPartDescription(symptomData[bodyPart].description);
    };
    const symptomData = {
        "head": {heading: "Mood Changes", 
                    description: "As the production of hormones decreases, irritability, mood swings, depression, and anxiety can be experienced by some women.",
                },
        "eye": {heading: "Mood Changes", 
                description: "As the production of hormones decreases, irritability, mood swings, depression, and anxiety can be experienced by some women.",
            },
        "hand": {heading: "Mood Changes", 
            description: "As the production of hormones decreases, irritability, mood swings, depression, and anxiety can be experienced by some women.",
        },
        "chest": {heading: "Mood Changes", 
            description: "As the production of hormones decreases, irritability, mood swings, depression, and anxiety can be experienced by some women.",
        },
        "heart": {heading: "Mood Changes", 
            description: "As the production of hormones decreases, irritability, mood swings, depression, and anxiety can be experienced by some women.",
        },
        "torso": {heading: "Mood Changes", 
            description: "As the production of hormones decreases, irritability, mood swings, depression, and anxiety can be experienced by some women.",
        },
        "leg": {heading: "Mood Changes", 
            description: "As the production of hormones decreases, irritability, mood swings, depression, and anxiety can be experienced by some women.",
        },
    };
    const momoStage1 = () => {
        return (
            <div className={style1.container}>
                <div className={style1.child1}>
                    <div className={style1.overviewContainer}>
                        <div className={style1.overview}>
                        Hello, my friend. I'm <b>MoMo</b>. 
                        </div>
                        <div className={style1.overview}>
                        I'll guide you through understanding some potential changes you might encounter during menopause.
                        </div>
                    </div>
                </div>
                <div className={style1.child2}>
                    <div className={style1.imageContainer}>
                        <img alt="icon" src={momo1} className={style1.momo}/>
                        <img alt="icon" src={momo1Heart} className={style1.momoHeart} onClick={handleHeartClicked}/>
                    </div>
                
                </div>
            </div>
        );
    }
    const momoStage2 = () => {
        return (
            <div className={style2.container}>
                <div className={style2.headline}>
                Try moving your cursor over different body parts.
                </div>
                <div className={style2.imageContainer}>
                    <img alt="icon" src={momo2} className={style2.momo}/>
                    <div onClick={() => handleDotClicked('heart')}>
                        <BodyPart bodyPart={"heart"}></BodyPart>
                    </div>
                    <div onClick={() => handleDotClicked('head')}>
                        <BodyPart bodyPart={"head"}></BodyPart>
                    </div>
                    <div onClick={() => handleDotClicked('chest')}>
                        <BodyPart bodyPart={"chest"}></BodyPart>
                    </div>
                    <div onClick={() => handleDotClicked('hand')}>
                        <BodyPart bodyPart={"hand"}></BodyPart>
                    </div>
                    <div onClick={() => handleDotClicked('torso')}>
                        <BodyPart bodyPart={"torso"}></BodyPart>
                    </div>
                    <div onClick={() => handleDotClicked('leg')}>
                        <BodyPart bodyPart={"leg"}></BodyPart>
                    </div>
                    <div onClick={() => handleDotClicked('eye')}>
                        <BodyPart bodyPart={"eye"}></BodyPart>
                    </div>
                </div>
            </div>
        );
    }
    const momoStage3 = () => {
        return (
            <div className={style3.container}>
                <div className={style3.headline}>
                Try moving your cursor over different body parts.
                </div>
                <div className={style3.childContainer}>
                    <div className={style3.child1}>
                        <div></div>
                    </div>
                    <div className={style3.child2}>
                    <div className={style3.imageContainer}>
                        <img alt="icon" src={momo2} className={style3.momo}/>
                        <BodyPart bodyPart={bodyPart}></BodyPart>
                    </div>
                    </div>
                    <div className={style3.child3}>
                    <div className={style3.back}onClick={backArrowClicked}>
                        <img alt="arrow" src={rightArrowImg} />
                             Back
                        </div>
                        <div className={style3.infoHeading}>
                            {bodyPartHeading}
                        </div>
                        <div className={style3.infoDescription}>
                            {bodyPartDescription}
                        </div>
                        <p>Are you currently experiencing this symptom?</p>
                        <p>Yes, bring me to <a href="/resources">Resources</a> or <a href="/community">Community</a></p>
                        <p>Yes, add this symptom to <a href="/profile">My Tracking</a></p>
                    </div>
                </div>
            </div>
        );
    }
    

    return (
        mapStage==="stage3" ? momoStage3() : mapStage==="stage2" ? momoStage2() : momoStage1()
    );
}
export default SymptomMap;
