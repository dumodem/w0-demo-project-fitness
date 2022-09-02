import React, { useEffect, useState} from 'react';
import { Box, Stack, TextField, Typography, Button } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollBarBP from './HorizontalScrollBarBP';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState("");
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(()=>{
        const fetchExerciseData = async () => {
            const bodyPartsData =await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
            setBodyParts(['all', ...bodyPartsData]);
        }

        fetchExerciseData();
    },[])

    const handleSearch = async () => {
        if(search){
            const exerciseData = await fetchData(
               'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
            console.log(exerciseData);
            const searchedExecises = exerciseData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            )
            setSearch('');
            setExercises(searchedExecises);
        }
        
        }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
        <Typography fontWeight={700} sx={{
            fontSize: {lg: '44px', xs: '30px'}
        }} mb="50px" textAlign='center'>
            Awesome Exercises <br/> You should know
        </Typography>
        <Box position='relative' mb='72px'>
            <TextField 
                height='76px'
                value={search}
                onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
                placeholder='Search exercises'
                type='text'
                sx={{
                    input: { fontWeight: '700', border: 'none', borderRadius: '4px'},
                    width: { lg: '800px', xs: '350px'},
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    
                }}
            />
            <Button 
                className='search-btn'
                sx={{
                    bgcolor: '#fb5607',
                    color: '#fff',
                    textTransform: 'none',
                    width: { lg: '175px', xs:'88px'},
                    fontSize: { lg: '20px', xs: '12px'},
                    height: '56px',
                    
                    right:'0'
                }}
                onClick={handleSearch}
            >Search</Button>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', p:'20px'}}>
                <HorizontalScrollBarBP data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
    </Stack>
  )
}

export default SearchExercises
