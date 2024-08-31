import React, { useEffect } from 'react'
import { useState } from 'react';

import { deleteUser, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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
    <nav class="bg-white border-gray-200 ">
  <div class="max-w-screen flex flex-wrap items-center justify-between px-6 pt-3 pb-2">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="./2.png" class="h-12" alt="SocialCalc Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap ">SocialCalc</span>
    </a>
    
    <div class="hidden  md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-5 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
        
        <li>
          <button class="bg-blue-700 text-white hover:bg-blue-800 px-6 me-2 mb-2  font-medium rounded-full "onClick={()=>{
        navigate(-1);
    }}>Back</button>
        </li>
        <li>
        <button class=" bg-blue-700 text-white hover:bg-blue-800  me-2 mb-2 font-medium rounded-full " onClick={()=>{
        navigate('/sheet');
    }}>Sheet</button>
        </li>
      </ul>
    </div>
  </div>
    </nav>
<div class="flex justify-center mx-auto mt-40 bg-white w-[25%] shadow rounded-lg border">
    <div class="px-4 py-5 sm:px-6\\\">
        <h3 class="text-lg mt-3 leading-6 font-medium text-gray-900">
            User Profile
        </h3>
      
    </div>
    <div class="border-t border-gray-200 px-4 py-6 sm:p-0">
        <dl class="sm:divide-y sm:divide-gray-200">
            <div class="py-3 sm:py-5 sm:px-6">
                <dt class="text-sm font-medium text-gray-500">
                    Email
                </dt>
                <dd class=" mt-2 text-sm text-gray-900 ">
                    {user}
                </dd>
            </div>   
        </dl>
    </div>
</div>
<div className='flex justify-center items-center flex-col gap-10 text-white'>
      {user}
      <button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 " onClick={()=>{
        signOut(auth).then(() => {
          toast.success('Logout Successfully');
          navigate('/login');
        }).catch((error) => {
          console.log(error);
        });
      }}>Logout</button>
      <button class="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100" 
      onClick={delet}>Delete Account</button>
    </div>


   </>
  )
}

export default Profile
