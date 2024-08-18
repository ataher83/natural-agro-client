// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCx2lT8gBpfebtGCykw44rVfb7HRsB0-7A",
//   authDomain: "natural-agro.firebaseapp.com",
//   projectId: "natural-agro",
//   storageBucket: "natural-agro.appspot.com",
//   messagingSenderId: "205202897644",
//   appId: "1:205202897644:web:d73dd09c811c88caa003c9"
// };

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);