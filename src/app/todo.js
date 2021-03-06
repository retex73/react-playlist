// const React = require('react');
import React from 'react';
import {Link} from 'react-router';

const TodoItem = require('./todoItem');
const AddItem = require('./addItem');


var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers'],
      age: 30
    }
  },

  render: function(){
    let todos = this.state.todos;
    todos = todos.map(function(item, index){

      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));
    return(
      <div id="todo-list">
      <Link to={'/about'}>About</Link>
        <p onClick={this.clicked}>The busiest people have the most leisure</p>
        <p onClick={this.replace}>{this.state.age}</p>
        <ul>
          {todos}
        </ul>
        <AddItem onAdd={this.onAdd}/>
      </div>
    );
  }, // render
// Custom functions
  onDelete: function(item){
    let updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  onAdd: function(item){
    let updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  },

  // Lifecycle functions
  componentWillMount: function(){
    console.log('component will mount');
  },
  componentDidMount: function(){
    console.log('component did mount');
    // any grabbing of external data
  },
  componentWillUpdate: function(){
    console.log('component will update');
  }
});

// module.exports = TodoComponent;
export default TodoComponent;
