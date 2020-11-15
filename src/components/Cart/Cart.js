import React, { Fragment, useState, useEffect } from 'react';
//import ReactDOM from 'react-dom';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
//import EnrolmentScreen from '../../containers/EnrolmentScreen/EnrolmentScreen';
import EnrolmentSummary from '../EnrolmentSummary/EnrolmentSummary';
//import Subject from '../Subjects/Subjects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Cart = (props) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
     <FontAwesomeIcon icon="shopping-cart" className="shoppingCartIcon" onClick={handleShow}/>

     <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton>
         <Modal.Title>Your Cart</Modal.Title>
       </Modal.Header>
       <Modal.Body>
      <EnrolmentSummary selectedSubjects={props.selectedSubjects} />
        <p className='card-text'>
          You have selected {props.selectedSubjects.length} courses.
        </p>
        <p className='card-text'>
          Cost: {props.selectedSubjects.reduce((total, current) => total + current.price,0)}
        </p>
       </Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" className="close-button" onClick={handleClose}>
           Close
         </Button>
       </Modal.Footer>
     </Modal>
   </>
  );
}

export default Cart;
