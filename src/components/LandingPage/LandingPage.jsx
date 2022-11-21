import React from "react";
import { connect } from "react-redux";
import "./LandingPage.css";

const LandingPage = ({userId, showError}) => 
  (
    <div className="ui form container">
      {!showError ? 
      <h2 className="field-label">Main Page</h2>
      : <>
          <h2 className="field-label">SIGN IN FAILED DUE TO: {userId}. <br/>CLEAR CACHE AND REFRESH THE PAGE TO RETRY</h2>
          <>
          {userId === "opt_out_or_no_session" ?
            <h3 className="field-label">Your email has opted out for sigining for apps, to be able to signin on this app, login to gmail on this browser and then re-load the app</h3>
            : ''}
          </>
        </>}   
    </div>
  );


const mapStateToProps = state => ({ userId: state.auth.userId, showError: state.auth.showError })

export default connect(
  mapStateToProps
)(LandingPage);