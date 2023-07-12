// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { getStorage } from 'firebase/storage';
// import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: 'AIzaSyARHLAQW3ddAXL2hCBKZOmFz5PQqTlfod0',
//   authDomain: 'disney-clone-ab432.firebaseapp.com',
//   projectId: 'disney-clone-ab432',
//   storageBucket: 'disney-clone-ab432.appspot.com',
//   messagingSenderId: '130248294968',
//   appId: '1:130248294968:web:7e2d174942dbc539d9dccd',
//   measurementId: 'G-6RBHXKX9X4',
// };

// const firebaseapp = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// const auth = getAuth(firebaseapp);

// const provider = new GoogleAuthProvider();

// const storage = getStorage(firebaseapp);

// export { auth, provider, storage };
// export default db;
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyARHLAQW3ddAXL2hCBKZOmFz5PQqTlfod0',
  authDomain: 'disney-clone-ab432.firebaseapp.com',
  projectId: 'disney-clone-ab432',
  storageBucket: 'disney-clone-ab432.appspot.com',
  messagingSenderId: '130248294968',
  appId: '1:130248294968:web:7e2d174942dbc539d9dccd',
  measurementId: 'G-6RBHXKX9X4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
