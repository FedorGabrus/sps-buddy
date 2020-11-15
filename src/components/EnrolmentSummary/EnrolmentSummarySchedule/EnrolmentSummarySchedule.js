import React from 'react';
import PropTypes from 'prop-types';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Renders selected subject in enrolment summary.
 *
 * @param {*} props
 *  {string} subjectCode - subject code,
 *  {string} subjectName - subject name,
 *  {func} removeSubject - removes subject from the selection.
 */



const enrolmentSummarySchedule = (props) => (

  <React.Fragment>
    <td>{props.subjectName}</td>
    <td>{props.scheduleTimes[0]}<input type="checkbox" /></td>
    <td>{props.scheduleTimes[1]}<input type="checkbox" /></td>
  </React.Fragment>

);



enrolmentSummarySchedule.propTypes = {
  //subjectCode: PropTypes.string,
  subjectName: PropTypes.string,
  //subjectPrice: PropTypes.number,
  //subjectSchedule: PropTypes.string,
  //tafeCode: PropTypes.string,
  //time: PropTypes.string,
  scheduleTimes: PropTypes.array,
};




export default enrolmentSummarySchedule;
