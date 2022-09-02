import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import ExerciseCard from './ExerciseCard';

const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <ArrowBackIosNewIcon />
      </Typography>
    );
};

const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <ArrowForwardIosIcon />
      </Typography>
    );
  };

const HorizontalScrollBarEC = ({ data }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
   
        {data.map((item) => (
        <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
        >
             <ExerciseCard exercise={item} /> 
        </Box>
        ))
        }
  </ScrollMenu>
  )
}

export default HorizontalScrollBarEC