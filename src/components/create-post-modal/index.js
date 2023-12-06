import {React, useState} from 'react';
import style from "./createModal.module.scss";
import SymptomTable from "../symptom-table"
import {useTheme} from "../theme-color";

import brainIcon from "../../assets/community-brainIcon.svg";
import dropDownIcon from "../../assets/community-dropDownIcon.svg"

const categoryData = [
    { title: "General" },
    { title: "Mental Health" },
    { title: "Physical Health" },
    { title: "Fitness" },
    { title: "Lifestyle" },
    { title: "Healthy Eating" },
    { title: "Opinion" },
    { title: "Sex" },
  ];

const CreatePostModal = ({ isOpen, onClose, startingCategory }) => {
    const [inputValue, setInputValue] = useState('hi');

    const { theme} = useTheme();
  if (!isOpen) return null;
  
  const postBGColor = {background: theme === "yellow" ? "rgba(255, 197, 98, 0.50)" : 
                                theme === "blue" ? "rgba(66, 95, 128, 0.50)" :
                                "rgba(246, 162, 144, 0.50)"}
  const category = startingCategory ? startingCategory : "Mental Health";

  
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your logic for handling form submission with the input value
    console.log('Submitted value:', inputValue);
  };
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
                        <div className={style.dropdown}>
                            <select>
                            <option value="option1">{category}</option>
                            {categoryData?.map(({ title }, i) => {
                                    return ( title !==category ? 
                                        <option>{title}</option> : <></>
                                    );
                                    })}
                            </select>
                            <img alt="Down Arrow" src={dropDownIcon}></img>
                        </div>
                    </div>
                    <div className={style.titleBox}>
                        <p>Title...</p>
                        {/*<form onSubmit={handleSubmit}>
                            <label>
                            Title..
                                <input
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                />
                            </label>

                            <button type="submit">Submit</button>
                                </form>*/}
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