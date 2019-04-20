import React from 'react';
import { shallow } from 'enzyme';
import BoardItem from '../';

/**
 * Factory function to create a ShallowWrapper for BoardItem
 * @function setup
 * @param {object} props - Component props specific to setup
 * @param {any} state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  return shallow(<BoardItem {...props} />);
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

describe('<BoardItem />', () => {
  it('renders without crashing', () => {
    const props = {
      task: 'test task'
    };
    const wrapper = setup(props);
    const boardItemComponent = findByTestAttr(wrapper, 'component-board-item');
    expect(boardItemComponent.length).toBe(1);
  });

  it('displays task correctly', () => {
    const props = {
      task: 'test task'
    };
    const wrapper = setup(props);
    const taskDisplay = findByTestAttr(wrapper, 'task-display');
    expect(taskDisplay.length).toBe(1);
  });
});
