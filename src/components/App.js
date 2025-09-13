import React, { useEffect, useState } from "react";
import "./../styles/App.css";
import UserList from "./UserList";
import UserDetails from "./UserDetails";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import "regenerator-runtime/runtime";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users/");
      setUsers(response.data)
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList users={users} />} />
        <Route path="/users/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
};

export default App;
