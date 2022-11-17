import React from 'react';
import { connect } from 'react-redux';

import { authChange } from '../../actions';
import { userDeclinedlogin } from '../../actions/types';
import './Header.css';

const Header = ({userId, userName, authChange}) =>
  <div className="ui top fixed inverted massive menu">
    {userDeclinedlogin.indexOf(userId)>=0 ?
      <p className="item user-name">{userId}</p>
      :
      <>
        {userName ? <p className="item user-name">{userName}</p> : ''}
        <button onClick={authChange} className={`ui item google button right ${userId ? "logout" : "login"}`}>
            <i className="google icon" />
            {userId ? "Sign out" : 'Sign In with Google'}
        </button>
      </>
    }
  </div>

const mapStateToProps = state => ({ userId: state.auth.userId, userName: state.auth.userName})

export default connect(
  mapStateToProps,
  { authChange }
)(Header);