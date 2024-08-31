import React from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const auth = getAuth();
const VedioCall = () => {
    const navigate=useNavigate();
    const [user, setUser] = React.useState(null);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user.email);  // user is logged in
        setUser(user);
      } else {
        navigate('/login');
      }
    });
    if(user===null){
      navigate('/login');
    }

  return (
    <>
    <button onClick={()=>{
        navigate(-1);
    }} className='m-2'>Back</button>
    <div class="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
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
