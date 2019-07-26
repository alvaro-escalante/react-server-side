import React from 'react'
import DocumentMeta from 'react-document-meta'

export default () => {

  const meta = {
    title: 'What is React JS - ReactSEO.io',
    description: 'React is a declarative flexible open-source JavaScript library designed to deal exclusively with the output of information.'
  }

  return (
  <div>
    <DocumentMeta {...meta} />
    <h1>What is React?</h1>
    <p>
      React, or ReactJS, is a declarative JavaScript library designed as an efficient, flexible route to building user interfaces. It is maintained by Facebook, instagram and a community of independent developers and businesses. It is open source and provides out of the box developer tools. 
    </p>
    <p>
      React offers the possibility of creating rich web applications delivering a fast and efficient experience. The basic idea is that components inform React about what you want to render. React will update and render only those components when your data changes.
    </p>
    <p>
      React is often described in the same way as other Javascript frameworks but this is really misleading. <strong>React and Angular are not directly comparable entities.</strong> Where Angular is a complete framework, React is not. React is a declarative, flexible Javascript Library used to deal <strong>exclusively with Views</strong> — the output of information.
    </p>
    

    <img src="../img/about-react.jpg" alt="What is React"/>
  </div>
  )
}