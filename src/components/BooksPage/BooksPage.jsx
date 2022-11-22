import React from "react";
import { Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react';
import "./BooksPage.css";

const BooksPage = () => (
  <>
  <div className="ui container music-page-content">
    <div className="home-button">
      <Link className="link" to="/">Return to <Icon name='home' size='small' /></Link>
    </div>
    <div>
    <Icon name='book' size='small' />Books Page Coming Soon...
    </div>
  </div>
  </>
)

export default BooksPage;