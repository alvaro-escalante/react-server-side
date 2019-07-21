export default props => `
<!DOCTYPE html>
<html>
  <head>
    ${props.reactMeta}
    <link rel="stylesheet" href="/css/styles.min.css" />
  </head>
  
  <body>
    <div id="root">${props.reactOutput}</div>
  </body>
  
  <script src="/js/main.min.js"></script>
</html>`