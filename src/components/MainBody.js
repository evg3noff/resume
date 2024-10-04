import styles from "./MainBody.module.css"; 
import React, { useState } from 'react';
import IconBlock from "./IconBlock";
import AdvancedBlock from "./AdvancedBlock";
import AdvancedBlockAlternative from "./AdvancedBlockAlternative";
import image1 from '../assets/JS.png';
import image2 from '../assets/html.png';
import image3 from '../assets/react.png';
import image4 from '../assets/vscode.png';
import image5 from '../assets/git.png';
import image6 from '../assets/logos_webpack.png';

const MainBody = ({activeButton}) => {
    const [activeIcon, setActiveIcon] = useState(1);
    const [activeIconAlt, setActiveIconAlt] = useState(4);
    if (activeButton == null){
        return <>
        </>
    }
    if (activeButton === 1){
        return <div className={styles.Main_menu_body}>
                <div className={styles.Main_menu_text_wrapper}>
                    <span className={styles.Main_menu_body_text}>
                    <b>I started being interested</b> in web development at the age of 11, as soon as I got my first computer with Internet access. I have always been interested in working with pages on the Internet. That’s why I started learning html at school. Over time, I came to the conclusion that this is what I want to do professionally.
                    <br/>
                    <br/>
                    <b>My interest</b> led me to enter the university for a technical specialty, where I mastered C++. Then, I started studying JavaScript and other related technologies for working with web pages in courses.
                    <br/>
                    <br/>
                    <b>At the moment,</b> I’m graduating from university and I want to start my dream job. I am very hardworking, pedantic and very fond of learning new things. This desire was expressed as a child, when I constantly installed mods in video games and liked to study the structure of applications and “Mod-loaders”.
                    </span>
                </div>
        </div>;
    }
    if (activeButton === 2){
        
        function handleIconClick(IconId){
            setActiveIcon(IconId);
        }
        function handleIconClickAlt(IconIdAlt){
            setActiveIconAlt(IconIdAlt);
        }
        return <div style={{justifyContent:'space-around'}} className={styles.Main_menu_body}>
            <div className={styles.MainBody_wrapper_for_icon_block}>
                <div className={styles.MainBody_wrapper_for_icon_block_simple}>
                    <div className={styles.MainBody_wrapper_for_icon_block_column}>
                        <IconBlock onClick={() => handleIconClick(1)} onActive={activeIcon === 1} src={image1} alt={'logo JS'} linear='linear-gradient(135deg, #ffba25 0%, #f5de19 100%)' text='Code language'/>
                        <IconBlock onClick={() => handleIconClick(2)} onActive={activeIcon === 2} src={image2} alt={'logo html/css'} linear='linear-gradient(137deg, #3cc 0%, #dadbd4 100%)' text='HTML & CSS'/>
                        <IconBlock onClick={() => handleIconClick(3)} onActive={activeIcon === 3} src={image3} alt={'logo react'} linear='linear-gradient(135deg, rgba(0, 216, 255, 0.19) 0%, #d9d9d9 100%)' fontSizes='26px' text='Frameworks'/>
                    </div>
                    <div className={styles.MainBody_wrapper_for_icon_block_column}>
                        <IconBlock onClick={() => handleIconClickAlt(4)} onActive={activeIconAlt === 4} src={image4} alt={'logo vscode'} linear='linear-gradient(135deg, rgba(19, 112, 175, 0.67) 0%, rgba(55, 166, 242, 0.58) 100%)' fontSizes='24px' text='IDE and source-code editors'/>
                        <IconBlock onClick={() => handleIconClickAlt(5)} onActive={activeIconAlt === 5} src={image5} alt={'logo git'} linear='linear-gradient(135deg, rgba(255, 157, 108, 0.6) 0%, rgba(187, 78, 117, 0.8) 100%)' fontSizes='20px' text='Distributed version control system'/>
                        <IconBlock onClick={() => handleIconClickAlt(6)} onActive={activeIconAlt === 6} src={image6} alt={'logo webpack'} linear='linear-gradient(135deg, #8ed6fb 0%, #1c78c0 100%)' fontSizes='30px' text='Module-bundlers'/>
                    </div>
                </div>
                <div className={styles.MainBody_wrapper_for_icon_block_advanced}>
                    <AdvancedBlock activeIcon={activeIcon} />
                    <AdvancedBlockAlternative activeIconAlt={activeIconAlt} />
                </div>
            </div>
        </div>
    }
    if (activeButton === 3){
        return <div style={{justifyContent:'space-around'}} className={styles.Main_menu_body}>
            <div className={styles.Main_menu_text_wrapper_education}>
                <span style={{fontWeight:'400', fontSize:'24px'}} className={styles.Main_menu_text_wrapper_block}>
                    2019-2023
                </span>
                <span style={{fontWeight:'500', fontSize:'24px'}} className={styles.Main_menu_text_wrapper_block}>
                    <b>University</b>
                </span>
                <span style={{fontWeight:'400', fontSize:'24px'}} className={styles.Main_menu_text_wrapper_block}>
                    Saratov State Technical University named after Y.A. Gagarin, Institute of Applied Information Technologies and Communications 
                </span>
            </div>
            <div className={styles.Main_menu_text_wrapper_education}>
                <span style={{fontWeight:'400', fontSize:'24px'}} className={styles.Main_menu_text_wrapper_block}>
                    2023-2025
                </span>
                <span style={{fontWeight:'500', fontSize:'24px'}} className={styles.Main_menu_text_wrapper_block}>
                <b>University</b>
                </span>
                <span style={{fontWeight:'400', fontSize:'24px'}} className={styles.Main_menu_text_wrapper_block}>
                    Master's Degree in Applied Informatics
                </span>
            </div>
            <div className={styles.Main_menu_text_wrapper_education}>
                <span style={{fontWeight:'400', fontSize:'24px'}} className={styles.Main_menu_text_wrapper_block}>
                    2024-...
                </span>
                <span style={{fontWeight:'500', fontSize:'24px'}} className={styles.Main_menu_text_wrapper_block}>
                <b>Courses</b>
                </span>
                <span style={{fontWeight:'400', fontSize:'24px'}} className={styles.Main_menu_text_wrapper_block}>
                    code.mu free Course «JavaScript/Front-end»
                </span>
            </div>   
        </div>
    }
    if (activeButton === 4){
        return <div className={styles.Main_menu_body}>
            <div className={styles.Main_menu_text_wrapper_language}>
                <span style={{fontWeight:'800', fontSize:'40px'}} className={styles.Main_menu_text_wrapper_block}>Russian - native</span>
                <span style={{fontWeight:'800', fontSize:'40px'}} className={styles.Main_menu_text_wrapper_block}>English - A2+</span>
            </div>
        </div>
    }
};
export default MainBody;