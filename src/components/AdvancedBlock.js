import styles from "./advancedBlock.module.css"; 
import React from 'react';
import classNames from 'classnames';

const AdvancedBlock = ({activeIcon, onClick}) => {
        if (activeIcon === 1){
            const textOption1 = 'Func';
            const textOption2 = 'DOM';
            const textOption3 = 'ES6+';
            const textOption4 = 'OOP';
            const value1 = 85;
            const value2 = 100;
            const value3 = 80;
            const value4 = 80;
            return <div onClick={onClick} className={styles.advancedBlock_body}>
                    <div className={styles.advancedBlock_body_wrapper_column}>
                        <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption1}</span>
                        <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption2}</span>
                        <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption3}</span>
                        <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption4}</span>
                    </div>
                    <div className={styles.advancedBlock_body_wrapper_column}>
                        <div className={styles.advancedBlock_body_wrapper_column_progress}>
                            <div style={{ width:`${value1}%`}} className={styles.advancedBlock_body_wrapper_column_progress_filled}></div>
                        </div>
                        <div className={styles.advancedBlock_body_wrapper_column_progress}>
                            <div style={{ width:`${value2}%`}} className={styles.advancedBlock_body_wrapper_column_progress_filled}></div>
                        </div>
                        <div className={styles.advancedBlock_body_wrapper_column_progress}>
                            <div style={{ width:`${value3}%`}} className={styles.advancedBlock_body_wrapper_column_progress_filled}></div>
                        </div>
                        <div className={styles.advancedBlock_body_wrapper_column_progress}>
                            <div style={{ width:`${value4}%`}} className={styles.advancedBlock_body_wrapper_column_progress_filled}></div>
                        </div>
                    </div>
        </div>
        }
        if (activeIcon === 2){
            const textOption1 = 'CSS';
            const textOption2 = 'HTML';
            const textOption3 = 'SASS';
            const textOption4 = 'LESS';
            const value1 = 90;
            const value2 = 95;
            const value3 = 80;
            const value4 = 85;
            return <div onClick={onClick} className={styles.advancedBlock_body}>
            <div className={styles.advancedBlock_body_wrapper_column}>
                <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption1}</span>
                <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption2}</span>
                <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption3}</span>
                <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption4}</span>
            </div>
            <div className={styles.advancedBlock_body_wrapper_column}>
                <div className={styles.advancedBlock_body_wrapper_column_progress}>
                    <div style={{ width:`${value1}%`}} className={styles.advancedBlock_body_wrapper_column_progress_filled}></div>
                </div>
                <div className={styles.advancedBlock_body_wrapper_column_progress}>
                    <div style={{ width:`${value2}%`}} className={styles.advancedBlock_body_wrapper_column_progress_filled}></div>
                </div>
                <div className={styles.advancedBlock_body_wrapper_column_progress}>
                    <div style={{ width:`${value3}%`}} className={styles.advancedBlock_body_wrapper_column_progress_filled}></div>
                </div>
                <div className={styles.advancedBlock_body_wrapper_column_progress}>
                    <div style={{ width:`${value4}%`}} className={styles.advancedBlock_body_wrapper_column_progress_filled}></div>
                </div>
            </div>
    </div>
        }
        if (activeIcon === 3){
            const textOption1 = 'React';
            const textOption2 = 'Angular';
            const value1 = 50;
            const value2 = 30;
            return <div onClick={onClick} className={styles.advancedBlock_body}>
            <div className={styles.advancedBlock_body_wrapper_column}>
                <span className={styles.advancedBlock_body_wrapper_column_text}>{textOption1}</span>
                <span style={{fontSize: 'xx-large'}} className={styles.advancedBlock_body_wrapper_column_text}>{textOption2}</span>
            </div>
            <div className={styles.advancedBlock_body_wrapper_column}>
                <div className={styles.advancedBlock_body_wrapper_column_progress}>
                    <div style={{ width:`${value1}%`}} className={classNames(styles.advancedBlock_body_wrapper_column_progress_filled, styles.advancedBlock_body_wrapper_column_progress_filled_power_up)}></div>
                </div>
                <div className={styles.advancedBlock_body_wrapper_column_progress}>
                    <div style={{ width:`${value2}%`}} className={styles.advancedBlock_body_wrapper_column_progress_filled}></div>
                </div>
            </div>
    </div>
    }
};
export default AdvancedBlock;