import React from 'react'
import DocumentMeta from 'react-document-meta'

export default () => {

  const meta = {
    title: 'A React JS SEO Experiment by Builtvisible - ReatSEO.io',
    description: 'An SEO experiment designed and developed by Builtvisible, specialists in organic digital marketing.',
    canonical: 'http://reactseo.io/builtvisible'
  }

  return (
  <div>
    <DocumentMeta {...meta} />
    <h1>About Us</h1>
    <a target='_blank' href='https://builtvisible.com'><img src="../img/organic-digital.jpg" alt="Builtvisible Organic Digital"/></a>
    <p>
      We are <a target='_blank' href='https://buildvisible.com'>Builtvisible</a>, an agency bringing <a target='_blank' href='https://builtvisible.com/services/'>Organic Digital</a> excellence to bear on some of the world’s most exciting brands. We specialise in search, content and analytics, and deliver highly performant campaigns and solutions to improve the online performance of all our <a target='_blank' href='https://builtvisible.com/our-work/'>clients</a>. 
    </p>
    <p>
     Experimentation is a core part of our success as a business. Fuelled by a constant curiosity around how things work, we set up this and other experiments to check facts and build a better understanding of what works on the internet. 
    </p>
    <p>
      Our findings end up as part of our <a target='_blank' href='https://builtvisible.com/blog/'>blog</a> or within our <a target='_blank' href='https://builtvisible.com/resources/'>resource section</a>. If you like the sound of what we do then please do <a target='_blank' href='https://builtvisible.com/contact/'>get in touch</a>.
    </p>
    <form id='register-form' action="../newsletter.php" method="post" class="cform-form" noValidate="novalidate">
      <input type="text" name="contacto" placeholder="Your Email" class="cform-text" title="your email" />
      <input class="cform-text" type="submit" name="submit" value="Send message" class="cform-submit" />
    </form>
  </div>
  )
}