import React, { useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import ImageListItem from '@mui/material/ImageListItem';
import Checkdata from '@/components/Checkdata';
import Image from 'next/image';
import logoshark from '../../../public/logoshark.jpg'


export default function RegisterTutor() {
  return (
    <div>
      <Checkdata />
      <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card sx={{ width: { md: 1000, sm: 700, }, mx: 'auto', p: 2, }} elevation={12}>
          <Stack direction="row" justifyContent="space-evenly" alignItems="center" >
            <Paper elevation={0} sx={{ width: { md: 500, sm: 350, }, maxHeight: 500 , }}>

              <Stack direction="column" justifyContent="center" alignItems="center" >
                <Typography variant="h4" gutterBottom>Register Tutor</Typography>
              </Stack>

              <Stack direction="row" justifyContent="center" alignItems="center" >
                <TextField label="ชื่อ" variant="outlined" fullWidth sx={{ mb: 2, mr: 2 }} />

                <TextField label="นามสกุล" variant="outlined" fullWidth sx={{ mb: 2 }} />
              </Stack>

              <Stack direction="row" justifyContent="center" alignItems="center" >
                <TextField label="Username" variant="outlined" fullWidth sx={{ mb: 2, mr: 2 }} />

                <TextField label="Password" variant="outlined" fullWidth sx={{ mb: 2 }} />
              </Stack>

              <Stack direction="row" justifyContent="center" alignItems="center" >

                <TextField label="Phone" variant="outlined" fullWidth sx={{ mb: 2 , mr:2 }} />

                <TextField label="E-mail" variant="outlined" fullWidth sx={{ mb: 2 }} />
              </Stack>

              <TextField label="Age" variant="outlined" fullWidth sx={{ mb: 2 }} />

              <TextField label="School" variant="outlined" fullWidth sx={{ mb: 2 }} />

              <Button variant="contained" fullWidth >Submit</Button>
            </Paper>

            <Image src={logoshark} alt={'logoshark'} width={400} height={400} priority={true}/>

          </Stack>
        </Card>
      </Card >
    </div >
  )
}
