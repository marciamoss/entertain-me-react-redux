import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react';

import { setSong, getSongs } from '../../actions';
import "./MusicPage.css";
import RenderedList from "../RenderedList/RenderedList";
import LandingPage from "../LandingPage/LandingPage";

const MusicPage = ({setSong, song, getSongs, loginError}) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
        getSongs(song);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [song, getSongs]);

  if (loginError) {
    return <LandingPage/>
  }

  return (
    <div className="ui container music-page-content">
      <div className="home-button">
        <Link to="/"><Icon name='home' size='small' /></Link>
      </div>
      <div className="ui form container">
        <div className="field">
            <h2 className="field-label">Song</h2>
            <input
            value={song}
            placeholder="Song Title (Required)"
            onChange={(e) => setSong(e.target.value)}
            className="input"
            />
        </div>
      </div>
      <RenderedList/>
    </div>
  )
}

const mapStateToProps = state => ({ song: state.getSong.song, loginError: state.auth.showError });

export default connect(
  mapStateToProps,
  { setSong, getSongs }
)(MusicPage);
