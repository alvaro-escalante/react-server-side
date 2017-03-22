import React from 'react'
import { Router, Route, IndexRoute, browserHistory, match, RouterContext } from 'react-router'
import App from './components/App'
import Home from './components/Home'
import About from './components/About'
import Why from './components/Why'
import Background from './components/Background'
import Myths from './components/Myths'
import Resources from './components/Resources'
import Builtvisible from './components/Builtvisible'
import NotFoundPage from './components/NotFoundPage'
// Server side rendering
const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/what-is-react' component={About} />
      <Route path='/why-react' component={Why} />
      <Route path='/background' component={Background} />
      <Route path='/react-myths' component={Myths} />
      <Route path='/resources' component={Resources} />
      <Route path='/builtvisible' component={Builtvisible} />
      <Route path='*' component={NotFoundPage} />	
   </Route>
  </Router>
)
// Export props to App.js
export default routes


