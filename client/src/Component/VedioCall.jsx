import React, { useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const auth = getAuth();
const VedioCall = () => {
    const navigate=useNavigate();
    const [user, setUser] = React.useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log(user.email);  // user is logged in
              setUser(user);
            } else {
              navigate('/login');
            }
          });
    });
    if(user===null){
      navigate('/login');
    }

  return (
    <>
    

<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen flex flex-wrap items-center justify-between px-6 pt-3 pb-2">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="./2.png" class="h-12" alt="SocialCalc Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SocialCalc</span>
    </a>
    
    <div class="hidden  md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-5 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        
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


    <div class="min-h-screen bg-slate-900 flex flex-col items-center justify-center">
    <h1 class="text-5xl text-white font-bold mb-8 animate-pulse">
        Coming Soon
    </h1>
    <p class="text-white text-lg mb-8">
        We're working hard to bring you something amazing. Stay tuned!
    </p>
</div>
    </>
  )
}

export default VedioCall
