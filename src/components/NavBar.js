import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const NavBar = ({setLoggedIn, loggedIn}) => {

  let history = useHistory()
  const onLogout = () => {
    setLoggedIn(false)
    history.push("/")
  }


  return (
    <div className="NavBar">
      <Link to={'/'} className='logoLink'>
        <h1>Body on Break</h1>
      </Link>
      <Link to={'/'}>Home</Link>
      <Link to={'/goals'}>Goals</Link>
      <Link to={'/workouts'}>Workouts</Link>
      <Link to={'/stats'}>Stats</Link>
      <Link to={'/workouts'}>Workouts</Link>
      {
        loggedIn && (
          <Link to={'/profile'}>My Profile</Link>
        )
      }
      {
        !loggedIn ? (
            <button
              onClick={() => setLoggedIn(true)}
            >
              Login
            </button>
          )
          :
          (
            <button
              onClick={onLogout}
            >
              Logout
            </button>
          )
      }
    </div>
  );
};

export default NavBar;