import React, { useEffect } from 'react'
import { useState } from 'react';

import { deleteUser, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
const auth = getAuth();
const Profile = () => {
  const navigate=useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => { 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.email);  // user is logged in
        setUser(user.email);
      } else {
        navigate('/login');
      }
    });
  },[]);
  if(user===null){
    console.log("user is null");
    navigate('/login');
  }
  const delet=async()=>{
   const is=confirm("Are you sure you want to delete your account?");
    if(is){
      deleteUser(auth.currentUser).then(() => {
        toast.success('Account Deleted Successfully');
        navigate('/login');
      }).catch((error) => {
        console.log(error);
      });
    }
  }
  return (
    <>
    <button onClick={()=>{
        navigate(-1);
    }} className='m-3'>Back</button>
    <button onClick={()=>{
        navigate('/sheet');
    }}>Sheet</button>
    <div className='h-screen w-full flex justify-center items-center flex-col gap-10'>
      {user}
      <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" onClick={()=>{
        signOut(auth).then(() => {
          localStorage.removeItem('spreadsheetData');
          localStorage.removeItem('pagename');
          toast.success('Logout Successfully');
          navigate('/login');
        }).catch((error) => {
          console.log(error);
        });
      }}>Logout</button>
      <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100" 
      onClick={delet}>Delete Account</button>
    </div>
    </>
  )
}

export default Profile
