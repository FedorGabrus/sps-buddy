import React from 'react';
import PropTypes from 'prop-types';
import EnrolmentSummarySubject from './EnrolmentSummarySubject/EnrolmentSummarySubject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import EnrolmentSummary from '../EnrolmentSummary/EnrolmentSummary';

function sum(a, b) {
  return a + b;
}

test('adds 5 + 2 to equal 7', () => {
  expect(sum(5, 2)).toBe(7);
});

Enzyme.configure({ adapter: new Adapter() });

describe('EnrolmentSummarySubject', () => {
  it('should render without throwing an error ', () => {
    const component = renderer.create(<EnrolmentSummarySubject subjectCode="9999" subjectName="Java" subjectPrice={99.99} />);
    expect(
      shallow(<EnrolmentSummarySubject subjectCode="9999" subjectName="Java" subjectPrice={99.99} />)
        .find('div')
        .exists()
    ).toBe(true);
  });
});
