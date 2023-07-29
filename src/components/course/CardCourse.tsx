import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { useSelector} from 'react-redux';
import { useRouter } from 'next/router'



export default function CardCourse({course}:any) {
  const router = useRouter()


  
  return (
    <>

      <Card sx={{maxWidth: 400 ,maxHeight:400,borderRadius:4}}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://i.pinimg.com/236x/c3/6c/d7/c36cd75d64109d8fc4fdc89743fb7877.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {course}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            1500
          </Typography>

          <Typography variant="body2" color="text.secondary">
            200 bath
          </Typography>

        </CardContent>

        <Stack spacing={2} direction={{md:'row' ,sm:'row', xs:'column'}} justifyContent={"flex-end"} sx={{p:2}} >
        <Button variant="contained" sx={{":hover":{cursor:'pointer'}}} onClick={()=>router.push(`/classroom/${course}`)}>Start</Button>
        </Stack>

      </Card>
    </>
  );
}