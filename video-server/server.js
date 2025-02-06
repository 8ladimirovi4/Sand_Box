const express = require('express');
const fs = require('fs');
const path = require('path');
const https = require('https');


// Путь к видеофайлу
const videoPath = path.join(__dirname, 'videoTmp/Record.mp4');

// Путь к сертификатам
const privateKey = fs.readFileSync(path.join(__dirname, 'certs/private-key.pem'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, 'certs/certificate.pem'), 'utf8');
const credentials = { key: privateKey, cert: certificate };

const app = express();
const port = 3001;

// Статический маршрут для отдачи HTML страницы
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
  });

// Обработчик запроса для видеофайла
app.get('/video', (req, res) => {
  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");

    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    const chunkSize = (end - start) + 1;
    const file = fs.createReadStream(videoPath, { start, end });

    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "video/mp4",
    });

    file.pipe(res);
  } else {
    res.writeHead(200, {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    });
    fs.createReadStream(videoPath).pipe(res);
  }
});

// Создание HTTPS сервера
https.createServer(credentials, app).listen(port, () => {
    console.log(`Server is running at https://localhost:${port}`);
  });