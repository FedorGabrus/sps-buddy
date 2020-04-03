import React from 'react';
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
const semesterHeader = (props) => (
  <div
    className={[styles.SemesterHeader, 'card-header', 'd-flex', (props.isActive) ? 'bg-primary text-white' : null].join(' ')}
    onClick={props.onShowHideSubjectsClickEventHandler}
    >
    <div className="mr-auto">{props.value}</div>
    <div className="pl-2"><FontAwesomeIcon icon={(props.showSubjects) ? 'chevron-down' : 'chevron-up'}/></div>
  </div>
);

semesterHeader.propTypes = {
  value: PropTypes.string,
  isActive: PropTypes.bool,
  onShowHideSubjectsClickEventHandler: PropTypes.func,
  showSubjects: PropTypes.bool,
};

export default semesterHeader;
