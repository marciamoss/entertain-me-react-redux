import React from 'react';
import { connect } from 'react-redux';

import { authChange } from '../../actions';
import './Header.css';
import ErrorModal from '../ErrorModal/ErrorModal';

const Header = ({userId, userName, authChange, showError, closeModal}) => 
  (
    <div className="ui top fixed inverted massive menu">
      {(showError && !closeModal) ?
        <ErrorModal/>
        :
        <>
          {!showError ?  
            <>
              {userName ? <p className="item user-name">{userName}</p> : ''}
              <button onClick={authChange} className={`ui item google button right ${userId ? "logout" : "login"}`}>
                  <i className="google icon" />
                  {userId ? "Sign out" : 'Sign In with Google'}
              </button>
            </> : <p className="item user-name">Sign in failed due to: {userId}, clear cache and refresh the page to retry</p>}
        </>
      }
    </div>
  );


const mapStateToProps = state => ({ userId: state.auth.userId, userName: state.auth.userName, showError: state.auth.showError, closeModal: state.errorModal.close})

export default connect(
  mapStateToProps,
  { authChange }
)(Header);