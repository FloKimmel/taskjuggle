import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth/web-extension';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: 'AIzaSyCCvkHjyAMowTq_jc2rtH3m0JwHQNMJBys',
  authDomain: 'taskjuggler-31ad5.firebaseapp.com',
  projectId: 'taskjuggler-31ad5',
  storageBucket: 'taskjuggler-31ad5.firebasestorage.app',
  messagingSenderId: '151957003622',
  appId: '1:151957003622:web:49ba75184c542287fd3ca7'
});

export const firebaseAuth = getAuth(app);
export const firestore = getFirestore(app);

if (import.meta.env.MODE === 'development') {
  connectAuthEmulator(firebaseAuth, 'http://127.0.0.1:9099');
  connectFirestoreEmulator(firestore, '127.0.0.1', 8080);
}
