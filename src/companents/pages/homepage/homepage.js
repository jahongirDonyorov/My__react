import React from "react";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../breadcrumbs";
import Pogination from "../../pogination/pogination";
import Products from "../../products";
import Search from "../../search/search";
import './homepage.scss'

const Homepage = () => {
  return(
    <div className="pages">
     {/* <Homeitem/> */}
     <Breadcrumbs/>
       <div className="pages__title">
         Оформить заказ
       </div>
         <Search/>
        <div className="pages__number">
          <span>
            Все товары (121)
          </span>
        </div>
          <Products/>
          <Products/>
          <Pogination/>
     <Link to='/catigory'></Link>
    </div>
  )
}
export default Homepage