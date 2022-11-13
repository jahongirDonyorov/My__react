import React from "react";

import { Splide, SplideSlide } from '@splidejs/react-splide';

import Product from "../product/";
import './products.scss'

const Products = () => {
  return(
    <div className="products">
     <div className="container">
      <Splide options={{
          type:'loop',
          perPage:5,
          autoplay:true,
          arrows:false,
          breakpoints: {
            1450:{
              perPage:4,
            },
            1160:{
              perPage:3,
            },
            960:{
              perPage:2,
            },
            690:{
              perPage:1,
            }
          }
        }}>
          <SplideSlide>
            <Product/>
          </SplideSlide>
      
        </Splide>
     </div>
    </div>
  )
}
export default Products