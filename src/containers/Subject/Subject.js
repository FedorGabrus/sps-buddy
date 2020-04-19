import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import PrerequisiteSubject from '../../components/Subjects/PrerequisiteSubject/PrerequisiteSubject';
import ToggleSwitch from '../../components/UI/ToggleSwitch/ToggleSwitch';
import SubjectAdditionalDetails from '../../components/SubjectAdditionalDetails/SubjectAdditionalDetails';
import styles from './Subject.module.css';

/**
 * Renders subject.
 *
 * @param {*} props
 *  {string} nationalCode - subject national code,
 *  {string} subjectName - subject name,
 *  {string} subjectCode - subject code,
 *  {string} competencyName - competency name,
 *  {string} competencyType - competency type,
 *  {string} tafeCode - TAFE code,
 *  {string} trainingPackage - training package,
 *  {number} credits - credits for the subject,
 *  {string} grade - grade for the course,
 *  {object} campus - campus where course was graded,
 *  {string} price - formated price,
 *  {array} prerequisites - prerequisites that block enrollment,
 *  {bool} selected - determines if subject selected,
 *  {func} subjectSelectionChangedHandler - handles selection,
 *  {string} semester - semester that subject belongs to.
 */
const Subject = (props) => {
  const [showInfo, setShowInfo] = useState(false);

  let grade = null;
  let campus = null;
  let price = null;
  let prerequisites = null;
  let switcher = null;
  let selectButton = null;
  let badge = null;
  // Case subject graded.
  if (props.grade) {

    if(props.grade == "Credit"){

      badge = (
        <h5><span className="badge badge-info">Graded - C</span></h5>
      );

    }

    else if(props.grade == "Distinction"){

      badge = (
        <h5><span className="badge badge-success">Graded - D</span></h5>
      );

    }

    else if(props.grade == "Fail"){

      badge = (
        <h5><span className="badge badge-danger">Graded - F</span></h5>
      );

    }

    else {

      badge = (
        <h5><span className="badge badge-primary">Graded</span></h5>
      );

    }

    grade = (
      <h3>{props.grade}</h3>
    );
    campus = (
      <Fragment>
        Campus: {props.campus.campusName}
      </Fragment>
    );
  } else {
    // Else subject available or has prerequisites.
    price = (
      <h3>{props.price}</h3>
    );

    // Subject with unmet prerequisites.
    if (props.prerequisites && props.prerequisites.length > 0) {
      const prerequisitesList = props.prerequisites.map(prerequisite => (
        <PrerequisiteSubject
          key={prerequisite.nationalCode}
          subjectCode={prerequisite.subjectCode}
          subjectName={prerequisite.subjectName}
        />
      ));

      badge = (
        <h5><span className="badge badge-warning">Has prerequisites</span></h5>
      );

      prerequisites = (
        <Fragment>
          <h5 className="unmet-title"><FontAwesomeIcon icon='exclamation-triangle' /> Unmet Prerequisites:</h5>
          <div className="d-flex justify-content-start flex-wrap">
            {prerequisitesList}
          </div>
        </Fragment>
      );
    } else {
      // Else subject is selectable.
      switcher = (
        <div className="col-sm-1 d-flex justify-content-center">
          <ToggleSwitch
            isChecked={props.selected}
            switchToggledHandler={props.subjectSelectionChangedHandler.bind(this, props.semester, props.nationalCode)}
          />
        </div>
      );

      selectButton = (
        <div className='col-sm-2 d-flex flex-column justify-content-center'>
          <button
            className="btn btn-primary btn-lg btn-block"
            onClick={props.subjectSelectionChangedHandler.bind(this, props.semester, props.nationalCode)}
          >
            {(props.selected) ? 'Remove' : 'Add'}
          </button>
        </div>
      );
    }
  }

  const showDetailsButtonClickHandler = () => {
    setShowInfo(oldState => !oldState);
  }

  const showHideDetailsButton = (
    <div>
      <button
        className='btn btn-link course-details-button'
        onClick={showDetailsButtonClickHandler}
      >
        {(showInfo)
          ? <Fragment>Hide details <FontAwesomeIcon icon='minus' /></Fragment>
          : <Fragment>Show details <FontAwesomeIcon icon='plus' /></Fragment>
        }
      </button>
    </div>
  );

  return (
    <div className='container'>
      {badge}
      <div className='row'>
        <div className='col'>
          <h3
            className={
              ['course-title', 'mr-2', (switcher) ? styles.Clickable : null, (props.selected) ? 'text-success' : null].join(' ')
            }
            onClick={(switcher)
              ? props.subjectSelectionChangedHandler.bind(this, props.semester, props.nationalCode)
              : null}
          >
            {props.subjectCode} - {props.subjectName}
          </h3>
        </div>
        <div className='col-sm-4 text-center text-sm-right text-nowrap'>
          {price}
          {grade}
        </div>
      </div>
      <div className='row'>
        {switcher}
        <div className='col'>
          <p className='lead'>{props.competencyName}</p>
          {campus}
          {showHideDetailsButton}
          <SubjectAdditionalDetails
            showInfo={showInfo}
            tafeCode={props.tafeCode}
            nationalCode={props.nationalCode}
            competencyType={props.competencyType}
            trainingPackage={props.trainingPackage}
            credits={props.credits}
          />
        </div>
        {selectButton}
      </div>
      {prerequisites}

    </div >
  );
};

Subject.propTypes = {
  nationalCode: PropTypes.string,
  subjectName: PropTypes.string,
  subjectCode: PropTypes.string,
  competencyName: PropTypes.string,
  competencyType: PropTypes.string,
  tafeCode: PropTypes.string,
  trainingPackage: PropTypes.string,
  credits: PropTypes.number,
  grade: PropTypes.string,
  campus: PropTypes.object,
  price: PropTypes.string,
  prerequisites: PropTypes.array,
  selected: PropTypes.bool,
  subjectSelectionChangedHandler: PropTypes.func,
  semester: PropTypes.string,
};

export default Subject;
