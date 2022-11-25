import React from "react";
import { useLocation } from "react-router-dom";
import { connect } from 'react-redux';
import "./RenderedList.css";
import { List, Segment } from 'semantic-ui-react';

import ErrorModal from '../ErrorModal/ErrorModal';

const RenderedList = ({listItems, closeModal}) => {
  const location = useLocation();

  const displayList = (listItems?.length > 0) ? listItems?.map((l) => {
    if(location.pathname === "/music") {
      return (
        <List.Item key={l.id}>
          <List.Content>
          {l.id === "NO SONGS FOUND999999" || l.id === "API ERROREDd999999" ?
            <List.Header className="no-data">{l.name}</List.Header>
            : <>
                <List.Header>Name: {l.name}</List.Header>
                Artist: {l.artist}, Album: {l.album},<a href={l.preview_url} target="blank"> Click for a preview</a>
              </>
          }
          </List.Content>
        </List.Item>
      )
    } else if(location.pathname === "/news") {
      return (
        <List.Item key={l.uri}>
          <List.Content>
          {l?.id === "NO NEWS FOUND999999" || l?.id === "API ERROREDd999999" ?
            <List.Header className="no-data">{l.name}</List.Header>
            : <>
                <List.Header>Title: {l.title}, {l.byline}</List.Header>
                {l.abstract}<a href={l.short_url} target="blank"><br/>Click here to read the full article</a>
              </>
          }
          </List.Content>
        </List.Item>
      )
    }
  }) : '';

  return (
    <>
      {(listItems?.length > 0) ?
      <>
        {(listItems[0].id === "API ERROREDd999999" && !closeModal) ? <ErrorModal/> :
          <Segment className="display-list">
            <List divided relaxed size='large'>
              {displayList}
            </List>
          </Segment>
        }
      </>
      : ''}
    </>
  );
}

const mapStateToProps = state => {
  let listItems = [];
  if (location.pathname === "/news") {
    listItems = state?.getNews?.newsList;
  } else if (location.pathname === "/music") {
    listItems = state.getSong.songsList;
  }
  return ({ listItems, closeModal: state.errorModal.close });
}

export default connect(
  mapStateToProps
)(RenderedList);
  