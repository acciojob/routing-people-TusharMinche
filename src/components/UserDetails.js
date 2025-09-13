import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import "regenerator-runtime/runtime";

const UserDetails = () => {
  const {id} = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setUser(null);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        setUser(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div>
      {user === null ? (
        <div>Loading...</div>
      ) : (
        <p>
          Name: {user.name}, Username: {user.username}, Email: {user.email}, 
          Phone: {user.phone}, Website: {user.website}
        </p>
      )}
    </div>
  );
};

export default UserDetails;
