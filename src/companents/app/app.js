import React from "react";
import { BrowserRouter as Router , Routes , Route, Link } from "react-router-dom";
import '@splidejs/react-splide/css';
import { IconName } from "react-icons/fa";

import Header from "../header";
import Home from "../../home";
import Catigory from "../catigory";

import './app.scss'
import Menu from "../menu";

const App = ()=>{
  return(
    <div>
        <Router>
          <Header/>
         <div className="content">
         <Menu/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/catigory" element={<Catigory/>}/>
          </Routes>
         </div>
        </Router>
    </div>
  )
}
export default App