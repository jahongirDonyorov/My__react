import React from "react";
import { Link } from "react-router-dom";
import './header.scss'

const Header = () => {
  return(
    <div>
      <div className="header ">
          <Link to='/' className="header__logo ">
            <span>Logo</span>
          </Link>
          <div className="header__right">
            <div className="header__right--info">
                <img src={require('../../assets/img/icons/Notification.png')} alt="" />
                <span>1</span>
            </div>
            <Link to='/' className="header__right--sainup">
                <p>Личный кабинет</p>
                <img src={require('../../assets/img/icons/Profile.png')} alt="" />
            </Link>
          </div>
      </div>
    </div>
  )
}
export default Header