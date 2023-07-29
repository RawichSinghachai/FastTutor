import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import SubjectCard from '@/components/home/SubjectCard';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import type { RootState } from '@/stores/store';
import Checkdata from '@/components/Checkdata';
import Header from '@/components/menu/Header';
import Sidebar from '@/components/menu/Sidebar';
import Drawer from '@mui/material/Drawer';
import Footer from '@/components/menu/Footer';
import TutorCard from '@/components/home/TutorCard';
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {

  const topicCard = useSelector((state: RootState) => state.TopicCardStore)
  const subjectCard = useSelector((state: RootState) => state.SubjectCardStore)

  //header,sidebar
  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    AOS.init();
  }, [])
  

  return (
    <>
      <Checkdata />

      {/* Menu */}

      <Header toggleDrawer={toggleDrawer} />
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        <Sidebar anchor={'left'} toggleDrawer={toggleDrawer} />
      </Drawer>

      {/* layout */}

      <Grid container spacing={3} justifyContent='center' sx={{ pl: 2, pr: 2, pt: 10 }}>   

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant='h3' sx={{fontWeight:'bold'}}>
            Tutor
          </Typography>
        </Grid>


        <Grid item lg={3} md={4} sm={6} xs={12}>
          <TutorCard name={'พี่ภู่'}  subject={'ฟิสิกส์,คณิตศาสตร์'} stars={5}/>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <TutorCard name={'พี่ปิง'} subject={'Programing'} stars={3}/>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <TutorCard name={'พี่ป่าน'} subject={'ภาษาจีน'} stars={4.5}/>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <TutorCard name={'พี่ตี๋'} subject={'บัญชีกลาง 1'} stars={5}/>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <TutorCard name={'Jame Black'} subject={'python'} stars={3}/>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <TutorCard name={'พี่ป่าน'} subject={'ภาษาญี่ปุ่น'} stars={4.5}/>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <TutorCard name={'Jame Black'} subject={'python'} stars={3}/>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <TutorCard name={'Jody'} subject={'ภาษาญี่ปุ่น'} stars={5}/>
        </Grid>

        <Grid item lg={3} md={4} sm={6} xs={12}>
          <></>
        </Grid>

        {/* {topicCard.map((data) => {
          return <Grid item md={3} sm={6} xs={6} key={data.id}>
            <TopicCard topic={data.topic} />
          </Grid>

        })} */}

        <Grid item md={12} xs={12}>
          <Typography variant="h4" sx={{ fontWeight:'bold', py: 4 }}>
            Course Online
          </Typography>
        </Grid>


        {subjectCard.map((data, index) => {
          return <Grid item key={index} md={4} sm={6} xs={12} >
            <div data-aos="zoom-in">
              <SubjectCard topic={data.topic} duration={data.duration} price={data.price} image={data.image}/>
            </div>
          </Grid>
        })}
      </Grid>


      <Footer />
    </>
  )
}
