import { useState } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button, Card, Typography } from '@mui/material'


export const ProductosPage = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <div>
                <Typography
                    variant="h3"
                    color="primary"
                    sx={{ alignContent: 'center' }}
                >
                    Productos
                </Typography>
                <Card sx={{ display: 'grid', gap: '10px', padding: '10px', margin: '15px' }}>
                    <Button variant='outlined' onClick={() => setCount((count) => count + 1)}>
                        <AddCircleOutlineIcon fontSize='large' />
                    </Button>
                    <Typography color='primary' variant='h5'>
                        {count}
                    </Typography>
                    <Button variant='outlined' onClick={() => setCount(count > 0 ? count - 1 : 0)}>
                        <RemoveCircleOutlineIcon fontSize='large' />
                    </Button>
                </Card>
            </div>
        </>
    )
}
