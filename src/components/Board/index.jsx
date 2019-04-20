/**
 * @format
 * external dependencies
 */
// extends Component rather than PureComponent because arrays nested in obj
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * internal dependencies
 */
import BoardItem from '../BoardItem';
import Button from '../Button';
import './index.css';

export default class Board extends Component {
  static propTypes = {
    // board: PropTypes.arrayOf(
    //   PropTypes.shape({

    //   })
    // )
    column: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    addCard: PropTypes.func.isRequired
  };

  render() {
    const { column, name, color, list, addCard } = this.props;
    const style = {
      backgroundColor: color
    };
    const boardItems = list.map((task, idx) => {
      return <BoardItem task={task} column={column} key={Date.now() + idx} />;
    });
    return (
      <div className="board">
        <h1 style={style}>{name}</h1>
        {boardItems}
        <Button onClick={() => addCard(column)}>+ Add Card</Button>
      </div>
    );
  }
}
