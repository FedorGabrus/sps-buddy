import React, { Fragment } from 'react';
import useState from 'react';
import Sticky from '../UI/Sticky/Sticky.js';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import EnrolmentSummary from '../EnrolmentSummary/EnrolmentSummary';
{/*import Subjects from '../../components/Subjects/Subjects';
import EnrolmentSettings from '../../components/EnrolmentSettings/EnrolmentSettings';
import ErrorView from '../../components/ErrorView/ErrorView';
import EnrolmentSummary from '../EnrolmentSummary/EnrolmentSummary';

import EnrolmentScreen from '../../containers/EnrolmentScreen/EnrolmentScreen';

// Rough representation of the server response.
import studentData from '../../models/dummyData/mockStudentData/mockStudentData'; */}


const Layout = (props) => {

  {/*const [selectedSubjects, setSelectedSubjects] = useState([]);*/}

  return (
    <Fragment>
       <Sticky className="stickyContent">
        <Header />
        <EnrolmentSummary
          selectedSubjects={props.selectedSubjects}

        />
        <p className='card-text'>
          You have selected {props.selectedSubjects.length} courses.
        </p>

       </Sticky>

      <main className="container mainContainer">{props.children}</main>


        <Footer />

    </Fragment>
  );
};

export default Layout;
