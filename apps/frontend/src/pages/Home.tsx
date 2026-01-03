import { useAuthContext } from '../contexts';

export function Home() {
  const { isSignedIn } = useAuthContext();
  return <div>Welcome to the Home Page. You are {isSignedIn ? 'logged in' : 'not logged in'}!</div>;
}
