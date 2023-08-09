import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { save } from '../stores/UserDataStore';
import ImageListItem from '@mui/material/ImageListItem';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Checkdata from '@/components/Checkdata';
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image';
import logoshark from '../../public/logoshark.jpg'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { lightGreen, red, grey, teal } from '@mui/material/colors';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  py: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};


export default function Login() {

  const router = useRouter()
  const dispatch = useDispatch()

  const [openSuccess, setOpenSuccess] = useState(false);
  const [openFaild, setOpenFaild] = useState(false);

  const handleOpenSuccess = () => {
    setOpenSuccess(true);
    setTimeout(() => {
      handleCloseSuccess()
    }, 1000);
  }

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
    setName('')
    setPassword('')
    router.push('/')
  }

  const handleOpenFaild = () => {
    setOpenFaild(true);
    setTimeout(() => {
      handleCloseFaild()
    }, 1000);
  }

  const handleCloseFaild = () => {
    setOpenFaild(false);
  }

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')


  const onsubmit = async (e: any) => {
    e.preventDefault()
    const datauser = await axios.post(`${process.env.NEXT_PUBLIC_URL}/api/users/login`, {
      username: name,
      password: password
    })

    if (datauser.data.token) {
      sessionStorage.setItem('token', datauser.data.token)
    }

    if (datauser.data.status === 'login success') {
      handleOpenSuccess()
    }
    if (datauser.data.status === 'login faild') {
      handleOpenFaild()
    }
  }

  const theme = useTheme();
  const breakpointMd = useMediaQuery(theme.breakpoints.down('md'));


  var width: number = 500
  var height: number = 500

  if (breakpointMd) {
    var width: number = 350
    var height: number = 350
  }


  return (
    <div>
      <Checkdata />
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card sx={{ width: { md: 1000, sm: 700, }, p: 2 }} elevation={12}>

          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>

            <ImageListItem sx={{ width: { md: 500, sm: 350, xs: 0 }, display: { md: 'block', sm: 'block', xs: 'none' }, maxHeight: 500, pr: { md: 2, sm: 2, xs: 0 } }}>
              <Image src={logoshark} alt={'logoshark'} width={width} height={height} priority={true} />
            </ImageListItem>

            <Paper elevation={0} sx={{ width: { md: 500, sm: 350, }, maxHeight: 500, }}>

              <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
                <Typography variant="h4" gutterBottom>Log In</Typography>
              </Stack>

              <form autoComplete='off' onSubmit={(e) => onsubmit(e)}>
                <TextField label="Name" variant="outlined" helperText="Incorrect entry." fullWidth sx={{ mb: 2 }}
                  value={name} onChange={(e) => setName(e.target.value)} />

                <TextField label="Password" variant="outlined" fullWidth sx={{ mb: 2 }}
                  value={password} onChange={(e) => setPassword(e.target.value)} />

                <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{ mb: 1 }}>
                  <Typography variant="body2" gutterBottom>Forget Password?</Typography>
                </Stack>

                <Button variant="contained" fullWidth type='submit'
                  sx={{ bgcolor: teal[500], ":hover": { bgcolor: teal[700] } }}>
                  Submit
                </Button>

              </form>

              <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} sx={{ mt: 2 }}>
                <Typography variant="body2" gutterBottom><Link href='/register/student'>Create Account?</Link></Typography>
              </Stack>

            </Paper>
          </Box>

        </Card>

        <Modal
          open={openSuccess}
          onClose={handleCloseSuccess}
        >
          <Box sx={style}>
            <CheckIcon sx={{ fontSize: 70, color: grey[50], bgcolor: lightGreen['A400'], borderRadius: '50%', p: 2, mb: 2 }} />
            <Typography variant="h5" >
              Login Success
            </Typography>
          </Box>
        </Modal>

        <Modal
          open={openFaild}
          onClose={handleCloseFaild}
        >
          <Box sx={style}>
            <ClearIcon sx={{ fontSize: 70, color: grey[50], bgcolor: red['A400'], borderRadius: '50%', p: 2, mb: 2 }} />
            <Typography variant="h5" >
              Login Faild
            </Typography>
          </Box>
        </Modal>
      </Box>
    </div>
  )
}
