import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Icon, Button } from 'semantic-ui-react';

import "./NewsPage.css";
import { getNews, backToLanding } from '../../actions';
import LandingPage from "../LandingPage/LandingPage";

import NewsPageList from "./NewsPageList";

const NewsPage = ({getNews, loginError, backToLanding}) => {
  if (loginError) {
    return <LandingPage/>
  }

  return (
    <div className="ui container news-page-content">
      <div className="home-button-alignment">
        <Button onClick ={backToLanding} className="home-button" icon>
          <Link to="/"><Icon name='home' className="home-icon-alignment" color="brown" size='big'/></Link>
        </Button>
      </div>
      <div className="ui container">
        <h2>Pick a section for news</h2>
      {["Arts", "Automobiles", "Books", "Business", "Fashion", "Food", "Health", "Home", "Insider", "Magazine", "NY Region", "obituaries", "Opinion", "Politics", "Real Estate", "Science", "Sports", "Sunday Review", "Technology", "Theater", "T-Magazine", "Travel", "Upshot", "US", "World"].map(section => 
        <Button className="section" key={section} onClick={() => getNews(section)}><h4>{section}</h4></Button>)}
      </div> 
      <NewsPageList/>
    </div>
  )
}

const mapStateToProps = state => ({ newsList: state.getNews.newsList, loginError: state.auth.showError });

export default connect(
  mapStateToProps,
  { getNews, backToLanding }
)(NewsPage);