// import React from 'react'

import { Link } from "react-router-dom";

const User = ({user}) => {
    // console.log(user);
    const {id,name,email,phone} = user;
  return (
    <div className="border p-10 rounded-xl text-xl space-y-4">
        <h2 className="text-4xl">{name}</h2>
        <p>email : {email}</p>
        <p>phone : {phone}</p>
        {/* <Link to={`/user/${id}`}>Show Details</Link> */}
        <Link to={`/user/${id}`}>
        <button className="my-5">Show Details</button>
        </Link>
      
    </div>
  )
}

export default User