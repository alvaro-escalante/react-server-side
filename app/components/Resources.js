import React from 'react'
import DocumentMeta from 'react-document-meta'

export default () => {

  const meta = {
    title: 'Resources Title',
    description: 'Resources description for React SEO',
    canonical: 'http://reactseo.io',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      },
      property: {
        'og:title': 'Social title property Resources page react',
        'og:site_name': 'Social Sitename Resources page react',
        'og:description': 'Social description property Resources page react'
      }
    }
  }

  return (
  <div>
    <DocumentMeta {...meta} />
    <h1>Documentation</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid officiis nesciunt ab  praesentium officia perspiciatis ad repellat nisi blanditiis natus cum ipsa velit, recusandae   consequuntur distinctio dicta neque. Quos.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid officiis nesciunt ab  praesentium officia perspiciatis ad repellat nisi blanditiis natus cum ipsa velit, recusandae   consequuntur distinctio dicta neque. Quos.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid officiis nesciunt ab  praesentium officia perspiciatis ad repellat nisi blanditiis natus cum ipsa velit, recusandae   consequuntur distinctio dicta neque. Quos.
    </p>

    <img src="../img/react-render.jpg" alt="React Server Side rendering"/>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid officiis nesciunt ab  praesentium officia perspiciatis ad repellat nisi blanditiis natus cum ipsa velit, recusandae   consequuntur distinctio dicta neque. Quos.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid officiis nesciunt ab  praesentium officia perspiciatis ad repellat nisi blanditiis natus cum ipsa velit, recusandae   consequuntur distinctio dicta neque. Quos.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid officiis nesciunt ab  praesentium officia perspiciatis ad repellat nisi blanditiis natus cum ipsa velit, recusandae   consequuntur distinctio dicta neque. Quos.
    </p>
  </div>
  )
}