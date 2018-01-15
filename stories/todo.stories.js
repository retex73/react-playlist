import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Todo from '../src/app/todo';

storiesOf('Todo', module)
  .add('with text', () => (
    <ul>
    <li>
    <div className="todo-item">
      <span className="item-name">Some item</span>
      <span className="item-delete" onClick={this.handleDelete}> x </span>
    </div>
  </li>
  </ul>
  ));
