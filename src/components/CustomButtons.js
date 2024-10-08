import styles from "./customButtons.module.css"; 
import React, { useState } from 'react';

const CustomButtons = ({text, onActive, id, onButtonClick, count, BtnId}) => {

        return  <div id={id} onClick={onButtonClick} className ={onActive ? styles.CustomButtons_menu_option_active : styles.CustomButtons_menu_option}>{text}</div>;
    }

export default CustomButtons;