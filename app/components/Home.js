import React from 'react'
import DocumentMeta from 'react-document-meta'

export default () =>  {

  const meta = {
    title: 'Home Title',
    description: 'Home description for React SEO',
    canonical: 'http://reactseo.io',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      },
      property: {
        'og:title': 'Social title property Home page react',
        'og:site_name': 'Social Sitename Home page react',
        'og:description': 'Social description property Home page react'
      }
    }
  }

  return (
    <div>
      <DocumentMeta {...meta} />
      <h1>React.JS & SEO</h1>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </p>

      <img src="../img/react.jpg" alt="React Router"/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid officiis nesciunt ab  praesentium   officia perspiciatis ad repellat nisi blanditiis natus cum ipsa velit, recusandae   consequuntur  distinctio dicta neque. Quos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid officiis nesciunt ab  praesentium   officia perspiciatis ad repellat nisi blanditiis natus cum ipsa velit, recusandae   consequuntur  distinctio dicta neque. Quos.
      </p>
  
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid officiis nesciunt ab  praesentium   officia perspiciatis ad repellat nisi blanditiis natus cum ipsa velit, recusandae   consequuntur  distinctio dicta neque. Quos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid officiis nesciunt ab  praesentium   officia perspiciatis ad repellat nisi blanditiis natus cum ipsa velit, recusandae   consequuntur  distinctio dicta neque. Quos.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid officiis nesciunt ab  praesentium   officia perspiciatis ad repellat nisi blanditiis natus cum ipsa velit, recusandae   consequuntur  distinctio dicta neque. Quos.
      </p>
    </div>
  )
}