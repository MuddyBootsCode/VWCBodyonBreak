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
      <Link className="navLink" to={'/'}>Home</Link>
      <Link className="navLink" to={'/goals'}>Goals</Link>
      <Link className="navLink" to={'/workouts'}>Workouts</Link>
      <Link className="navLink" to={'/stats'}>Stats</Link>
      <Link className="navLink" to={'/workouts'}>Workouts</Link>
      {
        loggedIn && (
          <Link className="navLink" to={'/profile'}>My Profile</Link>
        )
      }
      {
        !loggedIn ? (
            <button className="navButton"
              onClick={() => setLoggedIn(true)}
            >
              Login
            </button>
          )
          :
          (
            <button className="navButton"
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