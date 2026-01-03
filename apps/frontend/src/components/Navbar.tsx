import { AppBar, Toolbar, Typography } from '@mui/material';
import { useNavigate } from 'react-router';
import { routes } from '../router';
import { SignInOutButton } from './SignInOutButton';

export function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar component='nav' position='sticky'>
      <Toolbar>
        <Typography
          variant='h6'
          component='div'
          sx={{ flexGrow: 1 }}
          onClick={() => navigate(routes.home)}
          style={{ cursor: 'pointer' }}
        >
          TaskJuggler
        </Typography>
        <SignInOutButton />
      </Toolbar>
    </AppBar>
  );
}
