import React from 'react'
import DocumentMeta from 'react-document-meta'

export default () => {

  const meta = {
    title: 'React JS Background - ReactSEO.io',
    description: 'Created in 2011 by Jordan Walke whilst working at Facebook, originally starting life as a XHP version of PHP to minimize cross site script attacks.',
    canonical: 'http://reactseo.io/background'
  }
    
  return (
    <div>
      <DocumentMeta {...meta} />
      <h1>History of React</h1>
      <p>
       React was created by Jordan Walke while working at Facebook around 2011 as a way to take XHP to the browser using Javascript. They had developed a version of XHP to deal with cross site script attacks but this required many requests to the server. React became an elegant solution this issue and gained popularity at Facebook when it fixed a bug that kept recurring on their app chat and messages notifications. By keeping a single state within React for the notification the problem was solved.
      </p>
      <p>
       Since then React is been used for Instagram as a single page application and various commercial websites, such as Netflix, Airbnb and Walmart.
      </p>
      <p>
       This presentation by Tom Occhino and Jordan Walke from 2013 explains in more detail why React became the preferred JS framework at Facebook:
      </p>

      <iframe className="frames" width="560" height="315" src="https://www.youtube.com/embed/GW0rj4sNH2w?ecver=2"  frameBorder="0" allowFullScreen></iframe>
  
    </div>
  )
}