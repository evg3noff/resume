
import  styles from './App.module.css';
import Header from "./components/Header.js";
import Content from "./components/Content.js";
import Footer from "./components/Footer.js"; 
import classNames from 'classnames';
import React, { useState } from 'react';


function App() {
  const [activeButton, switchActiveButton] = useState(null);
    function handleMenuClick(buttonId) {
        switchActiveButton(buttonId);
    }
  return (
    <>
      <div className={styles.bg}>
        <Header onAnchourClick={handleMenuClick}/>
      </div>
      <div className={styles.bg} style = {{marginTop: '150px'}}>
        <Content activeButton={activeButton} onButtonClick={handleMenuClick}/>
      </div>
      <hr></hr>
        <Footer/>
    </>
  );
}

export default App;
