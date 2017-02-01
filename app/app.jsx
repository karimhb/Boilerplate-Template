var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');

// Load styles 
require('style!css!styles');

ReactDOM.render(
  <div>
   <Main />
  </div>,
  document.getElementById('app')
);
