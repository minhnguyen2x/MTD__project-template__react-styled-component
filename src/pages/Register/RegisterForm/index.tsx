import React from 'react';
import TextField from '@mui/material/TextField';

const index = () => {
  return (
    <div style={{ color: 'blue' }}>
      <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
      />
      <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
      />
    </div>
  );
};

export default index;
