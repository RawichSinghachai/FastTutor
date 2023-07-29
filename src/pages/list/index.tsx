import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Header from '@/components/menu/Header';
import Drawer from '@mui/material/Drawer';
import Sidebar from '@/components/menu/Sidebar';
import axios from 'axios';
import { typeUserRegister } from '@/type/typeUsers';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';

interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density' | 'status';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    { id: 'status', label: 'Status', minWidth: 170 },
    {
        id: 'population',
        label: 'Population',
        format: (value: number) => value.toLocaleString('en-US'),
    },

];

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}

function createData(
    name: string,
    code: string,
    population: number,
    size: number,
): Data {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
];




export default function ListTable() {

    const [state, setState] = useState({
        left: false,
    });
    const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [student, setStudent] = useState<any>([])

    useEffect(() => {
        axios.get(`${process.env.NEXT_PUBLIC_URL}/api/users`).then(users => {
            setStudent(users.data)
            // console.log(users.data)
            // console.log(users.data[0]._id)
        })
    }, [])

    const router = useRouter();


    return (
        <Paper sx={{ pl: 2, pr: 2, pt: 10 ,boxShadow:10}}>
            <Header toggleDrawer={toggleDrawer} />
            <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                <Sidebar anchor={'left'} toggleDrawer={toggleDrawer} />
            </Drawer>

            <TableContainer sx={{ maxHeight: 440  }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                >
                                    <Typography variant="h6" >
                                        {column.label}
                                    </Typography>                                  
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {student//slice(0*10,0*10+10)
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: any, index: number) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                        <TableCell align="left" >
                                            {row.username}
                                        </TableCell>
                                        <TableCell align="left" >
                                            {row.email}
                                        </TableCell>
                                        <TableCell align="left" >
                                            {row.type}
                                        </TableCell>
                                        <TableCell align="left" >
                                            <Button variant="contained" onClick={() => { router.push(`/list/${row._id}`) }}>
                                                View Detail
                                            </Button>
                                        </TableCell>

                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={student.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}