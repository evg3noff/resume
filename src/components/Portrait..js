import styles from "./portrait.module.css"; 
import React, { useState } from 'react';
import image from '../assets/github.png';
import image2 from '../assets/git.png';

const Portrait = ({onPointClick}) => {
        if (onPointClick === 1){
            return  <img className = {styles.Portrait} alt="my photo profile" src={image}/>
        }
        if (onPointClick === 2){
            return  <img className = {styles.Portrait} alt="my photo profile" src={image2}/>
        }

}

export default Portrait;