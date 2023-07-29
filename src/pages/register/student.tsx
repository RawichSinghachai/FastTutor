import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Checkdata from '@/components/Checkdata';
import Image from 'next/image';
import logoshark from '../../../public/logoshark.jpg'
import { useForm } from "react-hook-form";
import axios from 'axios';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

type TypeRegisterStudent = {
  firstname: string
  lastname: string
  username: string
  password: string
  phone: string
  email: string
  age: string
  school: string
}

export default function RegisterStudent() {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<TypeRegisterStudent>();


  const onSubmit = (data: TypeRegisterStudent) => {
    // axios.post(`${process.env.NEXT_PUBLIC_URL}/api/users/register`,
    //   {
    //     ...data,
    //     type: "Student",
    //     course: null,
    //     date: new Date()
    //   })
    //fortest
    reset()
  };

  const theme = useTheme();
  const breakpointMd = useMediaQuery(theme.breakpoints.down('md'));


  var width: number = 400
  var height: number = 400

  if (breakpointMd) {
    var width: number = 350
    var height: number = 350
  }

  return (
    <div>
      <Checkdata />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card sx={{ width: { md: 1000, sm: 700, }, mx: 'auto', p: 2, }} elevation={12}>
          <Stack direction="row" justifyContent="space-evenly" alignItems="center" >
            <Box  sx={{ width: { md: 500, sm: 350, }, maxHeight: 500, mr: 4 }}>

              <form autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                <Stack direction="column" justifyContent="center" alignItems="center" >
                  <Typography variant="h4" gutterBottom>Register Student</Typography>
                </Stack>

                <Stack direction="row" justifyContent="center" alignItems="center" >
                  {errors.firstname?.type === 'required' ?
                    <TextField {...register("firstname", { required: { value: true, message: 'Form want username' }, })}
                      error label="FirstName" variant="outlined" fullWidth sx={{ mb: 2, mr: 2 }} helperText={errors.firstname?.message} /> :

                    <TextField {...register("firstname", { required: { value: true, message: 'Form want username' }, })}
                      label="FirstName" variant="outlined" fullWidth sx={{ mb: 2, mr: 2 }} />}
                  {/* <TextField {...register("firstname")} label="FirstName" variant="outlined" fullWidth sx={{ mb: 2, mr: 2 }} /> */}


                  <TextField {...register("lastname")} label="LastName" variant="outlined" fullWidth sx={{ mb: 2 }} />
                </Stack>

                <Stack direction="row" justifyContent="center" alignItems="center" >
                  <TextField {...register("username")} label="Username" variant="outlined" fullWidth sx={{ mb: 2, mr: 2 }} />

                  <TextField {...register("password")} label="Password" variant="outlined" fullWidth sx={{ mb: 2 }} />
                </Stack>

                <Stack direction="row" justifyContent="center" alignItems="center" >

                  <TextField {...register("phone")} label="Phone" variant="outlined" fullWidth sx={{ mb: 2, mr: 2 }} />

                  <TextField {...register("email")} label="E-mail" variant="outlined" fullWidth sx={{ mb: 2 }} />
                </Stack>

                <TextField {...register("age")} label="Age" variant="outlined" fullWidth sx={{ mb: 2 }} />

                <TextField {...register("school")} label="School" variant="outlined" fullWidth sx={{ mb: 2 }} />

                <Button variant="contained" fullWidth type='submit'>Submit</Button>

              </form>
            </Box>

            <Box sx={{ display: { md: 'block', sm: 'block', xs: 'none' } ,maxHeight: 500,}}>
              <Image src={logoshark} alt={'logoshark'} width={width} height={height} priority={true} />
            </Box>

          </Stack>
        </Card>
      </Box >
    </div >
  )
}
