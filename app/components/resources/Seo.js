import React from 'react'
import DocumentMeta from 'react-document-meta'

export default () => {

  // var el = global.getElementById('here')
  // el.getElementsByTagName('a')[6].classList.add('active')

  const meta = {
    title: 'React JS SEO Resources - ReactSEO.io',
    description: 'A round up of useful resources on the application and effects of using React JS for SEO and organic performance.',
    canonical: 'http://reactseo.io/resources/seo'
  }

  return (
  <div>
    <DocumentMeta {...meta} />
    <h1>React SEO Links</h1>
  
    <ul className='resources'>
      <li>
        <a target='_blank' href='https://builtvisible.com/react-js-seo/'>Building Search Friendly Javascript Apps</a>
      </li>
      <li>
        <a target='_blank' href='http://andrewhfarmer.com/react-seo/'>Will Google find your React content?</a>
      </li>
      <li>
        <a target='_blank' href='https://medium.freecodecamp.com/seo-vs-react-is-it-neccessary-to-render-react-pages-in-the-backend-74ce5015c0c9'>SEO vs. React</a>
      </li>

      <li>
        <a target='_blank' href='https://builtvisible.com/seo-friendly-react-js-app-architecture-for-multimedia-content/'>Seo Friendly react js app architecture</a>
      </li>
      <li>
        <a target='_blank' href='https://builtvisible.com/building-content-in-react/'>Building Content in React</a>
      </li>
      <li>
        <a target='_blank' href='https://medium.freecodecamp.com/using-fetch-as-google-for-seo-experiments-with-react-driven-websites-914e0fc3ab1'>Seo experiments with React driven websites</a>
      </li>
    </ul>  
  </div>
  )
}