import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SemesterHeader.module.css';

/**
 * Represents header for a semester section.
 * @param {*} props
 *  {string} value - value to display,
 *  {bool} isActive - determines if header should be highlited,
 *  {func} onShowHideSubjectsClickEventHandler - handles show/hide effect for subjects,
 *  {bool} showSubjects - state of the semester that determines if subjects are visible for tge user.
 */
const semesterHeader = (props) => {

  let headerContent = props.value;
  if (props.isActive) {
    headerContent = (
      <Fragment>
        {props.value}
        <FontAwesomeIcon icon='long-arrow-alt-left' className='mx-2'/>
        <span>Open For Enrolment</span>
      </Fragment>
    );
  }

  return (
    <div
      className={[styles.SemesterHeader, 'card-header', 'd-flex'].join(' ')}
      onClick={props.onShowHideSubjectsClickEventHandler}
    >
      <div className="mr-auto">
        {headerContent}
      </div>
      <div className="pl-2"><FontAwesomeIcon icon={(props.showSubjects) ? 'chevron-down' : 'chevron-up'} /></div>
    </div>
  );
};

semesterHeader.propTypes = {
  value: PropTypes.string,
  isActive: PropTypes.bool,
  onShowHideSubjectsClickEventHandler: PropTypes.func,
  showSubjects: PropTypes.bool,
};

export default semesterHeader;
