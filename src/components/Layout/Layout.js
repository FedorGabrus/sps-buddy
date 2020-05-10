import React, {useState, Fragment } from 'react';
import Sticky from '../UI/Sticky/Sticky.js';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import EnrolmentSummary from '../EnrolmentSummary/EnrolmentSummary';
import Subject from '../Subjects/Subjects';
import Cart from '../Cart/Cart';
import LandingPage from '../LandingPage/LandingPage';

const Layout = (props) => {

  return (
    <Fragment>
       <Sticky className="stickyContent">

          <Header />

            {/*
            <p className='card-text'>
              You have selected {props.selectedSubjects.length} courses.
            </p>
            <p className='card-text'>
              Cost: {props.selectedSubjects.reduce((total, current) => total + current.price,0)}
            </p>
            */}

      </Sticky>

      <LandingPage />

      <main className="container mainContainer">

        {props.children}

      </main>



      <Footer />

    </Fragment>
  );
};

export default Layout;
