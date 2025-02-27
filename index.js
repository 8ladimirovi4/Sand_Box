const { createServer } = require("http"); // Исправленный импорт
const readFile = require("fs/promises").readFile; // Исправленный импорт
const escapeHtml = require("escape-html"); // Оставляем как есть

createServer(async (req, res) => {
  const author = "Jae Doe";
  const postContent = await readFile("./posts/hello-world.txt", "utf8");
  sendHTML(
    res,
    `<html>
      <head>
        <title>My blog</title>
      </head>
      <body>
        <nav>
          <a href="/">Home</a>
          <hr />
        </nav>
        <article>
          ${escapeHtml(postContent)}
        </article>
        <footer>
          <hr>
          <p><i>(c) ${escapeHtml(author)}, ${new Date().getFullYear()}</i></p>
        </footer>
      </body>
    </html>`
  );
}).listen(8080);

function sendHTML(res, html) {
  res.setHeader("Content-Type", "text/html");
  res.end(html);
}