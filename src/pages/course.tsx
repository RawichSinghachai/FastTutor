import React, { useState, useEffect } from 'react'
import Grid from '@mui/material/Grid';
import { useSelector, useDispatch } from 'react-redux';
import Typography from '@mui/material/Typography';
import Checkdata from '@/components/Checkdata';
import { RootState } from '@/stores/store';
import Header from '@/components/menu/Header';
import Sidebar from '@/components/menu/Sidebar';
import Drawer from '@mui/material/Drawer';
import Footer from '@/components/menu/Footer';
import CardCourseOne from '@/components/course/CardCourseOne';
type Props = {}

export default function ShowCourse({ }: Props) {
  const userdata = useSelector((state: RootState) => state.UserDataStore)

  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  return (
    <>
      <Checkdata />
      <Header toggleDrawer={toggleDrawer} />
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        <Sidebar anchor={'left'} toggleDrawer={toggleDrawer} />
      </Drawer>


      <Grid container spacing={3} sx={{ pl: 2, pr: 2, pt: 10 }}>
        <Grid item md={12} sm={12} xs={12}>
          <Typography variant="h4" gutterBottom>
            MyCourse
          </Typography>
        </Grid>

        {userdata.course ?
          userdata.course.map((course, index) => {
            return <Grid item md={3} sm={6} xs={12} key={index}>
              <CardCourseOne image={''} course={course} detail={'test'} />
            </Grid>

          })
          : <></>}

        <Grid item md={3} sm={6} xs={12}>
          <CardCourseOne image={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png'}
            course={'Instargram'}
            detail={'testtest'} />
        </Grid>

        <Grid item md={3} sm={6} xs={12}>
          <CardCourseOne image={'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Icon-notepad.svg/2048px-Icon-notepad.svg.png'}
            course={'FaceBook'}
            detail={'testtest'} />
        </Grid>

      </Grid>
      <Footer />
    </>
  )
}