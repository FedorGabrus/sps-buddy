import React, { useState } from 'react';

import Layout from '../../components/Layout/Layout';
import LogIn from '../LogInScreen/LogInScreen';
import EnrolmentScreen from '../EnrolmentScreen/EnrolmentScreen';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronRight, faChevronLeft, faEnvelope, faTimes, faBan, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
library.add(faChevronRight, faChevronLeft, faEnvelope, faTimes, faBan, faExclamationTriangle)

//library.add(faChevronRight, faChevronLeft, faEnvelope)


const App = (props) => {

  const [isLoggedIn, setLoggedIn] = useState("true");

  let currentView = <LogIn logInStatus={setLoggedIn}/>;

      if (isLoggedIn === "true") {

            currentView = <EnrolmentScreen />

          }



  return (
    <Layout>
      {currentView}
    </Layout>
  );
}

export default App;
