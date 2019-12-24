import React from 'react';
import arrow from '../../src/images/arrow.svg';

export default class Usercard extends React.Component {
  toggleAccordion = (userID) => {
    let userCard = document.getElementById(userID);
    let openClass = 'user__card--open';
    let isOpen = userCard.classList.contains(openClass);

    if (!isOpen) {
      userCard.classList.add(openClass);
    }
    else {
      userCard.classList.remove(openClass);
    }
  }

  render() {
    const { id, picture, name, location, phone, email } = this.props;
    const { toggleAccordion } = this;

    return (
      <div className="user__card" id={id}>
        <div className="user__top">
          <div className="user__top__info">
            <img className="user__photo" src={picture} alt={name} />
            <div className="user__text">
              <div className="user__name">{name}</div>
              <div className="user__location">{location}</div>
            </div>
          </div>
          <button className="user__accordion__button" onClick={() => toggleAccordion(id)}>
            <img className="user__accordion__arrow" src={arrow} alt="Show contact info"/>
          </button>
        </div>

        <div className="user__accordion">
          <div className="user__contact user__contact--phone">
            <div className="user__label">Phone</div> 
            <div className="user__data user__data--phone">{phone}</div>
          </div>
          <div className="user__contact user__contact--email">
            <div className="user__label">Email</div> 
            <div className="user__data user__data--email">{email}</div>
          </div>
        </div>
      </div>
    );
  };
}