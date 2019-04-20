/**
 * @format
 * external dependencies
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 * internal dependencies
 */
import './index.css';

export default class BoardItem extends PureComponent {
  static propTypes = {
    task: PropTypes.string.isRequired
  };
  render() {
    const { task } = this.props;
    return (
      <div className="board-item">
        <p className="board-item__text">{task}</p>
      </div>
    );
  }
}
