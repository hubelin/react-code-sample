/**
 * @format
 * external dependencies
 */
import React, { Component } from 'react';

/**
 * internal dependencies
 */
import Board from '../../components/Board';
import './index.css';

export default class BoardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boards: [
        {
          column: 1,
          name: 'Winnie',
          color: '#8E6E95',
          list: ['Do this.', 'this, too']
        },
        {
          column: 2,
          name: 'Bob',
          color: '#39A59C',
          list: ['Do this1', 'this, too']
        },
        {
          column: 3,
          name: 'Thomas',
          color: '#344759',
          list: ['Do this2', 'this, too']
        },
        {
          column: 4,
          name: 'George',
          color: '#E8741E',
          list: ['Do this3', 'this, too']
        }
      ]
    };
  }
  addCard = column => {
    const task = window.prompt('Please enter in task');
    const newBoards = [...this.state.boards];
    newBoards[column - 1].list.push(task);
    this.setState({
      boards: newBoards
    });
  };
  render() {
    const { boards } = this.state;
    const boardList = boards.map((board, idx) => {
      const { column, name, color, list } = board;
      return (
        <Board
          name={name}
          color={color}
          list={list}
          key={column}
          column={column}
          addCard={this.addCard}
        />
      );
    });
    return <div className="board-container">{boardList}</div>;
  }
}
