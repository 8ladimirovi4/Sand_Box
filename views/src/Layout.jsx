const React = require("react");
module.exports = function Layout({ children, user }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <script defer src="/js/aplication.js" />
        <link rel="stylesheet" href="css/css.css"/>


        <title>React ssr</title>
      </head>
      <body>
       <h1>Layout</h1>
      </body>
    </html>
  );
};
