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
          sx={{ flexGrow: 1, cursor: 'pointer' }}
          onClick={() => navigate(routes.home)}
        >
          TaskJuggle
        </Typography>
        <SignInOutButton />
      </Toolbar>
    </AppBar>
  );
}
