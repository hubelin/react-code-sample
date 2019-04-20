/**
 * @format
 * external dependencies
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  static defaultProps = {
    type: 'button'
  };
  render() {
    const { ...props } = this.props;
    return <button {...props} />;
  }
}
