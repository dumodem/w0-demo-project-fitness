import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Logo from '../assets/images/fitness-logo.png';

const Footer = () => {
  return (
   <Box mt='80px' bgcolor='#eae2b7'>
    <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
      <img  src={Logo} alt='logo' width='50px' height='50px' />
      <Typography variant='h5' pb='20px'>
        Made by StellarDog Technology
      </Typography>
    </Stack>
   </Box>
  )
}

export default Footer