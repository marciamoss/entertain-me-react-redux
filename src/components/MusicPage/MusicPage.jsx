import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Icon, List, Segment } from 'semantic-ui-react';

import { setSong, getSongs } from '../../actions';
import "./MusicPage.css";

const MusicPage = ({setSong, song, getSongs, songsList}) => {
  useEffect(() => {
    const timerId = setTimeout(() => {
        getSongs(song);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [song, getSongs]);

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
      <>
        {(songsList?.length > 0) ?
          <Segment className="song-list">
            <List divided relaxed size='large'>
              {songsList?.map((s) => (
                <List.Item key={s.id}>
                  <List.Content>
                  {s.id === "NO SONGS FOUND999999" ? <List.Header>{s.name}</List.Header> :
                    <>
                      <List.Header>Name: {s.name}</List.Header>
                      Artist: {s.artist}, Album: {s.album},<a href={s.preview_url} target="blank"> Click for a preview</a>
                    </>
                  }
                  </List.Content>
                </List.Item>
              ))}
            </List>
          </Segment>
        : ''}
      </>
    </div>
  )
}

const mapStateToProps = state => ({ song: state.getSong.song, songsList: state.getSong.songsList });

export default connect(
  mapStateToProps,
  { setSong, getSongs }
)(MusicPage);
