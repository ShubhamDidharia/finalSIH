import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { collection, getDocs ,getFirestore} from "firebase/firestore"; 
import app from '../context/firebase';
const firestore = getFirestore(app);
const auth = getAuth();
const RecentUser = () => {
    const navigate=useNavigate();
    const [user, setUser] = React.useState(null);
    const [userRecord, setUserRecord] = React.useState([]);
    useEffect(() => {
        const getUsers = async () => {
          const usersCol = collection(firestore, "User");
          const userSnapshot = await getDocs(usersCol);
          
          // Map the snapshot to extract only the user data
          const userRecord = userSnapshot.docs.map((doc) => ({
              id: doc.id, // This includes the user's email as the ID
              ...doc.data(), // This spreads out the data fields (e.g., `data`)
          }));
          console.log(userRecord);
          // Set the userRecord state or use it as needed
          setUserRecord(userRecord);
        };
        getUsers();
    } ,[]);
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
    // useEffect(() => {
    //     getAuth(auth).getUser([]).then((userRecord) => { 
    //         console.log(userRecord);
    //     }
    //     ).catch((error) => {
    //         console.log(error);
    //     });
    // });

  return (
    <>

    <nav class="bg-white border-gray-200">
  <div class="max-w-screen flex flex-wrap items-center justify-between px-6 pt-3 pb-2">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="./2.png" class="h-12" alt="SocialCalc Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap">SocialCalc</span>
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
    <div className='h-[75vh]  w-screen flex justify-center items-center text-center'>
    <table class="text-xl border-4" >
  <thead>
    <tr>
    <th className='text-[25px] p-4'>Users</th>
    </tr>
  </thead>
  <tbody >
    {userRecord.map((user) => (
        <tr className='border-2'>
            <td className='border-4 p-3'>{user.id}</td>
        </tr>
    ))}
  </tbody>
</table>
    </div>

    </>
  )
}

export default RecentUser
