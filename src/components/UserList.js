import React from "react";
import UserCard from "./UserCard.js";

export default function UserList(props) {
  const users = props.userData.map(user => {
    const { login, picture, name, location, phone, email } = user; 

    return (
      <UserCard 
        key={login.uuid}
        picture={picture.medium}
        name={`${name.first} ${name.last}`}
        location={`${location.state}, ${location.country}`}
        phone={phone}
        email={email}
      />
    );
  });

  return (
    <main className="users">
      { users }
    </main>
  );
}