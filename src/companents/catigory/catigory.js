import React from "react";
import Breadcrumbs from "../breadcrumbs";
import Button from "../button/button";
import Info from "../pages/card/info/";
import Property from "../pages/card/property/property";
import Slider from "../pages/card/slider/";
import './catigory.scss'

const Catigory = () => {
  return(
    <div className="pages ">
      <Breadcrumbs/>
        <div className="catigory">
          <h2 className="catigory--title">Смартфон Apple iPhone 11 128 Gb Slim Box черный</h2>
          <div className="catigory__item">
            <div className="catigory__item--box">
              <Slider/>
            </div>
            <div className="catigory__item--info">
              <Info/>
            </div>
          </div>
            <div className="catigory__property">
              <Property/>
            </div>
            <div className="catigory__button">
              <Button/>
            </div>
      </div>
    </div>
  )
} 
export default Catigory