import { useState } from 'react'
import './App.css'
import { Navbar } from './shared/Navbar'
import { HomeApp } from './components/pages/HomeApp'
import { Footer } from './shared/Footer'
import { Button, Card, Typography } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <HomeApp />
        <Card sx={{ display: 'grid', gap: '10px', padding: '10px', margin: '15px'}}>
          <Button variant='outlined' onClick={() => setCount((count) => count + 1)}>
            <AddCircleOutlineIcon fontSize='large'/> 
          </Button>
          <Typography color='primary' variant='h5'>
            {count}
          </Typography>
          <Button variant='outlined' onClick={() => setCount(count > 0 ? count - 1 : 0)}>
            <RemoveCircleOutlineIcon fontSize='large'/> 
            </Button>
        </Card>
        <Footer />
      </div>
    </>
  )
}

export default App
