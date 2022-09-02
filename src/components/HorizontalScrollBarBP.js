import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart';

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

const HorizontalScrollBarBP = ({ data, bodyPart, setBodyPart}) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
   
        {data.map((item) => (
        <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
        >
             <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /> 
        </Box>
        ))
        }
  </ScrollMenu>
  )
}

export default HorizontalScrollBarBP