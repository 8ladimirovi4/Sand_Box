const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { spawn } = require('child_process');

const app = express();
const port = 3001;


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

// Путь к HLS сегментам
const hlsPath = path.join(__dirname, 'real_time');
// hlsPath = path.join(__dirname, 'play_back');

//Запуск FFmpeg real_time
const ffmpeg = spawn('ffmpeg', [
    '-rtsp_transport', 'tcp',
    '-i', 'rtsp://admin:Aa11111!@192.168.11.111/Streaming/Channels/1702',
    '-c:v', 'libx264',
    '-f', 'hls',
    '-hls_time', '2',
    '-hls_list_size', '1',
    '-hls_flags', 'delete_segments',
    path.join(hlsPath, 'out.m3u8')
  ]);

// Запуск FFmpeg play back
// const ffmpeg = spawn('ffmpeg', [
//     '-rtsp_transport', 'tcp',
//     '-i', 'rtsp://admin:Aa11111!@192.168.11.111:554/Streaming/tracks/1701/?starttime=20240710T080000Z;endtime=20240710T100000Z',
//     '-an',
//     '-c:v', 'copy',
//     '-f', 'hls',
//     '-hls_time', '2',
//     path.join(hlsPath, 'out.m3u8')
// ]);

ffmpeg.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
  ffmpeg.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  
  ffmpeg.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

server.listen(port, () => {
  console.log(`Сервер запущен на https://127.0.0.1:${port}`);
});

