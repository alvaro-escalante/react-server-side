import React from 'react'
import { hydrate } from 'react-dom'

import { Router, browserHistory } from 'react-router'
import routes from './routes'
import { getId } from './components/Functions'

// Client side rendering GA implementation

	// const ReactGA = require('react-ga')
	// ReactGA.initialize('UA-85354568-2')

	// const logPageView = () => {
	//   ReactGA.set({ page: window.location.pathname })
	//   ReactGA.pageview(window.location.pathname)
	// }

	// Add this as a Router prop: onUpdate={logPageView} 

hydrate(<Router history={browserHistory} routes={routes} />, getId('root'))