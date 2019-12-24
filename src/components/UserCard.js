import React from 'react';
import arrow from '../../src/images/arrow.svg';

export default function Usercard(props) {
  const { picture, name, location, phone, email } = props; 

  return (
    <div className="user__card">
      <div className="user__top">
        <img className="user__photo" src={picture} alt={name} />
        <div className="user__text">
          <div className="user__name">{name}</div>
          <div className="user__location">{location}</div>
        </div>
        <button className="user__accordion__button">
          <img className="user__accordion__arrow" src={arrow} alt="Show contact info"/>
        </button>
      </div>

      <div className="user__accordion">
        <div className="user__contact user__contact--phone">
          <div className="user__label">Phone</div> 
          <div className="user__data">{phone}</div>
        </div>
        <div className="user__contact user__contact--email">
          <div className="user__label">Email</div> 
          <div className="user__data">{email}</div>
        </div>
      </div>
    </div>
  );
}