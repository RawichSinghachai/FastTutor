import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Image, { StaticImageData } from 'next/image';
import Modal from '@mui/material/Modal';
import { useDispatch } from 'react-redux';
import { addCart, resetCart } from '@/stores/QuantityCart';
import { lightGreen, red, green, grey, teal } from '@mui/material/colors';

type Props = {
  topic: string,
  duration: string,
  price: string,
  image: StaticImageData
}


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};



export default function SubjectCard({ topic, duration, price, image }: Props) {

  //Popup

  const dispatch = useDispatch()

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false)
  };

  useEffect(() => {
    dispatch(resetCart())
  }, [])


  return (
    <Card sx={{ maxWidth: 400, borderRadius: 2, p: 2, ":hover": { boxShadow: '20px 10px 30px' } }} elevation={24}>
      <Stack direction="column" justifyContent="center" alignItems="center" spacing={1}>
        <Image src={image} alt={'qoogle'} height={200} width={200} priority={true} />

        <Typography variant='h5'>{topic}</Typography>

        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo labore maiores sed debitis explicabo dolorum non, pariatur harum atque? Quia ex dolorem maxime officiis corporis vel sed magni, quidem labore!
        </Typography>

        <Typography variant="subtitle1" >Duration : {duration}</Typography>
        <Typography variant="subtitle1" >Price : {price}</Typography>

        <Button variant="contained" onClick={handleOpen}
          sx={{ bgcolor: teal[500], ":hover": { bgcolor: teal[700] } }}>
          submit
        </Button>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Stack direction="column" justifyContent="center" spacing={4}>

              <Typography variant="h6" sx={{ textAlign: 'center' }}>
                Confirm your course
              </Typography>

              <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={1}>

                <Button variant="contained" sx={{ bgcolor: red[500], ":hover": { bgcolor: red[700] } }}
                  onClick={() => handleClose()} >
                  Cancel
                </Button>

                <Button variant="contained" sx={{ bgcolor: green['A400'], ":hover": { bgcolor: green['A700'] } }}
                  onClick={function () {
                    handleClose();
                    dispatch(addCart())
                  }} >
                  Confirm
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Modal>
      </Stack>
    </Card>
  );
}