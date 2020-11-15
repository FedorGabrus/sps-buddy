import React from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

/**
 * Toggle switch UI element from Bootstrap.
 *
 * @param {*} props isChecked - boolean represents current state (on/off),
 *                  switchToggledHandler - function that handles click on a switcher,
 *                  label - optional string label for switch.
 */
const toggleSwitch = (props) => (
  <label>
    <Toggle
      checked={props.isChecked}
      onChange={props.switchToggledHandler}
    />
    <span>{props.label}</span>
  </label>
);

toggleSwitch.propTypes = {
  isChecked: PropTypes.bool,
  switchToggledHandler: PropTypes.func,
  label: PropTypes.string,
};

export default toggleSwitch;
