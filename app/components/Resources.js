import React from 'react'
import { IndexLink, Link } from 'react-router'
import DocumentMeta from 'react-document-meta'

export default () => {  
  const meta = {
    title: 'React JS Resources - ReactSEO.io',
    description: 'A collection of useful resources surrounding the topic of React JS.',
    canonical: 'http://reactseo.io/resources'
  }

  return (
  <div>
    <DocumentMeta {...meta} />
    <h1>Documentation</h1>
    <ul className='inlinks'>
      <li><IndexLink to='/resources/seo'>Seo</IndexLink></li>
      <li><IndexLink to='/resources/learn-react'>Learn React</IndexLink></li>
    </ul>
    <p>
      Here are some external links to some useful React sites.
    </p>
    <ul className='resources'>
      <li><a target='_blank' href='https://facebook.github.io/react/'>React on Github</a></li>
      <li><a target='_blank' href='http://stackoverflow.com/questions/tagged/reactjs'>React discussion on Stack Overflow</a></li>
    </ul>
  </div>
  )
}