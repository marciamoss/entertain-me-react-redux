import React, { useState } from "react";
import { connect } from 'react-redux';
import { Accordion, Icon } from 'semantic-ui-react';

import './MusicPageList.css';

import ErrorModal from '../ErrorModal/ErrorModal';

const MusicPageList = ({listItems, closeModal}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const x = -1;

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? x : index
    setActiveIndex(newIndex);
  }

  const displayList = (listItems.length > 0) ? listItems.map((l, index1) => (
    <div key={l.id}>
      {l.id === "NO SONGS FOUND999999" || l.id === "API ERROREDd999999" ? 
        <p className="no-data">{l.name}</p> : 
        <>
          <Accordion.Title
            active={activeIndex === index1}
            index={index1}
            onClick={handleClick}
          >
            <Icon name='dropdown' />
            {l.name}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === index1}>
            <p>Artist: {l.artist}, Album: {l.album},<a href={l.preview_url} target="blank"> Click for a preview</a></p>
          </Accordion.Content>
        </>
      }
    </div>
  )) : '';

  return (   
    <>
      {(listItems?.length > 0) ?
        <Accordion fluid styled className="display-list">
            <div>{(listItems[0].id === "API ERROREDd999999" && !closeModal) ? <ErrorModal/> : <>{displayList}</>}</div>
        </Accordion>
      : ''}
    </>
  )
}

const mapStateToProps = state => {
  let listItems = [];
  listItems = state.getSong.songsList;
  return ({ listItems, closeModal: state.errorModal.close });
}
  
export default connect(
  mapStateToProps
)(MusicPageList);