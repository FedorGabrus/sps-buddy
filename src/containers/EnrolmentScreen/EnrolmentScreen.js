import React, { Fragment, useState, useEffect } from 'react';

import Subjects from '../../components/Subjects/Subjects';
import EnrolmentSettings from '../../components/EnrolmentSettings/EnrolmentSettings';
import ErrorView from '../../components/ErrorView/ErrorView';
import EnrolmentSummary from '../../components/EnrolmentSummary/EnrolmentSummary';
import ScheduleSelection from '../../components/ScheduleSelection/ScheduleSelection';

// Rough representation of the server response.
import studentData from '../../models/dummyData/mockStudentData/mockStudentData';

/**
 * Enrolment activity view. Queries back-end to retireve student's subjects,
 * handles enrollment propcess. Shows all courses including completed
 * according to the student's study plan.
 */
const EnrolmentView = (props) => {
  const [student, setStudent] = useState({
    id: studentData.studentId,
    firstName: studentData.firstName,
    lastName: studentData.lastName,
    studentEmail: studentData.studentEmail
  });
  const [availableQualifications, setAvailableQualifications] = useState([]);
  const [qualificationToEnroll, setQualificationToEnroll] = useState(null);
  const [selectedCampus, setSelectedCampus] = useState(null);
  const [studentTypes] = useState([
    {
      typeID: 'FT',
      typeName: 'Full-time',
      minNumberOfCourses: 5,
    },
    {
      typeID: 'PT',
      typeName: 'Part-time',
      minNumberOfCourses: 2,
    }
  ]);

  const [error, setError] = useState(null)
  const [showCourses, setShowCourses] = useState(false);
  const [enrollingSemester] = useState('2020 S1');
  //const [selectedSubjects, setSelectedSubjects] = useState([]);
  //const [studyPlan, setStudyPlan] = useState([]);
  // Displays error if any.
  const errorSection = (error)
    ? (
      <ErrorView errorMessage={error} />
    )
    : null;

  // This section mocks setting of states after receiving server response.
  useEffect(() => {
    // Lets student to choose qualification.
    if (studentData.qualifications && studentData.qualifications.length > 0) {
      // Retrieves qualification data and prevents original source from mutations.
      const studentQualifications = studentData.qualifications.map(qualification => {
        return {
          qualificationName: qualification.qualificationName,
          qualificationTafeCode: qualification.qualificationTafeCode,
          qualificationNationalCode: qualification.qualificationNationalCode,
          availableCampuses: qualification.availableCampuses,
        };
      });

      setAvailableQualifications(studentQualifications);

      // If student has only one qualification, sets it as selected.
      if (studentQualifications.length === 1) {
        setQualificationToEnroll(studentQualifications[0]);
      }
    } else {
      setError('No qualification to proceed with enrolment');
    }
  }, []);

  /**
   * Sets study plan to show. May query DB here.
   */
  const getStudyPlanForSelectedQualification = () => {
    const selectedStudyPlan = studentData.qualifications.find(qualification =>
      qualification.qualificationNationalCode === qualificationToEnroll.qualificationNationalCode)
      .studyPlan;

    if (selectedStudyPlan) {
      const newStudyPlan = [...selectedStudyPlan];
      props.setStudyPlan(newStudyPlan);
      let preselectedSubjects = [];
      newStudyPlan.forEach(semester => {
        const semesterPreselectedSubjects = semester.subjects.filter(subject => {
          // Adds semester data to a preselected subject in order to retrieve from selectedSubjects.
          if (subject.selected) {
            subject.parentSemester = semester.semester;
            return true;
          } else {
            return false;
          }
        });
        if (semesterPreselectedSubjects && semesterPreselectedSubjects.length > 0) {
          preselectedSubjects = preselectedSubjects.concat(semesterPreselectedSubjects);
        }
      });
      props.setSelectedSubjects(preselectedSubjects);
    } else {
      props.setSelectedSubjects([]);
      props.setStudyPlan([]);
      setError('No subhects to enrol');
    }
  }





  return (
    <Fragment>
      {errorSection}
      <h2>Enrolment</h2>
      <EnrolmentSettings
        student={student}
        availableQualifications={availableQualifications}
        setQualificationToEnroll={setQualificationToEnroll}
        qualificationToEnroll={qualificationToEnroll}
        selectedCampus={selectedCampus}
        setSelectedCampus={setSelectedCampus}
        studentTypes={studentTypes}
        setStudent={setStudent}
        getStudyPlanForSelectedQualification={getStudyPlanForSelectedQualification}
        showCourses={showCourses}
        setShowCourses={setShowCourses}
        setSelectedSubjects={props.setSelectedSubjects}
        setStudyPlan={props.setStudyPlan}
      />
      <Subjects
        showCourses={showCourses}
        studyPlan={props.studyPlan}
        enrollingSemester={enrollingSemester}
        subjectSelectionChangedHandler={props.subjectSelectionChangedHandler}
      />
      <EnrolmentSummary
        showCourses={showCourses}
        selectedSubjects={props.selectedSubjects}
        minNumberOfCourses={(student.studentType) ? student.studentType.minNumberOfCourses : -1}
        subjectSelectionChangedHandler={props.subjectSelectionChangedHandler}
      />

      <ScheduleSelection
        showCourses={showCourses}
        selectedSubjects={props.selectedSubjects}
        subjectSelectionChangedHandler={props.subjectSelectionChangedHandler}


      />

    </Fragment>
  );
};

export default EnrolmentView;
