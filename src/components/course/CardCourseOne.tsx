import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { useRouter } from 'next/router'



type Props = {
    image:string
    course:string
    detail:string
}

export default function CardCourseOne({image,course,detail}:Props) {
  
  const router = useRouter()


  return (
    <Card sx={{ display: 'flex' ,maxWidth:"500px",pl:2,py:2 , ":hover": { cursor: 'pointer',boxShadow:8 }}} onClick={()=>router.push(`/classroom/${course}`)}>
        <CardMedia
        component="img"
        sx={{ width: 50,height:50 }}
        image='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Icon-notepad.svg/2048px-Icon-notepad.svg.png'
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' ,pl:2}}>

          <Typography variant="h5">
            {course}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {detail}
          </Typography>

      </Box>
    </Card>
  );
}