import jwt_decode from "jwt-decode";

import { AUTH_CHANGE, CLOSE_ERROR_MODAL, userDeclinedlogin } from './types';

export const authChange = () => async (dispatch, getState) => {
  if (getState().auth.userId) {
    if(!(getState().auth.showError)) {
      window.google.accounts.id.revoke(getState().auth.userId, () => {
        dispatch({ type: AUTH_CHANGE, payload: {userId: null, userName: null, showError: false} });
      });
    }
  }
  else {
    const handleGoogleSignIn = (response) => {
      const responsePayload = jwt_decode(response.credential);
      dispatch({ type: AUTH_CHANGE, payload: {userId: responsePayload.sub, userName: responsePayload.name, showError: false} });
    }
    await window.google.accounts.id.initialize({
      client_id: '526973545082-tq3so0e5fc1rilc26f7vb50on5f2cgp6.apps.googleusercontent.com',
      callback: handleGoogleSignIn,
      auto_select: false
    });
    await window.google.accounts.id.prompt(response => {
      const authFail = Object.values(response).filter(r => userDeclinedlogin.indexOf(r)>=0);
      if (authFail.length > 0) {
        dispatch({ type: AUTH_CHANGE, payload: {userId: authFail[0], userName: null, showError: true} });
      }
    });
  }
}

export const closeErrorModal = (close) => ({type: CLOSE_ERROR_MODAL, payload: { close }})
