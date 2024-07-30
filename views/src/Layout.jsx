const React = require("react");

module.exports = function Layout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        <script defer src="aplication.js" />
        <link rel="stylesheet" href="style.css"/>


        <title>React ssr</title>
      </head>
      <body>
        <div class="app-wrapper">
       <header></header>
       <main>
       {children}
       </main>
       <footer></footer>
       </div>
      </body>
    </html>
  );
};
