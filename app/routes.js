import React from 'react'
import { Router, Route, IndexRoute, browserHistory, match, RouterContext } from 'react-router'
import App from './components/App'
import Introduction from './components/Introduction'
import About from './components/About'
import Why from './components/Why'
import Background from './components/Background'
import Myths from './components/Myths'
import Myths2 from './components/Myths2'
import Resources from './components/Resources'
import Seo from './components/resources/Seo'
import Learn from './components/resources/Learn'
import Next from './components/resources/Next'
import Builtvisible from './components/Builtvisible'
import NotFoundPage from './components/NotFoundPage'
// Server side rendering
const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Introduction} />
      <Route path='/what-is-react' component={About} />
      <Route path='/why-react' component={Why} />
      <Route path='/background' component={Background} />
      <Route path='/react-myths' component={Myths} />
      <Route path='/react-myths2' component={Myths2} />
      <Route path='/resources' component={Resources} />
      <Route path='/resources/seo' component={Seo} />
      <Route path='/resources/learn-react' component={Learn} />
      <Route path='/resources/learn-react/next-steps' component={Next} />
      <Route path='/builtvisible' component={Builtvisible} />
      <Route path='*' component={NotFoundPage} />	
   </Route>
  </Router>
)
// Export props to App.js
export default routes


