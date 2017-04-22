import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
// Client side rendering

var ReactGA = require('react-ga');
ReactGA.initialize('UA-85354568-2');

var logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

window.onload = () => {
  ReactDOM.render(
    <Router 
      history={browserHistory} 
      routes={routes} 
      onUpdate={logPageView}
      // onUpdate={() => window.scrollTo(0, 0)}
    />, document.getElementById('root'))
}