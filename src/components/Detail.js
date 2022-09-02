import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import bodyPartIcon from '../assets/images/gym2.png';
import targetIcon from '../assets/images/gym2.png';
import equipmentIcon from '../assets/images/gym2.png';

const Detail = ({ exerciseDetail }) => {

    const { bodyPart, gifUrl, name, target, equipment} = exerciseDetail;
    console.log(gifUrl);

    const extraDetail = [
        {
            icon: bodyPartIcon,
            name: bodyPart,
        },
        {
            icon: targetIcon,
            name: target,
        },
        {
            icon: equipmentIcon,
            name: equipment,
        },
    ]

  return (
    <Stack gap='60px' sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center'}}>
        <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
        <Stack
            sx={{ gap: {lg: '35px', xs: '20px'}}}
        >
            <Typography variant='h3'>
                {name}
            </Typography>
            <Typography variant='h6'>
                Exercise can make you strong. {name} {` `}
                is one of the best exercises to target you {target}. It will help you improve 
                the mood and energy.

            </Typography>
            {extraDetail.map((item) => (
                <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
                    <Button sx={{ background: '#ffe5d9', borderRadius:'50%', width: '100px', height: '100px'}}>
                        <img src={item.icon} alt={item.name} style={{ width: '50px', height: '50px' }}/>
                    </Button>
                    <Typography variant='h5' textTransform='capitalize'>
                        {item.name}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Detail