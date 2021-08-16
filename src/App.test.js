import React from "react";
import ReactDOM from "react-dom";
// import { render, screen } from '@testing-library/react';
import App from "./App";
import App2 from "./App2";
import Counter from "./Counter";
import TestHook from "./TestHook.js";
import AppBtnIncrement from "./AppBtnIncrement";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";

import TestRenderer from "react-test-renderer";
import ShallowRenderer from "react-test-renderer/shallow";

// import Enzyme, { shallow, render, mount } from 'enzyme';
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import AppCounter from "./AppCounter";

// Enzyme.configure({ adapter: new Adapter() })

// **************** Test App

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it("renders correctly enzyme", () => {
  const wrapper = shallow(<App />);

  expect(toJson(wrapper)).toMatchSnapshot();
});

// **************** Test App2 origin

it("renders correctly react-test-renderer", () => {
  const renderer = new ShallowRenderer();
  renderer.render(<App2 />);
  const result = renderer.getRenderOutput();

  expect(result).toMatchSnapshot();
});

it("renders correctly enzyme", () => {
  const wrapper = shallow(<App2 />);

  expect(toJson(wrapper)).toMatchSnapshot();
});

test("renders name", () => {
  const renderer = render(<App2 />);
  const linkElement = screen.getByText(/Faisal Akram/i);
  const result = "";
  expect(linkElement).toBeInTheDocument();
});

// **************** Test App2 A

test("renders name", () => {
  render(<App2 />);
  const linkElement = screen.getByText(/Faisal Akram/i);
  expect(linkElement).toBeInTheDocument();
});

// **************** Test Counter

// incorrect function assignment in the onClick method
// will still pass the tests.

test("the increment method increments count", () => {
  const wrapper = shallow(<Counter />);

  expect(wrapper.instance().state.count).toBe(0);

  // wrapper.find('button.counter-button').simulate('click')
  // wrapper.setState({count: 1})
  wrapper.instance().increment();
  expect(wrapper.instance().state.count).toBe(1);
});

// **************** Test Counter 2

afterEach(cleanup);

it("Text in state is changed when button clicked", () => {
  const { getByText } = render(<TestHook />);

  expect(getByText(/Initial/i).textContent).toBe("Initial State");

  fireEvent.click(getByText("State Change Button"));

  expect(getByText(/Initial/i).textContent).toBe("Initial State Changed");
});

it("button click changes props", () => {
  const { getByText } = render(
    <AppCounter>
      <TestHook />
    </AppCounter>
  );

  expect(getByText(/Moe/i).textContent).toBe("Moe");

  fireEvent.click(getByText("Change Name"));

  expect(getByText(/Steve/i).textContent).toBe("Steve");
});

// **************** Test Counter Button increment

describe("test for app", () => {
  it("number gets increased with click", async () => {
    const { getByText } = render(<AppBtnIncrement />);
    expect(getByText("0"));
    fireEvent.click(getByText("Button"));
    await waitFor(() => expect(getByText("1")));
  });
});
