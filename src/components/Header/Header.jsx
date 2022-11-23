import React from 'react';
import { useLocation } from "react-router-dom";
import { connect } from 'react-redux';

import { authChange } from '../../actions';
import './Header.css';
import ErrorModal from '../ErrorModal/ErrorModal';
import PageNotFound from '../PageNotFound/PageNotFound';

const Header = ({userId, userName, authChange, showError, closeModal}) => {
  const location = useLocation();
  const showHeader = (["/", "/music", "/movies", "/books", "/videos"].filter(r => r===location.pathname)).length>0;
  if (!showHeader) {
    return <PageNotFound/>;
  }
  return (
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
            </> : ''}
        </>
      }
    </div>
  );
}

const mapStateToProps = state => ({ userId: state.auth.userId, userName: state.auth.userName, showError: state.auth.showError, closeModal: state.errorModal.close})

export default connect(
  mapStateToProps,
  { authChange }
)(Header);