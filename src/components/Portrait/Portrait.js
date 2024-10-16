import styles from "./portrait.module.css"; 
import React from 'react';
import image from '../../assets/github.png';
import image2 from '../../assets/git.png';

const Portrait = ({onPointClick}) => {
            return  <img className = {styles.Portrait} alt="my photo profile" src={onPointClick == 1 ? image : image2}/>

}

export default Portrait;