import React, {useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

const UserDetails = () => {
    const {id} = useParams();

    const [user, setUser] = useState(null);

    const fetchUser = () => {
    const response = axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    ).then(response => setUser(response.data))
    .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
        {user === null ? <div>Loading...</div> : <p>
                Name: {user.name}, Username: {user.username}, Email: {user.email}, Phone: {user.phone}, Website: {user.website}
            </p>}
    </div>
  )
}

export default UserDetails