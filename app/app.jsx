
var React = require('react');
var ReactDOM = require('react-dom');
var {Route,Router,IndexRoute,hashHistory} = require('react-router');
var Main=require('Main');
var Weather=require('Weather');
var About=require('About');
var Examples=require('Examples');

//Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$('document').foundation();

// App css
require('style!css!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="About" component={About}/>
      <Route path="Examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
