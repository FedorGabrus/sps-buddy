import React from 'react';
import PropTypes from 'prop-types';

import EnrolmentSummary from '../EnrolmentSummary/EnrolmentSummary';
import EnrolmentSummarySchedule from '../EnrolmentSummary/EnrolmentSummarySchedule/EnrolmentSummarySchedule';

/*
 * Short enrolment summary. Appears when at least one subject selected.
 *
 * @param {*} props
 *  {array} selectedSubjects - array of selected subjects,
 *  {number} minNumberOfCourses - min number of courses for the selected type of student,
 *  {func} subjectSelectionChangedHandler - handler to remove subject from selection,
 *  {bool} showCourses - determines visibility.
 */

const priceFormater = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' });

const scheduleSelection = (props) => {

  // Displays component only with courses list.
  if (!props.showCourses) {
    return null;
  }

  let subjects = null;
  let confirmButton = null;


  // Displays selected course and confirm button only when at least one course is selected..
  if (props.selectedSubjects && props.selectedSubjects.length > 0) {
    subjects = props.selectedSubjects.map(subject => (
      <tr key={subject.nationalCode}>
        <EnrolmentSummarySchedule
          subjectCode={subject.subjectCode}
          subjectName={subject.subjectName}
          tafeCode ={subject.tafeCode}
          time={subject.time}
          scheduleTimes={subject.scheduleTimes}
          removeSubject={props.subjectSelectionChangedHandler
            .bind(this, subject.parentSemester, subject.nationalCode)}
        />
      </tr>


    ));





  }



  return (
    <section>
      <div className="card shadow my-3">
        <div className="card-body">
          <h2>Select Schedule</h2>
          <br />
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Subject Name</th>
                <th scope="col">Option 1</th>
                <th scope="col">Option 2</th>
              </tr>
            </thead>
            <tbody>
              {subjects}
            </tbody>
          </table>

          <button className='btn btn-success btn-lg btn-block'>Confirm</button>


        </div>
      </div>

    </section>

  );


}

scheduleSelection.propTypes = {
  selectedSubjects: PropTypes.array,
  showCourses: PropTypes.bool,
};


export default scheduleSelection;
