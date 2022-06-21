import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

const App = () => {
  const [p, setP] = useState(0)
  const [t, setT] = useState(0)
  const [r, setR] = useState(0)
  const [si, setSI] = useState(0)

  const simpleInterest = () => {
    setSI(p*t*r/100)
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <Container>

        <TextField onChange={(event) =>setP(event.target.value)} id="outlined-basic" label="Enter P" variant="outlined" /><br /><br />
        <TextField onChange={(event) =>setT(event.target.value)} id="outlined-basic" label="Enter T" variant="outlined" /><br /><br />
        <TextField onChange={(event) =>setR(event.target.value)} id="outlined-basic" label="Enter R" variant="outlined" /><br /><br />
        <Button onClick={() => simpleInterest()} variant="contained">Calculate SI</Button><br /><br />
        <Typography variant="h6" gutterBottom component="div">
        Simple Interest is: {si}
        </Typography>
      </Container>
    </div>
  )
}

export default App
