import React, { useState } from 'react';


import Layout from '../../components/Layout/Layout';
import LogIn from '../LogInScreen/LogInScreen';
import EnrolmentScreen from '../EnrolmentScreen/EnrolmentScreen';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faChevronRight, faChevronLeft, faEnvelope, faTimes, faBan,
  faExclamationTriangle, faChevronUp, faChevronDown, faMinus, faPlus, faCircle,
  faLongArrowAltLeft
} from '@fortawesome/free-solid-svg-icons';
library.add(
  faChevronRight, faChevronLeft, faEnvelope, faTimes, faBan,
   faExclamationTriangle, faChevronUp, faChevronDown, faMinus, faPlus, faCircle,
   faLongArrowAltLeft
   );


const App = (props) => {

  const [isLoggedIn, setLoggedIn] = useState("true");
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [studyPlan, setStudyPlan] = useState([]);

  /**
   * Handles subject selection. Changes data in study plan and selected courses.
   * Passed to EnrolmentScreen.js via props
   * @param {string} semester - semester name
   * @param {string} nationalCode - subject national code
   */
  const subjectSelectionChangedHandler = (semester, nationalCode) => {
    setStudyPlan(oldState => {
      // Needs to create a new study plan list to trigger rerenderring as
      // selection changes happen in subject object that passes by reference.
      const newState = [...oldState];
      const selectedSemester = newState.find(studyPlanSemester => studyPlanSemester.semester === semester);
      const selectedSemesterSubject = selectedSemester.subjects.find(subject => subject.nationalCode === nationalCode);
      selectedSemesterSubject.selected = !selectedSemesterSubject.selected;

      // Updates selected subjects.
      setSelectedSubjects(oldSelection => {
        const newSelection = [...oldSelection];
        if (selectedSemesterSubject.selected) {
          // Adds semester name to the selected subject.
          selectedSemesterSubject.parentSemester = semester;
          newSelection.push(selectedSemesterSubject);
        } else {
          return newSelection.filter(subject => subject.nationalCode !== nationalCode);
        }
        return newSelection;
      });

      return newState;
    });
  };



  let currentView = <LogIn logInStatus={setLoggedIn} />;

  if (isLoggedIn === "true") {
    currentView = <EnrolmentScreen subjectSelectionChangedHandler={subjectSelectionChangedHandler} setSelectedSubjects={setSelectedSubjects} selectedSubjects={selectedSubjects} studyPlan={studyPlan} setStudyPlan={setStudyPlan}/>

  }



  return (
    <Layout subjectSelectionChangedHandler={subjectSelectionChangedHandler} setSelectedSubjects={setSelectedSubjects} selectedSubjects={selectedSubjects} studyPlan={studyPlan} setStudyPlan={setStudyPlan}>
      {currentView}
    </Layout>
  );
}

export default App;
