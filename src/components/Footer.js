import styles from "./footer.module.css"; 
import React, { useState } from 'react';
import image from '../assets/github.png';

const Footer = () => {
    return  <div className={styles.footer_wrapper}>
        <div className={styles.footer_wrapper_block}>
            <div className={styles.footer_wrapper_block_icon}>
                <a href='https://github.com/dashboard'>
                    <img style={{textDecoration: 'none'}} src={image} alt="github logo"></img>
                </a>
            </div>
            <span className={styles.footer_wrapper_block_text}><a className={styles.footer_wrapper_block_text} style={{textDecoration: 'none'}} href='https://github.com/evg3noff'>GitHub</a></span>
        </div>
    </div>;
};

export default Footer;