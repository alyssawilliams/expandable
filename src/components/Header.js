import React from 'react';
import menu from '../../src/images/menu.svg';

export default function Header() {
  return (
    <header className="header">
      <button className="header__button">
        <img src={menu} alt="Expand menu"/>
      </button>
      <span className="header__text">Expandable Content</span>
    </header>
  )
}