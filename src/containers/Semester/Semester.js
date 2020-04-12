import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';

import SemesterHeader from '../../components/SemesterHeader/SemesterHeader';

/**
 * Renders semester data.
 *
 * @param {*} props
 *  {string} header - value for a semester header.
 *  {bool} isActive - determines if current semester is an active one.
 */
const Semester = (props) => {
  const [showSubjects, setShowSubjects] = useState(true);

  const onShowHideSubjectsClickEventHandler = () => {
    setShowSubjects(oldState => !oldState);
  };

  return (
    <div className='card my-3 shadow'>
      <SemesterHeader
        value={props.header}
        isActive={props.isActive}
        onShowHideSubjectsClickEventHandler={onShowHideSubjectsClickEventHandler}
        showSubjects={showSubjects}
      />
      <AnimateHeight duration={500} height={(showSubjects) ? 'auto' : 0}>
        <ul className='list-group list-group-flush'>
          {props.children}
        </ul>
      </AnimateHeight>
    </div>
  );
};

Semester.propTypes = {
  header: PropTypes.string,
  isActive: PropTypes.bool,
};



export default Semester;
