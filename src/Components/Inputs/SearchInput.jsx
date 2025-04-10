import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
import "./searchInput.css"

export default function SearchInputBase({label,onChange}) {
  return (
    <div className='search-bar-container'>
        <h4 className='px-4'>{label}:</h4>
        <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', maxWidth: 400 }}
        >
        <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Users"
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={onChange}
        />
        </Paper>
    </div>
  );
}