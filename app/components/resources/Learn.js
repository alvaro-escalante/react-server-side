import React from 'react'
import { IndexLink, Link } from 'react-router'
import DocumentMeta from 'react-document-meta'

export default () => {

  // var el = global.getElementById('here')
  // el.getElementsByTagName('a')[6].classList.add('active')

  const meta = {
    title: 'Learn React JS - ReactSEO.io',
    description: 'A collection of resources to help you get started in building your first web application with React JS.',
    canonical: 'http://reactseo.io/learn-react'
  }

  return (
  <div>
    <DocumentMeta {...meta} />
    <h1>Documentation</h1>
     <ul className='resources'>
      <li><a target="_blank" href="https://facebook.github.io/react/docs/hello-world.html">React Offical Get started guide</a></li>
      <li><a target="_blank" href="https://github.com/enaqx/awesome-react">Awesome React</a></li>
      <li><a target="_blank" href="https://github.com/facebook/react/wiki/Complementary-Tools">Complementary Tools</a></li>
      <li><a target="_blank" href="https://scotch.io/tutorials/learning-react-getting-started-and-concepts">Learning React.js</a></li>
      <li><a target="_blank" href="http://buildwithreact.com/tutorial">Build with react</a></li>
      <li><Link to='/resources/learn-react/next-steps'>Next Steps</Link></li>
    </ul>  
  </div>
  )
}