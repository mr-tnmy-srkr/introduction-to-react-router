import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user);
    const {name} = user;
  return (
    <div>
        <h1>Details About Users : {name}</h1>
    </div>
  )
}

export default UserDetails