import React from 'react';
import PropTypes from 'prop-types';
import AnimateHeight from 'react-animate-height';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * Renders additional subject's info.
 * 
 * @param {*} porps 
 *  {bool} showInfo - determines whether to show additional info.
 *  {string} tafeCode - subject's TAFE code,
 *  {string} nationalCode - subject's national code,
 *  {string} competencyType - subject's competency code,
 *  {string} trainingPackage - subject's training package,
 *  {number} credits - subject's credits.
 */
const subjectAdditionalDetails = (props) => (
  <AnimateHeight duration={500} height={(props.showInfo) ? 'auto' : 0}>
    <div className='row'>
      <div className='col-sm-6 col-md-5 col-lg-4 mb-1 mb-sm-2'>
        <FontAwesomeIcon icon='circle' size='sm' className='mr-2' />
        <span>TAFE Code: {props.tafeCode}</span>
      </div>
      <div className='col-sm-6 col-md-5 col-lg-4 mb-1 mb-sm-2'>
        <FontAwesomeIcon icon='circle' size='sm' className='mr-2' />
        <span>National Code: {props.nationalCode}</span>
      </div>
    </div>
    <div className='row'>
      <div className='col-sm-6 col-md-5 col-lg-4 mb-1 mb-sm-2'>
        <FontAwesomeIcon icon='circle' size='sm' className='mr-2' />
        <span>Training Package: {props.trainingPackage}</span>
      </div>
      <div className='col-sm-6 col-md-5 col-lg-4 mb-1 mb-sm-2'>
        <FontAwesomeIcon icon='circle' size='sm' className='mr-2' />
        <span>Competency Type: {props.competencyType}</span>
      </div>
    </div>
    <div className='row'>
      <div className='col-sm-6 col-md-5 col-lg-4 mb-1 mb-sm-2'>
        <FontAwesomeIcon icon='circle' size='sm' className='mr-2' />
        <span>Credits: {props.credits}</span>
      </div>
    </div>
  </AnimateHeight>
);

subjectAdditionalDetails.propTypes = {
  showInfo: PropTypes.bool,
  tafeCode: PropTypes.string,
  nationalCode: PropTypes.string,
  competencyType: PropTypes.string,
  trainingPackage: PropTypes.string,
  credits: PropTypes.number,
};

export default subjectAdditionalDetails;