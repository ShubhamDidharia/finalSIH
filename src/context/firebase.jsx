
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { createContext, useContext } from "react";
import { getDatabase,set,ref } from "firebase/database";
import { getFirestore } from "firebase/firestore";
const FireBaseContext=createContext(null);
export const useFirebase=()=>useContext(FireBaseContext);
import 'dotenv/config';
const firebaseConfig = {
  apiKey:"AIzaSyBjoaKnE6RmbNydFwfgIa94iuvghLJEIEU",
  authDomain:"testing-b2fc7.firebaseapp.com",
  projectId:"testing-b2fc7",
  storageBucket:"testing-b2fc7.appspot.com",
  messagingSenderId: "789805491019",
  appId:"1:789805491019:web:29b7670577616d2d68bece",
  measurementId:"G-EXS8NX6MMV",
  databaseURL:"https://testing-b2fc7-default-rtdb.firebaseio.com",
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