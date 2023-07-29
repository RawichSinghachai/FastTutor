import React, { useEffect } from 'react'
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import { Stack } from '@mui/material';
import { red, green, grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import { useSwiper } from 'swiper/react';
import { useSelector, useDispatch } from 'react-redux';
import { addScore, reduceScore } from '@/stores/ScoreGame';
import { RootState } from '@/stores/store';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import snowcat from '../../../public/icon/snowcat.png'
import Button from '@mui/material/Button';
import { useRouter } from 'next/router'


type Props = {}

function GameCard({ }: Props) {

    const score = useSelector((state: RootState) => state.ScoreGame.score)

    const swiper = useSwiper();
    const dispatch = useDispatch()

    const btCorrect = () => {
        swiper.slideNext()
        dispatch(addScore())
    }

    const btIncorrect = () => {
        swiper.slideNext()
        dispatch(reduceScore())
    }

    const router = useRouter()


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card sx={{ width: { lg: '500px', md: '500px', sm: '500px', xs: '300px' }, borderRadius: 4 }} elevation={24}>
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{ p: 2 }}>
                    <Image src={snowcat} alt={'Snow cat'} height={200} width={200} priority={true} />

                    <Typography variant="h4">
                        Your Score is {score} point
                    </Typography>

                    <Button variant="contained" onClick={()=>router.push('/')}>Back</Button>
                </Stack>
            </Card>
        </Box>
    )
}

export default GameCard