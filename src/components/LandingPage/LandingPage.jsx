import React from "react";
import { Link } from "react-router-dom";
import MovingComponent from 'react-moving-text';
import { connect } from "react-redux";
import "./LandingPage.css";

const LandingPage = ({userId, showError}) => (
  <div className="ui container landing-page-content">
    {userId ?
      <>
        {!showError ?
          <>
            <MovingComponent
              type="effect3D"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              fillMode="none">
              What's on your mind?
            </MovingComponent>
            <>
              {[{label: "Music", link: "/music", delay: "500ms"}, {label: "News", link: "/news", delay: "1000ms"}, {label: "Movies", link: "/movies", delay: "1500ms"},
                {label: "Books", link: "/books", delay: "2000ms"}, {label: "Videos", link: "/videos", delay: "2500ms"}].map(e =>
                <div key={e.label} className="landing-page-items">
                  <MovingComponent
                    type="slideInFromLeft"
                    duration="1000ms"
                    delay={e.delay}
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="backwards">
                    <Link className="link" to={e.link}>{e.label}</Link>
                  </MovingComponent>
                </div>
              )}
            </>
          </>
          : <>
            <h2 className="field-label">SIGN IN FAILED DUE TO: {userId}. <br/>CLEAR CACHE AND REFRESH THE PAGE TO RETRY</h2>
          <>
            {userId === "opt_out_or_no_session" ?
              <h3 className="field-label">Your email has opted out for sigining for apps, to be able to signin on this app, login to gmail on this browser and then re-load the app</h3>
            : ''}
          </>
        </>}
      </>
    :
    <MovingComponent
      type="effect3D"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      fillMode="none">
      Sign-In by clicking above to see the contents
    </MovingComponent>}
  </div>
);

const mapStateToProps = state => ({ userId: state.auth.userId, showError: state.auth.showError })

export default connect(
  mapStateToProps
)(LandingPage);