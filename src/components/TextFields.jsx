import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextFields = ( { data , label} ) => {
  
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 0, width: '25ch' },
        height: '60px',
        marginBottom: '7px'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label={label} variant="outlined" defaultValue={data}/>
    </Box>
  );
}

export default TextFields;
