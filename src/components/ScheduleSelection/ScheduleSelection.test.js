import React from 'react';
import PropTypes from 'prop-types';
import EnrolmentSummarySchedule from '../EnrolmentSummary/EnrolmentSummarySchedule/EnrolmentSummarySchedule';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import scheduleSelection from '../ScheduleSelection/ScheduleSelection';



Enzyme.configure({ adapter: new Adapter() });

describe('ScheduleSelection', () => {
  it('should render Schedule Selection Component without throwing an error ', () => {
    const component = renderer.create(<EnrolmentSummarySchedule subjectCode="9999" subjectName="C#" tafeCode="TAFEC#" scheduleTimes={["10:00", "11:00"]} />);
    expect(
      shallow(<EnrolmentSummarySchedule subjectCode="9999" subjectName="C#" scheduleTimes={["10:00", "11:00"]} />)
        .find('Fragment')
        .exists()
    ).toBe(true);
  });
});
