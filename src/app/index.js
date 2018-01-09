// var React = require('react');
// var ReactDOM = require('react-dom');
import React from 'react';
import ReactDOM from 'react-dom';
import { setTimeout } from 'timers';

require('./css/index.css');
// Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');

var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers'],
      age: 30
    }
  },

  render: function(){
    var todos = this.state.todos;
    todos = todos.map(function(item, index){

      return(
        <TodoItem item={item} key={index} onDelete={this.onDelete}/>
      );
    }.bind(this));
    return(
      <div id="todo-list">
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
    var updatedTodos = this.state.todos.filter(function(val, index){
      return item !== val;
    });
    this.setState({
      todos: updatedTodos
    });
  },
  onAdd: function(item){
    var updatedTodos = this.state.todos;
    updatedTodos.push(item);
    this.setState({
      todos: updatedTodos
    });
  }
});



// put component into html page

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
