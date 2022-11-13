import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FaClipboard, FaHome,   FaShoppingBag, FaShoppingCart, FaStar, IconName } from "react-icons/fa";
import './menu.scss'
// import { IconContext } from "react-icons/lib";

const Menu = () => {

  const Menus = [
    {
      name:'Главная',
      icon:<FaHome />,
     },

    {
      name:'Заказы',
      icon:<FaClipboard/>,
    },
    {
      name:'Товары',
      icon:<FaShoppingBag/>,
    },
    {
      name:'Отзывы',
      icon:<FaStar/>,
    },
    {
      name:'Оформить заказ',
      icon:<FaShoppingCart/>,
     },
  ]
  const [active, setActive] = useState(0)
  
  return(
    <div className="menu">
      <div className="menu__links">

        {
          Menus.map((menu,i)=>(
            
            <div className={`menu__link ${active === i ? 'active' : ''}`} key={i} 
                 onClick={()=>{setActive(i)}}>
              <div className="icon">
                {menu.icon}
              </div>
                <Link to='/'>{menu.name}</Link>
            </div>
          ))
          
        }
        
        {/* <div className="menu__link " >
          <img src={require('../../assets/img/icons/list.png')} alt=""  />
          <Link to='/'>Заказы</Link>
        </div>

        <div className="menu__link" >
          <img src={require('../../assets/img/icons/tavar.png')} alt=""  />
          <Link to='/'>Товары</Link>
        </div>

        <div className="menu__link" >
          <img src={require('../../assets/img/icons/star.png')} alt=""  />
          <Link to='/'>Отзывы</Link>
        </div>

        <div className="menu__link active">
          <img src={require('../../assets/img/icons/karzinka.png')} alt=""  />
          <Link to='/'>Оформить заказ</Link>
        </div> */}

      </div>
    </div>
  )
}
export default Menu