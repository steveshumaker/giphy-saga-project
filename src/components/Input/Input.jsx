import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { useDispatch } from 'react-redux';

function Input() {

    const [giphySearch, setGiphySearch] = useState('');
    const dispatch = useDispatch();

    const handleSearch = (event) => {
        event.preventDefault();

        dispatch({ type: "GIPHY_SEARCH", payload: giphySearch });
        setGiphySearch('');
    }

    return (
        <Box component='form' >
            <TextField onChange={(event) => setGiphySearch(event.target.value)} value={giphySearch} sx={{ m:2 }} id='outlined-based' label='Search Giphy!' variant='outlined'/>
            <Button onClick={handleSearch} sx={{ m:2 }} variant='contained'>Search</Button>
        </Box>
    )
};

export default Input;