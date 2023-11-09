import {React, useState} from "react";

import style1 from "./symptoms.module.scss";
import style2 from "./symptoms2.module.scss";
import style3 from "./symptoms3.module.scss";
import momo1 from "../../assets/map-momo1.svg"
import momo1Heart from "../../assets/map-momoHeart.svg"
import momo2 from "../../assets/map-momo2.svg"
import momoDot from "../../assets/map-momoDot.svg"
import momoDotRed from "../../assets/map-momoDotRed.svg"

const SymptomMap = () => {
    const [mapStage, setMapStage] = useState("stage1");
    const [bodyPart, setBodyPart] = useState("heart");
  
    const handleHeartClicked = () => {
        setMapStage("stage2");
    };
    const handleDotClicked = (bodyPartChosen) => {
        setMapStage("stage3");
        //setBodyPart(bodyPartChosen);
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
                    <img alt="icon" src={momoDot} className={style2.momoHeartDot} onClick={handleDotClicked}/>
                    <img alt="icon" src={momoDot} className={style2.momoDot} style={{top:45, left:180}}/>
                    <img alt="icon" src={momoDot} className={style2.momoDot} style={{top:190, left:160}}/>
                    <img alt="icon" src={momoDot} className={style2.momoDot} style={{top:225, left:180}}/>
                    <img alt="icon" src={momoDot} className={style2.momoDot} style={{top:450, left:130}}/>
                    <img alt="icon" src={momoDotRed} className={style2.momoDot} style={{top:180, left:60}}/>
                    <img alt="icon" src={momoDotRed} className={style2.momoDot} style={{top:55, left:215}}/>
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
                        <img alt="icon" src={momoDot} className={style3.momoHeartDot}/>
                    </div>
                    </div>
                    <div className={style3.child3}>
                        <div className={style3.infoHeading}>
                            Mood Changes
                        </div>
                        <div className={style3.infoDescription}>
                        As the production of hormones decreases, irritability, mood swings, depression, and anxiety can be experienced by some women.
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
