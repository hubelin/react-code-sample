import React from 'react';
import { shallow } from 'enzyme';
import BoardContainer from '../';

/**
 * Factory function to create a ShallowWrapper for BoardItem
 * @function setup
 * @param {object} props - Component props specific to setup
 * @param {obj} state
 * @returns {ShallowWrapper}
 */
const setup = (props = {}, state = null) => {
  const wrapper = shallow(<BoardContainer {...props} />);
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

describe('<BoardContainer/>', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const boardContainerComponent = findByTestAttr(
      wrapper,
      'component-board-container'
    );
    expect(boardContainerComponent.length).toBe(1);
  });
  it('board state set correctly', () => {
    const testState = [
      {
        column: 1,
        name: 'test1',
        color: '#8E6E95',
        list: ['test this.', 'test this, too']
      },
      {
        column: 2,
        name: 'test2',
        color: '#39A59C',
        list: ['test this2', 'test this again, too']
      }
    ];
    const wrapper = setup(null, testState);
    const initialBoardState = wrapper.state('boards');
  });
});
