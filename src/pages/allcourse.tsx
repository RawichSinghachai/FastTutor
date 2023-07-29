import React, { useState } from 'react'
import Header from '@/components/menu/Header';
import Sidebar from '@/components/menu/Sidebar';
import Drawer from '@mui/material/Drawer';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import type { RootState } from '@/stores/store';
import TitleCardCourse from '@/components/course/TitleCardCourse';
import Grid from '@mui/material/Grid';


type Props = {}

function AllCourse({ }: Props) {

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

  //autoserch
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  const Coursechange = (e: any, value: any) => {
    setValue(value)
  }

  const Inputchange = (e: any, input: any) => {
    setInputValue(input)
  }

  const TitleSubjectCardStore = useSelector((state: RootState) => state.TitleSubjectCardStore)

  return (
    <div>
      <Header toggleDrawer={toggleDrawer} />
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)} >
        <Sidebar anchor={'left'} toggleDrawer={toggleDrawer} />
      </Drawer>

      <span>{value}</span>
      <br/>
      <span>{inputValue}</span>
      <Grid container spacing={3} justifyContent='center' sx={{ pl: 2, pr: 2, pt: 10 }}>

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box >
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={TitleSubjectCardStore.map((option) => option)}
              renderInput={(params) => <TextField {...params} label="All Course" />}
              onChange={(e: any, value) => Coursechange(e, value)}
              onInputChange={(e: any, input: any) => Inputchange(e, input)}
              sx={{maxWidth:500}}
            />
          </Box>
        </Grid>

        {value ? <Grid item lg={3} md={4} sm={4} xs={12} >
              <TitleCardCourse
                image={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png'}
                course={value}
                detail={'Subject'} />
            </Grid> :
          TitleSubjectCardStore.map((obj, index) => {
            return <Grid item lg={3} md={4} sm={4} xs={12} key={index}>
              <TitleCardCourse
                image={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png'}
                course={obj}
                detail={'Subject'} />
            </Grid>
          })

        }







      </Grid>
    </div>
  )
}

export default AllCourse
