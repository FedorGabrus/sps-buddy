import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LandingPage = ({ component }) => {

  const [viewClassName, setViewClassName] = useState(false);

  //state of views
  var currentView;
  var prevView;

  //headings change based on view
  var firstHeader;
  var secondHeader;
  var thirdHeader;

  if(viewClassName === false){

    currentView = "Lecturer";
    prevView = "Student";
    firstHeader = "Look Up Student";
    secondHeader = "Look Up Subject";
    thirdHeader = "My Classes";

  }

  else{

    currentView = "Student";
    prevView = "Lecturer";
    firstHeader = "Current Training Plan";
    secondHeader = "Enrolment Session";
    thirdHeader = "My Schedule";

  }

  return (

    <div id="landing-page-container">
      <div className="landing-main">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <button onClick={() => setViewClassName(!viewClassName)} type="button" className="btn"><FontAwesomeIcon icon="chevron-left" /> View as {prevView}</button>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h2>Welcome {currentView}!</h2>
              <p>Please choose from the options below:</p>
            </div>
          </div>

          <div className={`row ${viewClassName ? "studentView" : "lecturerView"}`} id='landingNavRow'>

            <div className="col-md-4 first">
              <div className="wrapper">
                <div class="overlay">
                  <h2>{firstHeader}</h2>
                </div>
              </div>
            </div>

            <div className="col-md-4 second">
              <div className="wrapper">
                <div class="overlay">
                  <h2>{secondHeader}</h2>
                </div>
              </div>
            </div>

            <div className="col-md-4 third">
              <div className="wrapper">
                <div class="overlay">
                  <h2>{thirdHeader}</h2>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
};

export default LandingPage;
