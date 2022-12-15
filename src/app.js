import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from "./views/Home";
import Dashboard from "./views/Dashboard";
import Passage from "./views/Passage";
import Page3 from "./views/page3";
import Page4 from "./views/page4";
import Page5 from "./views/page5";
import styles from './styles/App.module.css';

function App() {
  return (
      <div>
            <div className={styles.mainContainer}>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/Passage" element = {<Passage />}></Route>
                    <Route path="/dashboard" element={<Dashboard/>}></Route>
                    <Route path="/Page3" element={<Page3/>}></Route>
                    <Route path="/Page4" element={<Page4/>}></Route>
                    <Route path="/Page5" element={<Page5/>}></Route>
                </Routes>
            </div>
      </div>
  );
}

export default App;
