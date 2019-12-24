import React from 'react';

export default function Usercard(props) {
  const { picture, name, location, phone, email } = props; 

  return (
    <div className="user">
      <div><img src={picture} alt={`${name}'s profile picture`} /></div>
      <div>{name}</div>
      <div>{location}</div>
      <div>Phone {phone}</div>
      <div>Email {email}</div>
      <hr />
    </div>
  );
}