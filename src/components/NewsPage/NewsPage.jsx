import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Icon, Button } from 'semantic-ui-react';
import MovingComponent from 'react-moving-text';

import "./NewsPage.css";
import { getNews, backToLanding, newsLanding } from '../../actions';
import LandingPage from "../LandingPage/LandingPage";

import NewsPageList from "./NewsPageList";

const NewsPage = ({getNews, loginError, backToLanding, newsList, newsLanding}) => {
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
      { newsList.length > 0 ?
        <>
          <Button onClick ={newsLanding} className="news-button" icon>
            <MovingComponent
              type="effect3D"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              fillMode="none">
              Search More News
            </MovingComponent>
          </Button>
          <NewsPageList/>
        </>
      :
        <>
          <h2>Pick a section for news</h2>
          {["Arts", "Automobiles", "Books", "Business", "Fashion", "Food", "Health", "Home", "Insider", "Magazine", "NY Region", "obituaries", "Opinion", "Politics", "Real Estate", "Science", "Sports", "Sunday Review", "Technology", "Theater", "T-Magazine", "Travel", "Upshot", "US", "World"].map(section =>
            <Button className="section" key={section} onClick={() => getNews(section)}><h4>{section}</h4></Button>)}
        </>
      }
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ newsList: state.getNews.newsList, loginError: state.auth.showError });

export default connect(
  mapStateToProps,
  { getNews, backToLanding, newsLanding }
)(NewsPage);