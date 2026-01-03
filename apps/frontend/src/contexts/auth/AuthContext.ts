import { createContext, useContext } from 'react';
import type { User } from './types';

export type AuthContext = {
  /**
   * The signed in user or `null` if not signed in yet.
   */
  user: User | null;

  /**
   * Whether the user is signed in.
   * A value of `null` means that the sign in status is currently being evaluated and not known yet.
   */
  isSignedIn: boolean | null;

  /**
   * Signs in a user with the given email address and password.
   *
   * @param email The users email address
   * @param password The users password
   * @returns A promise representing the sign in process
   */
  signIn: (email: string, password: string) => Promise<unknown>;

  /**
   * Signs out the current user.
   */
  signOut: () => void;
};

export const AuthContext = createContext<AuthContext>({
  user: null,
  isSignedIn: null,
  signIn: () => Promise.resolve(),
  signOut: () => {},
});

export const useAuthContext = () => useContext(AuthContext);
