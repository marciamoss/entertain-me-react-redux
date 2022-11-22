import React from "react";
import { Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react';
import "./VideosPage.css";

const VideosPage = () => (
  <>
  <div className="ui container music-page-content">
    <div className="home-button">
      <Link className="link" to="/">Return to <Icon name='home' size='small' /></Link>
    </div>
    <div>
    <Icon name='video' size='small' />Videos Page Coming Soon...
    </div>
  </div>
  </>
)

export default VideosPage;