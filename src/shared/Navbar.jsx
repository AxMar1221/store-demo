// import RoofingIcon from '@mui/icons-material/Roofing';
import BusinessIcon from '@mui/icons-material/Business';
import ConstructionIcon from '@mui/icons-material/Construction';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Container, InputBase, MenuItem, Toolbar, Typography } from "@mui/material"
import { styled, alpha } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const searchTerm = (e) => {
  e.preventDefault();
  const textValue = e.target.value;
  console.log(textValue)
}

export const Navbar = () => {
  return (
    <>
      <AppBar color="primary">
        <Container maxWidth='xl'>
          <Toolbar
            disableGutters
            sx={{ display: 'flex', justifyContent: 'center', gap: '20px', my: 1 }}
          >
            {/* <RoofingIcon fontSize='large' sx={{ mr: 1 }} /> */}
            <BusinessIcon fontSize='large' sx={{ mr: 1 }} />
            <Typography sx={{
              bgcolor: 'background.paper',
              boxShadow: 20,
              borderRadius: 2,
              p: 2,
              minWidth: 20,
            }} variant='h4' color='primary'>Store</Typography>
            <MenuItem >
              <NavLink
                className='color'
                to="/home"
              >
                Inicio
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                className='color'
                to="/products"
              >
                Productos
              </NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink
                className='color'
                to="/contact"
              >
                Contacto
              </NavLink>
            </MenuItem>
            <Search>
              <SearchIconWrapper>
                <SearchIcon fontSize='medium' sx={{ mr: 1 }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder='Buscar...'
                inputProps={{ 'aria-label': 'search' }}
                onChange={searchTerm}
              />
            </Search>
            <ConstructionIcon fontSize='large' sx={{ mr: 1 }} />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
