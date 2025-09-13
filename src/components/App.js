import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    const response = axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    ).then(response => setUsers(response.data))
    .catch(err => console.error(err));;
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Routes>
          <Route path='/' element={<UserList users={users}/>}/>
          <Route path='/users/:id' element={<UserDetails />}/>
        </Routes>
    </div>
  );
};

export default App;
