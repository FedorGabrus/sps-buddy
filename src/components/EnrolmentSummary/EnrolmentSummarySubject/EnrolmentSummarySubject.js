import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";

/**
 * Renders selected subject in enrolment summary.
 *
 * @param {*} props
 *  {string} subjectCode - subject code,
 *  {string} subjectName - subject name,
 *  {func} removeSubject - removes subject from the selection.
 */

const priceFormater = new Intl.NumberFormat('en-AU', { style: 'currency', currency: 'AUD' });

const enrolmentSummarySubject = (props) => (

  <div>
    {props.subjectCode} - {props.subjectName} - <span className="subjectPrice">{priceFormater.format(props.subjectPrice)}</span>
    <button
      className='btn btn-link btn-sm text-danger'
      type="button"
      onClick={props.removeSubject}
    >
      <FontAwesomeIcon icon="times" /> Remove

    </button>
  </div>

);



enrolmentSummarySubject.propTypes = {
  subjectCode: PropTypes.string,
  subjectName: PropTypes.string,
  subjectPrice: PropTypes.number,
  subjectSchedule: PropTypes.string
};




export default enrolmentSummarySubject;
