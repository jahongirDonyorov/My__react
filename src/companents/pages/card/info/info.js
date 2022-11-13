import React, { useState } from "react";
import { Link } from "react-router-dom";
import './info.scss'

const Info = () => {
  const Nav = [{name:'3 мес'},{name:'6 мес'},{name:'12 мес'},{name:'24 мес'}]
  const [active,setActive] = useState(0)
  return(
    <div className="cardInfo">
      <div className="cardInfo__price">
        <span>Цена телефона</span>
        <span className="price">6 000 000 сум </span>
        <div className="hr"></div>
      </div>
      <div className="cardInfo__fullPrice">
        <div>Общая цена (с наценкой)</div>
        <div className="cried">
          <div className="price">7 300 000 сум </div>
          <div className="product__purchase">
                <span className="sum"> 2 435 000 сум</span>
                <span>x3</span>
          </div>
        </div>
        <div className="cardInfo__fullPrice--nav">
          {
            Nav.map((nav,i)=>(
              <button 
                className={`${active === i ? 'active' : ''}`}
                onClick={()=>{setActive(i)}}
              >{nav.name}</button>
              
            ))
          }
       
        </div>
        <div className="percentage">
          Наценка:
          <span>5%</span>
        </div>
        <div className="hr"></div>

      </div>
      <div className="cardInfo__property">
        <span>Общие характеристики</span>
        <div className="title">
          <span>Тип: моноблок (классический)</span>
          <span>Стандарт: 2G, 3G, 4G (LTE), 5G</span>
          <span>Операционная система: iOS 14</span>
        </div>
        <div className="title__full">
          <Link to='/'>Показать все</Link>
          <img src={require('../../../../assets/img/icons/right.png')} alt="" />
        </div>
      </div>
  </div>
  )
}
export default Info