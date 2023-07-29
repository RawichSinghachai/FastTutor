import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Header from '@/components/menu/Header';
import Sidebar from '@/components/menu/Sidebar';
import Drawer from '@mui/material/Drawer';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FeedIcon from '@mui/icons-material/Feed';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import axios from 'axios';
import Checkdata from '@/components/Checkdata';
import { indigo, teal } from '@mui/material/colors';
type Props = {}

function Profile({ }: Props) {

    const [state, setState] = useState({
        left: false,
    });
    const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const [profile, setProfile] = useState({
        id: '',
        firstname: '',
        lastname: '',
        username: '',
        password: '',
        phone: '',
        email: '',
        age: '',
        school: '',
        course: '',
        type: '',
        date: '',
    })

    useEffect(() => {

        axios.post(`${process.env.NEXT_PUBLIC_URL}/api/users/auth`, {
            token: sessionStorage.getItem('token')
        },
            { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } }
        ).then(datauser => {
            setProfile(datauser.data.decoded)
            // console.log(datauser.data.decoded);
        }).catch((err) => {
            console.log('Not login in yet')
            //for test
        })
    }, [])


    return (
        <>
            <Checkdata />
            <Header toggleDrawer={toggleDrawer} />
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                <Sidebar anchor={'left'} toggleDrawer={toggleDrawer} />
            </Drawer>

            <Box sx={{ pl: 2, pr: 2, pt: 10, display: 'flex', justifyContent: 'center', }}>
                    <Card sx={{ width: '700px', height: '100%', p: 2, borderRadius: 2 }} elevation={12}>

                        <Stack direction="row" justifyContent="flex-start">
                            <FeedIcon />
                            <Typography variant="h5" gutterBottom>
                                ประวัติส่วนตัว / My Profile
                            </Typography>
                        </Stack>

                        <form>
                            <Stack direction="column" justifyContent="center" spacing={4} >

                                <Stack direction="row" justifyContent="space-between" spacing={2} >
                                    <TextField sx={{ width: '100%' }} label="FirstName" variant="outlined"
                                        InputProps={{ readOnly: true, }} value={profile.firstname} />

                                    <TextField sx={{ width: '100%' }} label="LastName" variant="outlined"
                                        InputProps={{ readOnly: true, }} value={profile.lastname} />
                                </Stack>

                                <TextField sx={{ width: '100%' }} label="UserName" variant="outlined"
                                    InputProps={{ readOnly: true, }} value={profile.username} />

                                <TextField sx={{ width: '100%' }} label="Phone" variant="outlined"
                                    InputProps={{ readOnly: true, }} value={profile.phone} />

                                <TextField sx={{ width: '100%' }} label="Email" variant="outlined"
                                    InputProps={{ readOnly: true, }} value={profile.email} />

                                <TextField sx={{ width: '100%' }} label="School" variant="outlined"
                                    InputProps={{ readOnly: true, }} value={profile.school} />
                            </Stack>

                            <Stack direction="row" justifyContent="center" alignItems="center" spacing={4}>
                                <Button sx={{ bgcolor: teal[500], ":hover": { bgcolor: teal[700] }, mt: 2 }} variant="contained">
                                    save
                                </Button>
                            </Stack>
                        </form>
                    </Card>

            </Box>
        </>
    )
}

export default Profile