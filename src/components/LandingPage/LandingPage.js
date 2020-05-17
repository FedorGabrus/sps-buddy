import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LandingPage = ({ component }) => {

  const [viewClassName, setViewClassName] = useState(false);

  //state of views
  var currentView;
  var prevView;

  //headings & icons change based on view
  var firstHeader;
  var firstIcon;
  var secondHeader;
  var secondIcon;
  var thirdHeader;
  var thirdIcon;

  if(viewClassName === false){

    currentView = "Lecturer";
    prevView = "Student";
    firstHeader = "Look Up Student";
    firstIcon = "users";
    secondHeader = "Look Up Subject";
    secondIcon = "book-open";
    thirdHeader = "My Classes";
    thirdIcon = "chalkboard-teacher";

  }

  else{

    currentView = "Student";
    prevView = "Lecturer";
    firstHeader = "Current Training Plan";
    firstIcon = "project-diagram";
    secondHeader = "Enrolment Session";
    secondIcon = "user-plus";
    thirdHeader = "My Schedule";
    thirdIcon = "calendar-check";

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
                  <div>
                    <h2>{firstHeader}</h2>
                    <p><FontAwesomeIcon icon={firstIcon} /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 second">
              <div className="wrapper">
                <div class="overlay">
                  <div>
                    <h2>{secondHeader}</h2>
                    <p><FontAwesomeIcon icon={secondIcon} /></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 third">
              <div className="wrapper">
                <div class="overlay">
                  <div>
                    <h2>{thirdHeader}</h2>
                    <p><FontAwesomeIcon icon={thirdIcon} /></p>
                  </div>
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
