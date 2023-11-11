// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore} from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtEI0Pqh4qugPiq4ytvk1Tn9xLtm869Gw",
  authDomain: "ghayda-33ce9.firebaseapp.com",
  projectId: "ghayda-33ce9",
  storageBucket: "ghayda-33ce9.appspot.com",
  messagingSenderId: "435164173107",
  appId: "1:435164173107:web:adc3d06ed244cf43806446"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)