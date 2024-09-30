import styles from "./content.module.css"; 
import classNames from 'classnames';
import React, { useState } from 'react';
import CustomButtons from "./CustomButtons";
import MainBody from "./MainBody";

function Content() {
    //const [currentContent, setCurrentContent] = useState(defaultContent);
    const [activeButton, switchActiveButton] = useState(null);
    function handleMenuClick(buttonId) {
        switchActiveButton(buttonId);
        //setCurrentContent("жопа");
    }
    return (
        <div className = {styles.Content}>
            <div className = {styles.Content_menu_wrapper}>
                <CustomButtons text="About Me" onClick={() => handleMenuClick(1)} onActive={activeButton === 1}/>
                <CustomButtons text="Hard-Skill" onClick={() => handleMenuClick(2)} onActive={activeButton === 2} />
                <CustomButtons text="Education" onClick={() => handleMenuClick(3)} onActive={activeButton === 3} />
                <CustomButtons text="Language" onClick={() => handleMenuClick(4)} onActive={activeButton === 4}/>
            </div>
            <MainBody activeButton={activeButton}/>
        </div>
    );
}

export default Content;