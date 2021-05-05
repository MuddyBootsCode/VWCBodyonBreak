import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { useMutation, gql } from "@apollo/client";

const LOGIN_MUTATION = gql`
mutation Login($username: String!) {
  login(username: $username) {
    username
  }
}`


const NavBar = ({setLoggedIn, loggedIn}) => {
  const [login] = useMutation(LOGIN_MUTATION);

  let history = useHistory()
  const onLogout = () => {
    setLoggedIn(false)
    history.push("/")
  }

  const username = "mockUser";

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
          [
            <button className="navButton stayRight">Sign Up</button>,
            <button className="navButton"
              onClick={() => login({variables: { username } })}
            >
              Login
            </button>
          ]
          )
          :
          (
            <button className="navButton stayRight"
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