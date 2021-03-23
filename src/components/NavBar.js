import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="NavBar">
      <h1>Body on Break</h1>
      <Link to={'/'}>Home</Link>
      <Link to={'/goals'}>Goals</Link>
      <Link to={'/workouts'}>Workouts</Link>
      <Link to={'/stats'}>Stats</Link>
    </div>
  );
};

export default NavBar;