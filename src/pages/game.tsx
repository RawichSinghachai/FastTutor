import React,{useEffect} from 'react'
import MainGame from '@/components/game/MainGame'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { resetScore } from '@/stores/ScoreGame';
type Props = {}

function Game({ }: Props) {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(resetScore())
    }, [])
    
    return (
        <div>
            <MainGame />
        </div>
    )
}

export default Game