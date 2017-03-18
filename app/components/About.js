import React from 'react'
import DocumentMeta from 'react-document-meta'

export default () => {

  const meta = {
    title: 'About Title',
    description: 'About description for React SEO',
    canonical: 'http://reactseo.io',
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'react,meta,document,html,tags'
      },
      property: {
        'og:title': 'Social title property About page react',
        'og:site_name': 'Social Sitename About page react',
        'og:description': 'Social description property About page react'
      }
    }
  }

  return (
  <div>
    <DocumentMeta {...meta} />
    <h1>What is React</h1>
    <p>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid officiis nesciunt ab  praesentium officia perspiciatis ad repellat nisi blanditiis natus cum ipsa velit, recusandae   consequuntur distinctio dicta neque. Quos.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit aliquid officiis nesciunt ab  praesentium officia perspiciatis ad repellat nisi blanditiis natus cum ipsa velit, recusandae   consequuntur distinctio dicta neque. Quos.
    </p>

    <img src="../img/react-router.jpg" alt="React Router"/>

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