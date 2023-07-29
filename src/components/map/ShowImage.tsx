import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

type Props = {}

function ShowImage({}: Props) {
  return (
    <div style={{width:'200px',height:'200px'}}>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
            <img src="https://i.pinimg.com/236x/9c/fc/fb/9cfcfb0545f68ad85c21b69c8eb3eb40.jpg" height='200px' width='200px'/>
        </SwiperSlide>

        <SwiperSlide>
            <img src="https://i.pinimg.com/236x/d2/ec/25/d2ec25d7a074d351fc5c61762bdbbd78.jpg" height='200px' width='200px'/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ShowImage