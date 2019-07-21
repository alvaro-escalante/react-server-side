export default props => `
<!DOCTYPE html>
<html>
  <head>
    ${props.reactMeta}
    <link rel="stylesheet" href="/css/styles.min.css" />
  </head>
  
  <body>
    <div id="root">${props.reactOutput}</div>
  	<script src="/js/main.min.js"></script>
  </body>
  
</html>`