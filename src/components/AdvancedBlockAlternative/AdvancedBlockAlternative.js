import styles from "./advancedBlockAlternative.module.css"; 
import React from 'react';
import classNames from 'classnames';

const AdvancedBlockAlternative = ({activeIconAlt, onClick, type}) => {
    if (activeIconAlt === 4){
        return <div onClick={onClick} className={styles.advancedBlockAlternative_body}>
                    <div className={styles.advancedBlockAlternative_body_wrapper_for_content}>
                    <span className={styles.AdvancedBlockAlternative_body_wrapper_text}>Favorite source-code editors</span>
                    </div>
                <div className={styles.AdvancedBlockAlternative_circle}>
                    <div className={styles.AdvancedBlockAlternative_circle_outer}></div>
                    <div className={styles.AdvancedBlockAlternative_circle_inner}>
                        <div className={styles.AdvancedBlockAlternative_circle_inner_content}>
                            <span className={styles.AdvancedBlockAlternative_circle_inner_content_text}>VSCODE</span>
                        </div>
                    </div>
                </div>
            </div>
    }
    if (activeIconAlt === 5){
        return <div onClick={onClick} className={styles.advancedBlockAlternative_body}>
                    <div className={styles.advancedBlockAlternative_body_wrapper_for_content}>
                    <span className={styles.AdvancedBlockAlternative_body_wrapper_text}>Distributed version control system</span>
                    </div>
                <div className={styles.AdvancedBlockAlternative_circle}>
                    <div style={{background: 'linear-gradient(135deg, rgba(255, 157, 108, 0.6) 0%, rgba(187, 78, 117, 0.8) 100%)'}} className={styles.AdvancedBlockAlternative_circle_outer}></div>
                    <div className={styles.AdvancedBlockAlternative_circle_inner}>
                        <div className={styles.AdvancedBlockAlternative_circle_inner_content}>
                        <span className={styles.AdvancedBlockAlternative_circle_inner_content_text}>GitHub</span>
                        </div>
                    </div>
                </div>
            </div>
    }
    if (activeIconAlt === 6){
        return <div onClick={onClick} className={styles.advancedBlockAlternative_body}>
                    <div className={styles.advancedBlockAlternative_body_wrapper_for_content}>
                    <span className={styles.AdvancedBlockAlternative_body_wrapper_text}>Module-bundlers</span>
                    </div>
                <div className={styles.AdvancedBlockAlternative_circle}>
                    <div  className={styles.AdvancedBlockAlternative_circle_outer}></div>
                    <div className={styles.AdvancedBlockAlternative_circle_inner}>
                        <div className={styles.AdvancedBlockAlternative_circle_inner_content}>
                        <span className={styles.AdvancedBlockAlternative_circle_inner_content_text}>Webpack</span>
                        </div>
                    </div>
                </div>
            </div>
    }
};
export default AdvancedBlockAlternative;