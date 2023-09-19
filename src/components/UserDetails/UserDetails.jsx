import React from 'react'
import { useLoaderData } from 'react-router-dom'

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user);
    const {name,website} = user;
  return (
    <div className='space-y-4'>
        <h1>Details About Users : {name}</h1>
        <h2 className='text-4xl'>Website : {website}</h2>
    </div>
  )
}

export default UserDetails