import RoofingIcon from '@mui/icons-material/Roofing';
import ConstructionIcon from '@mui/icons-material/Construction';
import { AppBar, Container, MenuItem, Toolbar, Typography } from "@mui/material"
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <AppBar color="primary">
        <Container maxWidth='xl'>
          <Toolbar 
            disableGutters 
            sx={{ display: 'flex', gap: '20px', my: 1}}
          >
            <RoofingIcon fontSize='large' sx={{ mr: 1 }} />
            <Typography>Navbar</Typography>
            <MenuItem >
              <NavLink className='color'>Inicio</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink className='color'>Productos</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink className='color'>Contacto</NavLink>
            </MenuItem>
            <ConstructionIcon fontSize='large' sx={{ mr: 1 }} />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
