import React from 'react'
import Box from '@mui/material/Box';
import GameCard from './GameCard';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import EndingGameCard from '@/components/game/EndingGameCard'
type Props = {}

function MainGame({}: Props) {


    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide><GameCard /></SwiperSlide>
                <SwiperSlide><GameCard /></SwiperSlide>
                <SwiperSlide><GameCard /></SwiperSlide>
                <SwiperSlide><EndingGameCard /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default MainGame