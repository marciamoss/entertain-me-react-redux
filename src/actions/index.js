import { AUTH_CHANGE } from './types';

export const authChange = () => async dispatch => {   
  window.gapi.load('client:auth2', () => {
    window.gapi.client
    .init({
      clientId:
        '526973545082-tq3so0e5fc1rilc26f7vb50on5f2cgp6.apps.googleusercontent.com',
      scope: 'email',
      plugin_name:'entertain-me-react-redux'
    })
    .then(async () => {
      const auth = window.gapi.auth2.getAuthInstance();
      if(!auth.isSignedIn.get()) {
        await auth.signIn();
        dispatch({ type: AUTH_CHANGE, payload: {userId: auth.currentUser.get().getId(), userName: auth.currentUser.get().getBasicProfile().getName()} });
      } else {
        await auth.signOut();
        dispatch({ type: AUTH_CHANGE, payload: {userId: null, userName: null} });
      }
    }).catch(e => console.log("google sigin incomplete", e));
  });
}

