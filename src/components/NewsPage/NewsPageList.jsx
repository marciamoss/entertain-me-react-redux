import React, { useState } from "react";
import { connect } from 'react-redux';
import { Accordion, Icon } from 'semantic-ui-react';

import './NewsPageList.css';

import ErrorModal from '../ErrorModal/ErrorModal';

const NewsPageList = ({listItems, section, closeModal}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const x = -1;

  const handleClick = (e, titleProps) => {
    const { index } = titleProps
    const newIndex = activeIndex === index ? x : index
    setActiveIndex(newIndex);
  }

  const displayList = (listItems.length > 0) ? listItems.map((l, index1) => (
    <div key={l.uri}>
      <Accordion.Title
        active={activeIndex === index1}
        index={index1}
        onClick={handleClick}
      >
        <Icon name='dropdown' />
        {l.title}, {l.byline}
      </Accordion.Title>
      <Accordion.Content active={activeIndex === index1}>
        <p>
          {l.abstract}<a href={l.short_url} target="blank"><br/>Click here to read the full article</a>
        </p>
      </Accordion.Content>
    </div>
  )) : '';

  return (   
    <>
      {(listItems?.length > 0) ?
      <>
        <h2>News Category: {section}</h2>
        <Accordion fluid styled className="display-list">
          <div>{(listItems[0].id === "API ERROREDd999999" && !closeModal) ? <ErrorModal/> : <>{displayList}</>}</div>
        </Accordion>
      </>
      : ''}
    </>
  )
}

const mapStateToProps = state => {
  let listItems = [];
  listItems = state.getNews.newsList;
  return ({ listItems, section: state.getNews.section, closeModal: state.errorModal.close });
}
  
export default connect(
  mapStateToProps
)(NewsPageList);