
import  styles from './App.module.css';
import Header from "./components/Header.js";
import Content from "./components/Content.js"; 
import classNames from 'classnames';


function App() {
  return (
    <>
      <div className={styles.bg}>
        <Header/>
      </div>
      <div className={styles.bg} style = {{marginTop: '150px'}}>
        <Content/>
      </div>
    </>
  );
}

export default App;
