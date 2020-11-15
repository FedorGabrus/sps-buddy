import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import renderer from 'react-test-renderer';
import { act } from "react-dom/test-utils";
import { render, unmountComponentAtNode } from "react-dom";
import LandingPage from '../LandingPage/LandingPage';

function sum(a, b) {
  return a + b;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});



let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

//var firstIcon = "users";

//act(() => {
//    return(<FontAwesomeIcon icon={firstIcon} />, container);
//  });
//  expect(container.textContent).toBe("users");
