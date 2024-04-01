import { useState } from 'react'
import './App.css'
import { Navbar } from './shared/Navbar'
import { HomeApp } from './components/pages/HomeApp'
import { Footer } from './shared/Footer'
import { Button, Card, Typography } from '@mui/material'

function App() {
  const [count, setCount] = useState(0)

  const handleReset = () => {
    setCount(0)
  }

  return (
    <>
      <div>
        <Navbar />
        <HomeApp />
        <Card sx={{ display: 'grid', gap: '10px' }}>
          <Typography color='primary'>
            {count}
          </Typography>
          <Button variant='outlined' onClick={() => setCount((count) => count + 1)}>
            Count
          </Button>
          <Button variant='outlined' onClick={handleReset}>
            Reset
            </Button>
        </Card>
        <Footer />
      </div>
    </>
  )
}

export default App
