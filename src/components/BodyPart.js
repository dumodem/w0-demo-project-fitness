import React from 'react';
import { Stack, Typography } from '@mui/material';
import BodyPartIcon from '../assets/images/gym.png'

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={
        {
            borderTop: (bodyPart === item) ? '4px solid #fb5607': "", 
            background: (bodyPart === item) ? '#fb5607': "#fff", 
            borderRadius: '20px', 
            width: '270px', 
            height: '282px', 
            cursor: 'pointer', 
            gap: '47px' 
        }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={BodyPartIcon} alt="dumbbell" style={{ width: '150px', height: '150px' }} />
    <Typography 
        fontSize="24px" 
        fontWeight="bold" 
        fontFamily="Alegreya" 
        color={(bodyPart === item) ? '#FFF': "#3A1212" }
        textTransform="capitalize"> {item}</Typography>
  </Stack>
  )
}

export default BodyPart