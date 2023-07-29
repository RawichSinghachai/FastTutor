import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Avatar from '@mui/material/Avatar';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { RootState } from '@/stores/store';
import { useSelector } from 'react-redux';
import { teal , indigo } from '@mui/material/colors';
import { useRouter } from 'next/router'

export default function Profile() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const router = useRouter()
  const userdata = useSelector((state: RootState) => state.UserDataStore.username)

  const handleLogOut = () =>{
    handleClose()
    sessionStorage.removeItem('token')
    router.push('/')
  }
  
  return (
    <>
      <Avatar
        sx={{ ":hover": { cursor: 'pointer' }, bgcolor: teal[500] }}
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
          
        {userdata.slice(0,2).toUpperCase()}
      </Avatar>


      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {/* <MenuItem onClick={handleClose}>
          <AccountCircleIcon sx={{ mr: 2 }} />
          Profile
        </MenuItem> */}

        <MenuItem onClick={() => router.push('/profile')}>
          <AccountCircleIcon sx={{ mr: 2 }} />
          Profile
        </MenuItem>


        <MenuItem onClick={() => router.push('/register/student')}>
          <ArticleIcon sx={{ mr: 2 }} />
          Register Student
        </MenuItem>

        <MenuItem onClick={() => router.push('/register/tutor')}>
          <ArticleIcon sx={{ mr: 2 }} />
          Register Tutor
        </MenuItem>

        <MenuItem onClick={() => router.push('/login')}>
          <LoginIcon sx={{ mr: 2 }} />
          LogIn
        </MenuItem>

        <MenuItem onClick={handleLogOut}>
          <LogoutIcon sx={{ mr: 2 }} />
          Logout
        </MenuItem>


        <MenuItem onClick={() => router.push('/admin')}>
          <LoginIcon sx={{ mr: 2 }} />
          Admin
        </MenuItem>
      </Menu>
    </>
  );
}