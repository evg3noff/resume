
import  styles from './App.module.css';
import Header from "./components/Header/Header.js";
import Content from "./components/Content/Content.js";
import Footer from "./components/Footer/Footer.js"; 
import React, { useState } from 'react';
import './reset.css';


function App() {
  const [activeMenu, setActiveMenu] = useState(false);
	function handleBurgerMenu(){
			setActiveMenu(!activeMenu);
	}
  const [activeButton, switchActiveButton] = useState(null);
    function handleMenuClick(buttonId) {
        switchActiveButton(buttonId);
    }
  return (
    <>
      <div className={styles.bg}>
        <Header activeMenu={activeMenu} onAnchourClick={handleMenuClick} onMenuClick={handleBurgerMenu}/>
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
