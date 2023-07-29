import React, { useState, useEffect } from 'react';
import { styled, } from '@mui/material/styles';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PaymentIcon from '@mui/icons-material/Payment';
import FolderIcon from '@mui/icons-material/Folder';
import Typography from '@mui/material/Typography';
import SchoolIcon from '@mui/icons-material/School';
import MapIcon from '@mui/icons-material/Map';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router'
import BackpackIcon from '@mui/icons-material/Backpack';


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


type Props = {
  anchor: string,
  toggleDrawer: any
}

const listSideBar = [
  { path: '/', icon: <HomeIcon />, title: 'Home' },
  { path: '/course', icon: <SchoolIcon />, title: 'Classroom' },
  { path: '/map', icon: <MapIcon />, title: 'Map' },
  { path: '/game', icon: <VideogameAssetIcon />, title: 'QuickGame' },
  { path: '/list', icon: <FolderIcon />, title: 'List Users' },
]

export default function Sidebar({ anchor, toggleDrawer }: Props) {

  const router = useRouter()

  return (
    <Box sx={{ width: 220 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <DrawerHeader>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>


        {
          listSideBar.map((siderbar, index) => {
            return <ListItem onClick={() => { router.push(siderbar.path) }} key={index}>
              <ListItemButton>
                <ListItemIcon>
                  {siderbar.icon}
                </ListItemIcon>
                <Typography gutterBottom variant="h6" >
                  {siderbar.title}
                </Typography>
              </ListItemButton>
            </ListItem>
          })
        }

      </List>
      <Divider />
    </Box>

  );
}