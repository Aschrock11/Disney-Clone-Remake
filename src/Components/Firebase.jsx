import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyARHLAQW3ddAXL2hCBKZOmFz5PQqTlfod0',
  authDomain: 'disney-clone-ab432.firebaseapp.com',
  projectId: 'disney-clone-ab432',
  storageBucket: 'disney-clone-ab432.appspot.com',
  messagingSenderId: '130248294968',
  appId: '1:130248294968:web:7e2d174942dbc539d9dccd',
  measurementId: 'G-6RBHXKX9X4',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
