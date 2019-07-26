export default props => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    ${props.reactMeta}
    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="/css/styles.min.css" />
  </head>
  
  <body>
    <div id="root">${props.reactOutput}</div>
  	<script src="/js/main.min.js"></script>
  </body>
  
</html>`