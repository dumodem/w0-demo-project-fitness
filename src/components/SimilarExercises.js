import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollBarEC from './HorizontalScrollBarEC';
import Loader from './Loader';

const SimilarExercises = ({ targetExercises, equipmentExercises }) => {
  return (
    <Box sx={{ mt: {lg: '100px', xs:'0'}}} >
      <Typography variant='h3' mb={5} mt={5}>Exercises that target the same muscle group</Typography>
      <Stack>
        {targetExercises.length? (<HorizontalScrollBarEC data={targetExercises} />) : (<Loader />) }
      </Stack>
      <Typography variant='h3' mb={5} mt={5}>Exercises that use the same equipment</Typography>
      <Stack>
        {equipmentExercises.length? (<HorizontalScrollBarEC data={equipmentExercises} />) : (<Loader />) }
      </Stack>
    </Box>
  )
}

export default SimilarExercises