import React from 'react'

import DocumentMeta from 'react-document-meta'

export default () => {

  // var el = global.getElementById('here')
  // el.getElementsByTagName('a')[6].classList.add('active')

  const meta = {
    title: 'React JS Communities - ReactSEO.io',
    description: 'Communities, blogs, feeds and experiments to help deepen your understanding of React JS.',
    canonical: 'http://reactseo.io/learn-react/next-steps'
  }

  return (
  <div>
    <DocumentMeta {...meta} />
    <h1>Next Steps ...</h1>
    <ul className='resources'>
      <li><a class="twitter-timeline" href="https://twitter.com/reactjs">Tweets by reactjs</a> </li>
    </ul>  
    <iframe className="frames" width="560" height="315" src="https://www.youtube.com/embed/-AbaV3nrw6E" frameborder="0" allowfullscreen></iframe>
  </div>
  )
}