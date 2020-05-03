import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import logo from '../../assets/images/tafe-logo.png';
import EnrolmentSummary from '../EnrolmentSummary/EnrolmentSummary';
import Subject from '../Subjects/Subjects';
import EnrolmentScreen from '../../containers/EnrolmentScreen/EnrolmentScreen';
import Cart from '../Cart/Cart';
import App from '../../containers/App/App';



const Header = (props) => {

  const [selectedSubjects, setSelectedSubjects] = useState([]);

  return (
    <header id="header-container">
      <div className="header-main">
        <div className="container">
          <div id="logo-container">
            <img src={logo} alt="Logo" />
          </div>
        </div>
      </div>
      <div id="top-banner-container">
        <div className="top-banner">
          <div className="container">
            <h1>Enrolment Buddy</h1>
            <div className="cartIconWrapper">
              <Cart setSelectedSubjects={setSelectedSubjects} selectedSubjects={selectedSubjects} />
            </div>
          </div>

        </div>
      </div>
    </header>
  )
};

export default Header;
