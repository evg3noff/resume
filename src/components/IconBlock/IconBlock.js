import styles from "./iconBlock.module.css"; 
import React from 'react';

const IconBlock = ({text, src, alt, onClick, linear}) => {
    const backgroundColor = {
        background: linear
    };
    return <div onClick={onClick} className={styles.iconBlock_body}>
                <div style={backgroundColor} className={styles.iconBlock_body_wrapper_icon}>
                    <img className={styles.iconBlock_body_wrapper_icon_img} src={src} alt={alt}/>
                </div>
                <span className={styles.iconBlock_body_text}>{text}</span>
    </div>
};
export default IconBlock;