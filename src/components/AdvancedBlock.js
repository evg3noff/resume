import styles from "./advancedBlock.module.css"; 
import React from 'react';

const AdvancedBlock = ({textOption1, textOption2, textOption3, textOption4, value, onActive, onClick, type}) => {
    if (type == 1){
        return <div className={styles.advancedBlock_body}>
                <div className={styles.advancedBlock_body_wrapper_column}>
                    <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption1}</span>
                    <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption2}</span>
                    <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption3}</span>
                    <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption4}</span>
                </div>
                <div className={styles.advancedBlock_body_wrapper_column}>
                    <div className={styles.advancedBlock_body_wrapper_column_progress}>
                        <div style={{ width:`${value}%`}} className={styles.advancedBlock_body_wrapper_column_progress_filled}></div>
                    </div>
                    <div className={styles.advancedBlock_body_wrapper_column_progress}>
                        <div style={{ width:`${value}%`}} className={styles.advancedBlock_body_wrapper_column_progress_filled}></div>
                    </div>
                    <div className={styles.advancedBlock_body_wrapper_column_progress}>
                        <div style={{ width:`${value}%`}} className={styles.advancedBlock_body_wrapper_column_progress_filled}></div>
                    </div>
                    <div className={styles.advancedBlock_body_wrapper_column_progress}>
                        <div style={{ width:`${value}%`}} className={styles.advancedBlock_body_wrapper_column_progress_filled}></div>
                    </div>
                </div>
    </div>
    }
    if (type == 2){
        return <div className={styles.advancedBlock_body}>
                <div className={styles.advancedBlock_body_wrapper_column}>
                    <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption1}</span>
                    <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption2}</span>
                    <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption3}</span>
                    <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption4}</span>
                </div>
                <div className={styles.advancedBlock_body_wrapper_column}>
                    <input className={styles.advancedBlock_body_wrapper_column_progress} value={value}></input>
                </div>
    </div>
    }
};
export default AdvancedBlock;