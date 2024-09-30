import styles from "./customButtons.module.css"; 
import React, { useState } from 'react';

const CustomButtons = ({text, onActive, onClick}) => {
    return  <div onClick={onClick} className ={onActive ? styles.CustomButtons_menu_option_active : styles.CustomButtons_menu_option}>{text}</div>;
};

export default CustomButtons;