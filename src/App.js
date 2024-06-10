import { useEffect, useState } from "react";
import UsersList from "./component/UsersList";
import axios from "axios";


function App() {
  const [users, setUser] = useState([]);
  const [loadUsers, setloadUsers] = useState(true);
  console.log(users)
  const getUsers = async()=>{
    const axiosResponse = await axios.get('https://jsonplaceholder.typicode.com/users')
    // console.log(axiosResponse)
    setloadUsers(false)
    setUser(axiosResponse.data)
  }
  useEffect(()=>{
    getUsers()
  },[])
  return (
    <div>
      <UsersList users={users} loadUsers={loadUsers} />
    </div>
  );
}

export default App;
