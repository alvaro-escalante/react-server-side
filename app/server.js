import Path from 'path'
import Express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './routes'
import DocumentMeta from 'react-document-meta'
import NotFoundPage from './components/NotFoundPage'
import index from './index'

// initialize the server and configure support for ejs templates
const server = Express()
// define the folder that will be used for static assets
server.use(Express.static(Path.join(__dirname, './static')))
// universal routing and rendering
server.get('*', async (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {
      // in case of error display the error message
      if (err) 
        return res.status(500).send(err.message)
      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) 
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search)
      // generate the React markup for the current route
      let reactOutput, reactMeta
      if (renderProps) {
        // if the current route matched we have renderProps
        reactOutput = renderToString(<RouterContext {...renderProps}/>)
        reactMeta = DocumentMeta.renderAsHTML() 
      } else {
        // otherwise we can render a 404 page
        reactOutput = renderToString(<NotFoundPage/>)
        res.status(404)
      }

      // render the index template with the embedded React markup and Load metadata
      res.send(index({ reactOutput, reactMeta }))
    }
  )
})
// start the server
const port = process.env.PORT || 3000, env = process.env.NODE_ENV || 'production'
server.listen(port)
console.log(`React App listening on port ${port} [${env}]`)