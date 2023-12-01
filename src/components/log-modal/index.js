import React from 'react';
import style from "./modal.module.scss";
import SymptomTable from "../symptom-table"
import {useTheme} from "../theme-color";

const LogModal = ({ isOpen, onClose }) => {
    const { theme} = useTheme();
  if (!isOpen) return null;
  
  const logSymtpomsBGColor = {background: theme === "yellow" ? "rgba(255, 197, 98, 0.50)" : 
                                theme === "blue" ? "rgba(66, 95, 128, 0.50)" :
                                "rgba(246, 162, 144, 0.50)"}
  return (
    <div className="modal">
      <div className="modal-content">
        <div className={style.modalContainer}>
            <div className={style.mainContainer}>
                <div className={style.subtitle}>
                    Log for Friday, May 22, 2023
                </div>
                <div className={style.todayRow}>
                    <div className={style.symptomSeverityContainer}>
                        <SymptomTable></SymptomTable>
                    </div>
                    <div className={style.note}>
                        <p>Notes:</p>
                    </div>
                    <div className={style.logSymptomButton} style= {logSymtpomsBGColor} onClick={onClose}>
                        <p>Close</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LogModal;