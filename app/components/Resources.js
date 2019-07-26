import React from 'react'
import { IndexLink, Link } from 'react-router'
import DocumentMeta from 'react-document-meta'

export default () => {  
  const meta = {
    title: 'React JS Resources',
    description: 'A collection of useful resources surrounding the topic of React JS.'
  }

  return (
  <div>
    <DocumentMeta {...meta} />
    <h1>Documentation</h1>
    <ul class='inlinks'>
      <li><IndexLink to='/resources/seo'>Seo</IndexLink></li>
      <li><IndexLink to='/resources/learn-react'>Learn React</IndexLink></li>
    </ul>
    <p>
      Here are some external links to some useful React sites.
    </p>
    <ul class='resources'>
      <li><a target='_blank' href='https://facebook.github.io/react/' rel="noopener" aria-label="Github">React on Github</a></li>
      <li><a target='_blank' href='http://stackoverflow.com/questions/tagged/reactjs' rel="noopener" aria-label="Stackoverflow">React discussion on Stack Overflow</a></li>
    </ul>
  </div>
  )
}