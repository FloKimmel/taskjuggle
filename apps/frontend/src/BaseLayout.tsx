import { Box } from '@mui/material';
import { Navbar } from './components';
import { Outlet } from 'react-router';

export function BaseLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Box component='main' sx={{ flexGrow: 1, padding: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}
