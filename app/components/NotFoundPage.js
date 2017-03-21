import React from 'react';
import { Link } from 'react-router'

export default () =>
  <div className="not-found">
  	<h2>Page not found!</h2>
    <h3>404</h3>
    <p class='goback'>
      <Link to="/">Go back to the main page</Link>
    </p>
  </div>