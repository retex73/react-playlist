import React from 'react';
import ReactDOM from 'react-dom';
import { setTimeout } from 'timers';
import {Router, Route, browserHistory, Link} from 'react-router';

require('./css/index.css');
// Module requires
// var TodoComponent = require('./todo');

const TodoComponent = require('./todo');

const About = require('./about');

const App = React.createClass({
  render: function(){
    return(
      <Router history={browserHistory}>
        <Route path={'/'} component={TodoComponent}></Route>
        <Route path={'/about'} component={About}></Route>

      </Router>
    );
  }
});



// put component into html page

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));
