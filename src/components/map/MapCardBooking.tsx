import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
type Props = {}


const booking = {
    "_id": "649862aa20fc683274139be8",
    "topic": "Enginneer",
    "detail": "Heat Tranfer",
    "lat": 14.069014986629814,
    "lnt": 100.6059254977754,
    "totalpeople": 3,
    "nowpeople": 0,
    "date": "2023-06-25T15:52:10.454Z"
  }

  
function MapCardBooking({}: Props) {
  return (
    <div>
        <Card sx={{ width: '300px', height: '300px', m: 2, p: 2 ,borderRadius:2 }}>
          <Typography sx={{ fontSize: 20 }} gutterBottom>
            Topic : {booking.topic}
          </Typography>

          <Typography sx={{ fontSize: 20 }} gutterBottom>
            detail : {booking.detail}
          </Typography>

          <Typography sx={{ fontSize: 20 }} gutterBottom>
            total : {booking.totalpeople}
          </Typography>

          <Typography sx={{ fontSize: 20 }} gutterBottom>
            now : {booking.nowpeople}
          </Typography>

          <Stack direction="row" justifyContent="space-between" spacing={2}>
            <Button variant="contained">Read More</Button>
            <Button variant="contained">Join</Button>
          </Stack>
        </Card>

        
    </div>
  )
}

export default MapCardBooking