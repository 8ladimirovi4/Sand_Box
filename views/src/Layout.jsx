const React = require("react");

module.exports = function Layout({ children }) {

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/file-saver@2.0.5/dist/FileSaver.min.js"></script>
        
        <script defer src="aplication.js" />
        <link rel="stylesheet" href="style.css"/>


        <title>React ssr</title>
      </head>
      <body>
        <div className="app-wrapper">
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
