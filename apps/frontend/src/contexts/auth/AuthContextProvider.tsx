import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as signOutFirebase,
  type User as FirebaseUser,
} from 'firebase/auth';
import { type ReactNode, useState, useCallback, useEffect } from 'react';
import { firebaseAuth } from '../../firebase';
import { AuthContext } from './AuthContext';
import type { User } from './types';

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isSignedIn, setIsSignedIn] = useState<boolean | null>(null);

  useEffect(
    () =>
      onAuthStateChanged(firebaseAuth, (user: FirebaseUser | null) => {
        setUser(user ? { id: user.uid } : null);
        setIsSignedIn(user !== null);
      }),
    [],
  );

  const signIn = useCallback(
    (email: string, password: string) => signInWithEmailAndPassword(firebaseAuth, email, password),
    [],
  );

  const signOut = useCallback(() => {
    signOutFirebase(firebaseAuth);
  }, []);

  return <AuthContext.Provider value={{ user, signIn, signOut, isSignedIn }}>{children}</AuthContext.Provider>;
};
