import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { indigo , teal} from '@mui/material/colors';

export default function Footer() {
  return (
    <div>
        <Box sx={{ width: '100%', height: 200, backgroundColor:indigo[500], mt:4}}>
          <Stack  direction="column"  justifyContent="center"  alignItems="center" spacing={2} sx={{pt:2}}>

            
              <Typography sx={{color:'white'}} variant="h4">Social Media</Typography>
              <Typography sx={{color:'white'}} variant="h6" gutterBottom>Follow Me</Typography>
                <Stack  direction="row"  justifyContent="center"  alignItems="center"  spacing={2}>
                  <Avatar sx={{ bgcolor: teal[500],p:1}} ><FacebookIcon sx={{fontSize:35}}/></Avatar>
                  <Avatar sx={{ bgcolor: teal[500],p:1}} ><YouTubeIcon sx={{fontSize:35}}/></Avatar>
                  <Avatar sx={{ bgcolor: teal[500],p:1}} ><InstagramIcon sx={{fontSize:35}}/></Avatar>
                  <Avatar sx={{ bgcolor: teal[500],p:1}} ><TwitterIcon sx={{fontSize:35}}/></Avatar>
                </Stack>
            

          </Stack>
        </Box>
    </div>
  )
}
