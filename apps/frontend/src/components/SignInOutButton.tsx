import { Button } from '@mui/material';
import { routes } from '../router';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../contexts';

export function SignInOutButton() {
  const { isSignedIn, signOut } = useAuthContext();
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate(routes.login);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate(routes.home);
  };

  const text = isSignedIn ? 'Sign Out' : 'Sign In';
  const action = isSignedIn ? handleSignOut : handleSignIn;

  return (
    <Button color='inherit' onClick={action}>
      {text}
    </Button>
  );
}
