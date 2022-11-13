import React from "react";
import './property.scss'

const Property = ()=>{
  return(
    <div className="property">
      <div className="property__title"> Акции </div>
     <div className="contents">
     <div className="property__item">
        <div className="img">
        <img src={require('../../../../assets/img/icons/tradein.png')} alt="" />
        </div>
        <div className="property__item--title">
          <div className="text">
            <div className="name">Обменяй свой старый айфон и получи скидку на новый</div>
            <span> - 400 000 сум</span>
          </div>
        <input type="checkbox" />
        </div>
      </div>
        <div className="hrb"></div>
     </div>

     <div className="contents">
     <div className="property__item">
        <div className="img s">
        <img src={require('../../../../assets/img/icons/scitka.png')} alt="" />
        </div>
        <div className="property__item--title">
          <div className="text">
            <div className="name">Наушники в подарок</div>
            <span> Apple EarPods</span>
          </div>
        <input type="checkbox" />
        </div>
      </div>
        <div className="hrb"></div>
     </div>

     <div className="contents">
     <div className="property__item">
        <div className="img g">
        <img src={require('../../../../assets/img/icons/group2.png')} alt="" />
        </div>
        <div className="property__item--title">
          <div className="text">
            <div className="name">Скидка 20% на смартфоны</div>
            <span> - 10 000 сум</span>
          </div>
        <input type="checkbox" />
        </div>
      </div>
        <div className="hrb"></div>
     </div>

     <div className="contents">
     <div className="property__item">
        <div className="img a">
        <img src={require('../../../../assets/img/icons/group.png')} alt="" />
        </div>
        <div className="property__item--title">
          <div className="text">
            <div className="name">Скидка на айфоны</div>
            <div className="names">IMEI 012345678901234</div>
            <span> - 10 000 сум</span>
          </div>
        <input type="checkbox" />
        </div>
      </div>
     </div>
    </div>
  )
}
export default Property