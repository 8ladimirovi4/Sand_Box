const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

const options = {
    key: fs.readFileSync(path.join(__dirname, './ssl/cert.key')),
    cert: fs.readFileSync(path.join(__dirname, './ssl/cert.pem'))
};

app.use(express.static(path.join(__dirname, './'), {
    extensions: ['html', 'htm', 'css', 'js', 'json', 'txt', 'xml']
}));

app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './', 'index.html'));
});

const server = https.createServer(options, app);

server.listen(port, () => {
    console.log(`Сервер запущен на https://127.0.0.1:${port}`);
});
