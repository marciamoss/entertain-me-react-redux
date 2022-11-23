import React from "react";
import { connect } from 'react-redux';
import "./RenderedList.css";
import { List, Segment } from 'semantic-ui-react';

import ErrorModal from '../ErrorModal/ErrorModal';

const RenderedList = ({songsList, closeModal}) => (
  <>
    {(songsList?.length > 0) ?
    <>
      {(songsList[0].id === "API ERROREDd999999" && !closeModal) ? <ErrorModal/> : 
        <Segment className="song-list">
          <List divided relaxed size='large'>
            {songsList?.map((s) => (
              <List.Item key={s.id}>
                <List.Content>
                {s.id === "NO SONGS FOUND999999" || s.id === "API ERROREDd999999" ? 
                  <List.Header className="no-data">{s.name}</List.Header> 
                  : <>
                      <List.Header>Name: {s.name}</List.Header>
                      Artist: {s.artist}, Album: {s.album},<a href={s.preview_url} target="blank"> Click for a preview</a>
                    </>
                }
                </List.Content>
              </List.Item>
            ))}
          </List>
        </Segment>
      }
    </>
    : ''}
  </>
);

const mapStateToProps = state => ({ songsList: state.getSong.songsList, closeModal: state.errorModal.close });

export default connect(
  mapStateToProps
)(RenderedList);
  