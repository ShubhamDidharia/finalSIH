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
    <button onClick={()=>{
        navigate(-1);
    }} className='m-2'>Back</button>
    <button onClick={()=>{
        navigate('/sheet');
    }}>Sheet</button>
    <div className='h-[90vh] w-screen flex justify-center items-center'>
    <table class="table-auto" >
  <thead>
    <tr>
      <th>Users</th>
    </tr>
  </thead>
  <tbody >
    {userRecord.map((user) => (
        <tr>
            <td>{user.id}</td>
        </tr>
    ))}
  </tbody>
</table>
    </div>

    </>
  )
}

export default RecentUser
