// Import the functions you need from the SDKs you need
import { initializeApp, getAuth } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACrlpzxLTVi90AzBus5PfrWKm_54onUc0",
  authDomain: "good-learner-dd2ec.firebaseapp.com",
  projectId: "good-learner-dd2ec",
  storageBucket: "good-learner-dd2ec.appspot.com",
  messagingSenderId: "564756344949",
  appId: "1:564756344949:web:56f6c69ddee0ff0348083c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
