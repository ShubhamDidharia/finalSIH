
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { createContext, useContext } from "react";
import { getDatabase,set,ref } from "firebase/database";
import { getFirestore } from "firebase/firestore";
const FireBaseContext=createContext(null);
export const useFirebase=()=>useContext(FireBaseContext);
const firebaseConfig = {
  apiKey:process.env.VITE_API_KEY,
  authDomain:process.env.VITE_AUTH_DOMAIN,
  projectId:process.env.VITE_PROJECT_ID,
  storageBucket:process.env.VITE_STORAGE_BUCKET,
  messagingSenderId:process.env.VITE_MESSAGING_SENDER_ID,
  appId:process.env.VITE_APP_ID,
  measurementId:process.env.VITE_MEASUREMENT_ID,
  databaseURL:process.env.VITE_DATABASE_URL
};


const app= initializeApp(firebaseConfig);
const FireBaseAuth=getAuth(app);
const database=getDatabase(app);
const db = getFirestore(app);
export const FirebaseProvider=(props)=>{
  const signupwithemailandpassword=(email,password)=>{
    createUserWithEmailAndPassword(FireBaseAuth,email,password);
  }
  const putdata=(data,key)=>{
    return set(ref(database,key),data);
  }
  return(<FireBaseContext.Provider value={{signupwithemailandpassword,putdata}}>
      {props.children}
    </FireBaseContext.Provider>)
}

export default app;