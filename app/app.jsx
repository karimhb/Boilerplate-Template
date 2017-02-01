var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');

// Load styles 
require('style!css!sass!styles');

ReactDOM.render(
  <div>
   <Main />
  </div>,
  document.getElementById('app')
);
