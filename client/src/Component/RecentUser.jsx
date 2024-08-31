import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const auth = getAuth();
const RecentUser = () => {
    const navigate=useNavigate();
    const [user, setUser] = React.useState(null);
    const [userRecord, setUserRecord] = React.useState([]);
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
    <tr>
      <td>The Sliding Mr. Bones</td>
    </tr>
    <tr>
      <td>The Sliding Mr. Bones</td>
    </tr>
    {userRecord.map((user) => (
        <tr>
            <td>{user.email}</td>
        </tr>
    ))}
  </tbody>
</table>
    </div>

    </>
  )
}

export default RecentUser
