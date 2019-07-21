import React from 'react'
import { IndexLink, Link } from 'react-router'
import DocumentMeta from 'react-document-meta'

export default () => {

  const meta = {
    title: 'React JS Myths - ReactSEO.io',
    description: 'Demystifying the myths surrounding React JS - what it is, when it should be used and what it is not.',
    canonical: 'http://reactseo.io/react-myths',
  }

  return (
  <div>
    <DocumentMeta {...meta} />
    <h1>What React is not</h1>
    <p>
      React is not a Model, View, Controller (MVC) framework. It is just a Library concerned with the view layer of your application View on MVC.
    </p>
    <p>
      React is not a two-way data binding technology like Angular or Aurelia, meaning that when properties in the user interface get updated, those get propagated back to the data on the model. Even though server side rendering is already available through the renderToString() method, the setup is complicated. It requires access to the root level on the server to install node.js, php, or another back end to run React on SSR mode.
    </p>
    <p>
      According to Jordan Walke, React is not an object-oriented focused framework.
    </p>
    <p class='inline'>
      Here are some<Link to='/react-myths2/'>more myths</Link>
    </p>

    <img src="../img/myths-facts.jpg" alt="React Server Side rendering"/>
  </div>
  )
}