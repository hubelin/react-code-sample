import React from 'react';
import { shallow, mount } from 'enzyme';
import Board from '../';

/**
 * Factory function to create a ShallowWrapper for BoardItem
 * @function setup
 * @param {object} props - Component props specific to setup
 * @param {obj} state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = mount(<Board {...props} />);
  if (state) wrapper.setState(state);
  return wrapper;
};

/**
 * Returns ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper}
 * @param {string} val - Value of data-test attribute for search
 * @return {ShallowWrapper}
 */

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

describe('<Board />', () => {
  it('renders with Board without error', () => {
    // const wrapper = shallow(<Board />);
    // const boardComponent = wrapper.find("[data-test='component-board']");
    // expect(boardComponent.length).toBe(1);
  });
  it('renders an add button', () => {
    const testProps = {
      column: 1,
      name: 'test1',
      color: '#8E6E95',
      list: ['test this.', 'test this, too'],
      addCard: jest.fn()
    };
    const wrapper = setup(testProps);
    const addCardButton = findByTestAttr(wrapper, 'component-button-add-card');
    expect(addCardButton.length).toBe(2);
  });
  it('renders BoardItems', () => {});
  it('displays new Board item when add button is clicked', () => {
    const testProps = {
      column: 1,
      name: 'test1',
      color: '#8E6E95',
      list: ['test this.', 'test this, too'],
      addCard: jest.fn()
    };
    const wrapper = setup(testProps);
    // find addButton and click
    const addCardButton = findByTestAttr(wrapper, 'component-button-add-card');
    addCardButton.first().simulate('click');
    wrapper.update();
  });
});
