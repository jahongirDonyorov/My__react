import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import './slider.scss'

const Slider = () => {
  return(
    <div className="cardslider">
        <div className="hover__img">
          <div className="img">
          <img src={require('../../../../assets/img/icons/tradein.png')} alt="" />
          </div>
          <div className="img one">
          <img src={require('../../../../assets/img/icons/scitka.png')} alt="" />
          </div>
          <div className="img thwoo">
          <img src={require('../../../../assets/img/icons/group2.png')} alt="" />
          </div>
          <div className="img three">
          <img src={require('../../../../assets/img/icons/group.png')} alt="" />
          </div>
        </div>
      <Splide options={{
        type:'loop',
        perPage:1,
        autoplay:true,
        arrows:false,
      }}>
      
        <SplideSlide>
          <img src={require('../../../../assets/img/photo.png')} alt="" />
        </SplideSlide>
      
        <SplideSlide>
          <img src={require('../../../../assets/img/photo.png')} alt="" />
        </SplideSlide>
      
      </Splide>
    </div>
  )
}
export default Slider