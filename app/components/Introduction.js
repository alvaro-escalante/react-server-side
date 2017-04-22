import React from 'react'
import DocumentMeta from 'react-document-meta'

export default () =>  {

  const meta = {
    title: 'Introduction to React JS SEO - ReactSEO.io',
    description: 'A live test site developed by SEO & digital marketing agency Builtvisible to explore the capabilities of React JS and the impact on SEO.',
    canonical: 'http://reactseo.io'
  }

  return (
    <div>
      <DocumentMeta {...meta} />
      <h1>Introduction</h1>
      <p>
        Despite Google’s long standing assertion that it <a target="_blank" href="https://webmasters.googleblog.com/2014/05/understanding-web-pages-better.html">can index pages</a> that render their content using Javascript, anecdotal evidence indicates otherwise.
      </p>
      <p>
        Here at <a target="_blank" href='https://builtvisible.com/'>Builtvisible</a>, we’ve set out to test that assumption across the most popular current JavaScript frameworks. This site is dedicated to the React version of the experiment but you can take a look at the <a target="_blank" href='http://www.angularseo.io/'>Angular version here</a>.
      </p>

      <h2>Methodology</h2>
      <p>
        We have built this site using Server Side Rendering ReactJS for all pages. We have added enough unique content to allow Googlebot to crawl this site like any other and have included meta descriptions throughout.
      </p>
      <p>
        The aim is to launch this site live for a certain period, then undertake logfile analysis to understand the behaviour of Googlebot. Questions we want answered are:
      </p>
      <ul class='standard'>
        <li>How fast do search engines crawl & index React JS content and are there any limitations on what is being indexed?</li>
        <li>What is being seen by search engines and how does this compare to what is being rendered on each page?</li>
        <li>How are search engines handling images and other media forms?</li>
        <li>Is the rel=canonical tag being adhered to?</li>
      </ul>
        
      <p>
        We aim to report on these findings within the next few months. 
      </p>


      <img src="../img/react.jpg" alt="React Router"/>
      
    </div>
  )
}