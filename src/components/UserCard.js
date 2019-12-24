import React from 'react';
import arrow from '../../src/images/arrow.svg';

export default function Usercard(props) {
  const { picture, name, location, phone, email } = props; 

  return (
    <div className="user__card">
      <div className="user__top">
        <img className="user__photo" src={picture} alt={`${name}'s profile picture`} />
        <div className="user__data">
          <div className="user__name">{name}</div>
          <div className="user__location">{location}</div>
        </div>
        <button className="accordion__button">
          <img className="accordion__arrow" src={arrow} alt="Show contact info"/>
        </button>
      </div>

      <div className="accordion">
        <div>Phone {phone}</div>
        <div>Email {email}</div>
      </div>
    </div>
  );
}