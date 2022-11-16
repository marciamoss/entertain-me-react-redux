import React from 'react';
import { connect } from 'react-redux';
import { authChange } from '../../actions';
import './Header.css';

const Header = ({userId, userName, authChange}) => {
  const handleAuthClick = () => authChange();
  return (
    <div className="ui top fixed inverted massive menu">
      {userName ? <p className="item user-name">{userName}</p> : ''}
      <button onClick={handleAuthClick} className={`ui item google button right ${userId ? "logout" : "login"}`}>
          <i className="google icon" />
          {userId ? "Sign out" : 'Sign In with Google'}  
      </button>
    </div>
  );  
}

const mapStateToProps = state => {
  return { 
    userId: state.auth.userId,
    userName: state.auth.userName
  };
};

export default connect(
  mapStateToProps,
  { authChange }
)(Header);