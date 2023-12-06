import React from 'react';
import style from "./createModal.module.scss";
import SymptomTable from "../symptom-table"
import {useTheme} from "../theme-color";

import brainIcon from "../../assets/community-brainIcon.svg";
import dropDownIcon from "../../assets/community-dropDownIcon.svg"

const CreatePostModal = ({ isOpen, onClose, startingCategory }) => {
    const { theme} = useTheme();
  if (!isOpen) return null;
  
  const postBGColor = {background: theme === "yellow" ? "rgba(255, 197, 98, 0.50)" : 
                                theme === "blue" ? "rgba(66, 95, 128, 0.50)" :
                                "rgba(246, 162, 144, 0.50)"}
  const category = startingCategory ? startingCategory : "Mental Health";
  return (
    <div className="modal">
      <div className="modal-content">
        <div className={style.modalContainer}>
            <div className={style.mainContainer}>
                <div className={style.title}>
                    Create a Post
                </div>
                <div className={style.content}>
                    <div className={style.categoryRow}>
                        <img alt= "icon" src={brainIcon}></img>
                        <p>{category}</p>
                        <img alt="icon" src={dropDownIcon} style = {{width : "24px", height : "24px", alignSelf: "flex-end", cursor:"pointer"}}></img>
                    </div>
                    <div className={style.titleBox}>
                        <p>Title...</p>
                    </div>
                    <div className={style.bodyBox}>
                        <p>Body Text...</p>
                    </div>
                    <div className={style.postButton} style= {postBGColor} onClick={onClose}>
                        <p>Post</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;