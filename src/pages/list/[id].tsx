import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import axios from "axios";
import { typeUserRegister } from "@/type/typeUsers";
import Header from "@/components/menu/Header";
import Drawer from '@mui/material/Drawer';
import Sidebar from "@/components/menu/Sidebar";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination';
import { Toolbar } from "@mui/material";

type Props = {};

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const List = () => {
  const [state, setState] = useState({
    left: false,
  });
  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };


  const router = useRouter()
  const { id } = router.query

  const [datauser, setDatauser] = useState<typeUserRegister>({})


  useEffect(() => {
    if (id) {
      axios.get(`${process.env.NEXT_PUBLIC_URL}/api/users/${id}`)
        .then((user) => setDatauser(user.data))
    }

  }, [router,id])


  const [openUsername, setOpenUsername] = useState(false)
  const [openAge, setOpenAge] = useState(false)
  const [test, setTest] = useState(false)


  const [editUserName, setEditUsername] = useState<string>()
  const [editAge, setEditAge] = useState<string>()
  const [editSchool, setEditSchool] = useState<string>()
  const [editCourse, setEditCourse] = useState<string>()
  const [editPhone, setEditPhone] = useState<string>()


  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
        <Sidebar anchor={'left'} toggleDrawer={toggleDrawer} />
      </Drawer>

      <Paper sx={{ pl: 2, pr: 2, pt: 10, }} elevation={12} >

        <form autoComplete="off">
          {/* <Stack spacing={2} direction="row">
            {openUsername ? <TextField label="Outlined" variant="outlined"
              defaultValue={datauser.email} autoFocus onChange={(e: any) => setEditUsername(e.target.value)} />
              : <Typography variant="h6" gutterBottom>
                {datauser.email}
              </Typography>}
            <Button variant="contained" onClick={() => setOpenUsername((pre) => !pre)}>edit</Button>
          </Stack> */}

        </form>
        <form autoComplete="off">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Topic</TableCell>
                  <TableCell align="left">Dessert (100g serving)</TableCell>
                  <TableCell align="right">Calories</TableCell>
                  <TableCell align="left">Fat&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="left">Username</TableCell>
                  <TableCell component="th" scope="row">
                    {openUsername ? <TextField label="Outlined" variant="outlined"
                      defaultValue={test ? editUserName : datauser.email} autoFocus onChange={(e: any) => setEditUsername(e.target.value)} />
                      : <Typography variant="h6" gutterBottom>
                        {test ? editUserName : datauser.email}
                      </Typography>}
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="contained" onClick={() => setOpenUsername((pre) => !pre)}>
                      edit
                    </Button>
                  </TableCell>
                  <TableCell align="left">
                    <Button variant="contained" >
                      delete
                    </Button>
                  </TableCell>
                </TableRow>

                <TableRow>
                <TableCell align="center" colSpan={2}>
                    
                  </TableCell>
                  <TableCell align="right" colSpan={2}>
                    <Button variant="contained" >
                      Send
                    </Button>
                  </TableCell>
                </TableRow>

              </TableBody>

            </Table>
          </TableContainer>
        </form>






        <h3>{datauser.username}</h3>
        <h3>{datauser.email}</h3>
        <h3>{datauser.school}</h3>
        <h3>{datauser.username}</h3>
        <h3>{datauser.course}</h3>
      </Paper>
    </>
  )
}
export default List