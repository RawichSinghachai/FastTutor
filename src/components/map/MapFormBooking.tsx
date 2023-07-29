import React, { useState, useEffect } from 'react'
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import { useSelector,useDispatch } from 'react-redux'
import { RootState } from '@/stores/store';


type Props = {}

function MapFormBooking({ }: Props) {

    const MapBooking = useSelector((state: RootState)=>state.MapBookingStore)

    const [booking, setBooking] = useState({
        //_id:0,
        topic: '',
        detail: '',
        lat: 0,
        lnt: 0,
        totalpeople: 1,
        nowpeople: 0,
        
    })

    const handleChange = (e: any) => {
        setBooking((pre) => ({
            ...pre,
            [e.target.name]: e.target.value,
            lat:MapBooking.lat,
            lnt:MapBooking.lnt
        }))
    }

    const handlesubmit = async (e: any) => {
        e.preventDefault()
        console.log(booking);
        
        setBooking({
            topic: '',
            detail: '',
            lat: 0,
            lnt: 0,
            totalpeople: 1,
            nowpeople: 0,
        })
        await axios.post(`${process.env.NEXT_PUBLIC_URL}/users/mapbooking`, { ...booking })
        
    }

    return (
        <Paper  sx={{p:2,height:'100%'}} elevation={12}>
            <form autoComplete='off' onSubmit={handlesubmit}>
                <Stack direction="column" justifyContent="center" spacing={2}>
                    <TextField label="Topic" variant="outlined" name='topic' value={booking.topic} onChange={handleChange} />
                    <TextField label="detail" variant="outlined" name='detail' value={booking.detail} onChange={handleChange} />
                    <Slider valueLabelDisplay="auto" step={1} marks min={1} max={5} value={booking.totalpeople} name='totalpeople' onChange={handleChange} />
                    <Button variant="contained" type='submit'>Submit</Button>
                </Stack>
            </form>
        </Paper>
    )
}

export default MapFormBooking