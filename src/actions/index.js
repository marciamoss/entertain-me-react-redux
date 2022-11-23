import jwt_decode from "jwt-decode";

import { AUTH_CHANGE, CLOSE_ERROR_MODAL, FETCH_SONGS, SET_SONG } from './types';

require("dotenv").config();
let Spotify = require('node-spotify-api');

let keys = require("../keys.js");
let spotify = new Spotify(keys.spotify);

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
      if (response.isNotDisplayed() || response.isSkippedMoment() || response.isDismissedMoment()) {
        if(response.isNotDisplayed()) {
          dispatch({ type: AUTH_CHANGE, payload: {userId: response.getNotDisplayedReason(), userName: null, showError: true} });
        } else if(response.isSkippedMoment()){
          dispatch({ type: AUTH_CHANGE, payload: {userId: response.getSkippedReason(), userName: null, showError: true} });
        }
      }
    });
  }
}

export const closeErrorModal = (close) => ({type: CLOSE_ERROR_MODAL, payload: { close }});

export const setSong = (song) => ({ type: SET_SONG, payload: {song: song, songsList: []} });

export const getSongs = (song) => async (dispatch) => {
  if(song) {
    let songName = (song).split(' ').join("+");
    let songsList = [];
    try {
      const response = await spotify.search({ type: 'track', query: songName });
      if(response.tracks.items.length === 0 ) {
        songsList.push({
          id: 'NO SONGS FOUND999999',
          name: 'NO SONGS FOUND'
        });
      } else {
        response.tracks.items.forEach(element => {
          let preview_url;
          if(element.preview_url === null) {
            preview_url = element.external_urls.spotify;
          } else {
            preview_url = element.preview_url;
          }
          songsList.push({
            id: element.id,
            artist: element.album.artists[0].name,
            name: element.name,
            album: element.album.name,
            preview_url
          });
        });
      }
    } catch (error) {
      songsList = [];
    }
    dispatch({ type: FETCH_SONGS, payload: {song, songsList} });
  }
}
