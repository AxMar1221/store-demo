import { useEffect, useState } from 'react'
// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
// import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { NavigateBeforeOutlined, NavigateNextOutlined } from '@mui/icons-material';


export const ProductosPage = () => {
    // const [count, setCount] = useState(0)
    const [newData, setNewData] = useState([]);

    useEffect(() => {
        async function fetchData() {

            const url = 'https://mocki.io/v1/ec079118-f9c5-4bc0-92fd-3f623c06c307'
            const options = {
                method: 'GET',
            };

            const resp = await fetch(url, options);
            const data = await resp.json();
            console.log(data)
            setNewData(data)
        }
        fetchData();
    }, [])

    const itemsPerPage = 5;
    const totalPages = Math.ceil(newData.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const nextPape = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    }

    const prevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    }

    const starProducts = (currentPage - 1 ) * itemsPerPage;
    const visibleProducts = newData.slice(starProducts, starProducts + itemsPerPage);

    return (
        <div className='container mt-4'>
            <Typography
                variant="h3"
                color="primary"
                sx={{ alignContent: 'center' }}
            >
                Productos
            </Typography>
            <TableContainer component={Paper} elevation={6} square={false} sx={{ width: '100%', overflowX: 'auto', padding: '10px', marginBottom: '20px' }}>
                <Table sx={{ maxWidth: 950, height: 550 }}>
                    <TableHead>
                        <TableRow sx={{ bgcolor: 'whitesmoke' }}>
                            <TableCell align='center'>ID</TableCell>
                            <TableCell align='center'>Nombre</TableCell>
                            <TableCell align='center'>Descripción</TableCell>
                            <TableCell align='center'>Tipo</TableCell>
                            <TableCell align='center'>Precio</TableCell>
                            <TableCell align='center'>Stock</TableCell>
                            <TableCell align='center'>Imagen</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {visibleProducts.map((row, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell align='center'>{row.name}</TableCell>
                                <TableCell align='center'>{row.desc}</TableCell>
                                <TableCell align='center'>{row.type}</TableCell>
                                <TableCell align='center'>${row.price}.00</TableCell>
                                <TableCell align='center'>{row.stock}</TableCell>
                                <TableCell>
                                    <img src={row.image} width={50} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div style={{ display: "flex", justifyContent: "right", marginTop: "10px" }}>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={prevPage}
                  disabled={currentPage === 1}
                >
                <NavigateBeforeOutlined />
                  Anterior
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={nextPape}
                  disabled={currentPage === totalPages}
                  style={{ marginLeft: "10px" }}
                >
                  Siguiente <NavigateNextOutlined />
                </Button>
              </div>
            </TableContainer>

            {/* <Card sx={{ display: 'grid', gap: '10px', padding: '10px', margin: '15px' }}>
                <Button variant='outlined' onClick={() => setCount((count) => count + 1)}>
                    <AddCircleOutlineIcon fontSize='large' />
                </Button>
                <Typography color='primary' variant='h5'>
                    {count}
                </Typography>
                <Button variant='outlined' onClick={() => setCount(count > 0 ? count - 1 : 0)}>
                    <RemoveCircleOutlineIcon fontSize='large' />
                </Button>
            </Card> */}
        </div>
    )
}
