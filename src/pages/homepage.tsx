import React from 'react'
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Button from '@mui/material/Button';
import working from '../../public/working.png'
import computer from '../../public/computer.png'
import creating from '../../public/creating.png'
import VR from '../../public/VR.png'
import Typography from '@mui/material/Typography';
import { TypeAnimation } from 'react-type-animation';
import { lightGreen, cyan, red } from '@mui/material/colors';
import { useRouter } from 'next/router'

type Props = {}

const Homepage = (props: Props) => {

    const router = useRouter()

    return (
        <div style={{ backgroundImage: "linear-gradient(315deg, #61e5d5 9%, #ebdfbb 73%)" }}>

            {/* Part1 */}
            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
                <Button variant="text">Home</Button>
                <Button variant="text">About</Button>
                <Button variant="text">Service</Button>
                <Button variant="text">Contact</Button>

            </Stack>

            {/* Part2 */}

            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <div>
                    <TypeAnimation sequence={['Never Stop learning',1000,'Never Stop',1000]} repeat={Infinity} style={{ fontSize: '80px',fontWeight:'bold' ,display: 'inline-block' }}/>
                    <br />
                    <Typography sx={{fontSize:'80px'}} gutterBottom>
                        Topic
                    </Typography>
                    

                    <Typography variant="h4" gutterBottom>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga voluptatum vitae assumenda pariatur, quo eum magni minima quas fugiat!
                    </Typography>
                    

                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                        <Button variant="contained" sx={{fontSize:20 , backgroundColor:lightGreen[500] , 
                            ":hover": { backgroundColor:lightGreen[400] }}} onClick={()=>{router.push('/')}}>
                            Home
                        </Button>
                        <Button variant="contained" sx={{ fontSize:20, backgroundColor: red[500] ,
                        ":hover": { backgroundColor:red[400] }}} onClick={()=>{router.push('/game')}}>
                            QuickGame
                        </Button>
                    </Stack>
                </div>

                {/* image */}
                <Image src={working} alt={'title'} height={500} width={500} priority={true} />
            </Stack>

            {/* Part3 */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{backgroundColor:'white'}}>
                <Image src={VR} alt={'title'} height={500} width={500} priority={true} />

                <Typography variant="h4" >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis asperiores omnis culpa obcaecati iure reprehenderit dolorum veniam, temporibus commodi accusantium.
                </Typography>
            </Stack>


            {/* Part4 */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>

                <Typography variant="h4" >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis asperiores omnis culpa obcaecati iure reprehenderit dolorum veniam, temporibus commodi accusantium.
                </Typography>

                <Image src={computer} alt={'title'} height={500} width={500} priority={true} />

            </Stack>


            {/* Part5 */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                <Image src={creating} alt={'title'} height={500} width={500} priority={true} />

                <Typography variant="h4" >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis asperiores omnis culpa obcaecati iure reprehenderit dolorum veniam, temporibus commodi accusantium.
                </Typography>
            </Stack>

        </div>
    )
}

export default Homepage