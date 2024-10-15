import styles from "./content.module.css"; 
import classNames from 'classnames';
import React, { useState } from 'react';
import CustomButtons from "./CustomButtons";
import MainBody from "./MainBody";

const Content = ({activeButton, onButtonClick}) => {
    function handleMenuClick(buttonId) {
        onButtonClick(buttonId);
    }
    return (
        <div className = {styles.Content}>
            <div className = {styles.Content_menu_wrapper}>
                <CustomButtons BtnId={1} onButtonClick={() => handleMenuClick(1)} id='Aboutme' text="About Me"  onActive={activeButton === 1}/>
                <CustomButtons BtnId={2} onButtonClick={() => handleMenuClick(2)} id='Hardskill' text="Hard-Skill"  onActive={activeButton === 2} />
                <CustomButtons BtnId={3} onButtonClick={() => handleMenuClick(3)} id='Education' text="Education"  onActive={activeButton === 3} />
                <CustomButtons BtnId={4} onButtonClick={() => handleMenuClick(4)} id='Languages' text="Languages"  onActive={activeButton === 4}/>
            </div>
            <MainBody activeButton={activeButton}/>
        </div>
    );
}

export default Content;