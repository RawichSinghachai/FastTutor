import React from 'react'
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { Stack } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { red , green , grey} from '@mui/material/colors';
import Box from '@mui/material/Box';
import { useSwiper } from 'swiper/react';
import { useSelector , useDispatch } from 'react-redux';
import { addScore , reduceScore } from '@/stores/ScoreGame';
import { RootState } from '@/stores/store';
import Typography from '@mui/material/Typography';



type Props = {}

function GameCard({ }: Props) {

    const score = useSelector((state: RootState) => state.ScoreGame.score)

    const swiper = useSwiper();
    const dispatch = useDispatch()

    const btCorrect = () =>{
        swiper.slideNext()
        dispatch(addScore())
    }

    const btIncorrect = () =>{
        swiper.slideNext()
        dispatch(reduceScore())
    }

    return (
        <Box sx={{ display: 'flex', flexDirection:'column',justifyContent: 'center' ,alignItems:'center',height:'100vh'}}>
            <Typography sx={{fontSize:50 ,fontWeight:'bold',mb:2}} variant='h5'>Score : {score}</Typography>

            <Card sx={{ width: { lg:'500px',md:'500px',sm:'500px',xs:'300px'},borderRadius:4 }} elevation={24}>
                <Stack direction="column" justifyContent="center" alignItems="center" spacing={2} sx={{p:2}}>
                        <Typography sx={{textAlign:'center',fontWeight:'bold',my:2}} variant='h3'>8 + 8 = 88 SandBox</Typography>
                        <Stack direction="row" justifyContent="center" alignItems="center" spacing={8}>
                            <IconButton onClick={btIncorrect}>
                                <ClearIcon sx={{ color:grey[50], backgroundColor: red[900] , borderRadius:'50%',fontSize:50 ,p:1}}/>
                            </IconButton>

                            <IconButton onClick={btCorrect}>
                                <CheckIcon sx={{ color:grey[50], backgroundColor: green['A400'] , borderRadius:'50%',fontSize:50, p:1}}/>
                            </IconButton>
                        </Stack>
                </Stack>
            </Card>
        </Box>
    )
}

export default GameCard