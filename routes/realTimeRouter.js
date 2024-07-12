const realTimeRouter = require("express").Router();
const path = require('path');
const fs = require('fs');
const { spawn } = require('child_process');

let ffmpeg = null
let ffmpegPIDs = []

 const createDirectory = async(dirPath) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirPath, { recursive: true }, (err) => {
      if (err) {
        return reject(err);
      }
      resolve(`Directory created at ${dirPath}`);
    });
  });
}

const removeDirectory = (dirName) => {

  const dirPath = path.join(__dirname, `../ffmpeg/real_time_data/${dirName}`);

  fs.rm(dirPath, { recursive: true, force: true }, (err) => {
    if (err) {
      console.error(`Error deleting directory ${dirPath}: ${err.message}`);
      return res.status(500).send(`Failed to delete directory for id ${dirName}: ${err.message}`);
    }
  });
}


//Запуск FFmpeg real_time
 const getVideoContent = async(dirPath, camNo, id) => {
  ffmpeg = spawn('ffmpeg', [
    '-rtsp_transport', 'tcp',
    '-i', `rtsp://admin:Aa11111!@192.168.11.111/Streaming/Channels/${camNo}02`,
    '-c:v', 'libx264',
    '-f', 'hls',
    '-hls_time', '2',
    '-hls_list_size', '1',
    '-hls_flags', 'delete_segments',
    path.join(dirPath, 'out.m3u8')
  ]);
  
  ffmpegPIDs.push({
    camID: id,
    ffmpegPID:ffmpeg.pid
  })

  ffmpeg.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });
  
  ffmpeg.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });
  
  ffmpeg.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}


//РОУТЫ /real_time'

//query
 realTimeRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/real_time', 'real_time.html'));

  const cam = req.query.camNo
  const id = req.query.id

  // Путь к директории с HLS сегментами
  const mediaLocation = path.join(__dirname, `../ffmpeg/real_time_data/${id}`);

(async (dirPath, cam, processID) => {
  await  createDirectory(dirPath)
  await  getVideoContent(dirPath, cam, processID)
})(mediaLocation, cam, id)

});


//params
realTimeRouter.get('/check_file/:id', (req, res) => {
  const { id } = req.params;
// Путь к  HLS сегментам
  const filePath = path.join(__dirname, `../ffmpeg/real_time_data/${id}/out.m3u8`);

  fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
          res.status(404).send('File not found');
      } else {
          res.status(200).send('File found');
      }
  });
})

//params
realTimeRouter.get('/stop_ffmpeg_process/:id', (req, res) => {
  const { id } = req.params;

  const ffmpegProcess = ffmpegPIDs.find(process => process.camID === id);

  if (typeof ffmpegProcess === 'object') {
    try {
      // Kill ffmpeg process using its PID
      process.kill(ffmpegProcess.ffmpegPID);
      // Remove the ffmpeg process from the array
      ffmpegPIDs = ffmpegPIDs.filter(process => process.camID !== id);

      removeDirectory(id)
      res.status(200).send(`FFmpeg process with id ${id} terminated`);
    } catch (err) {
      res.status(500).send(`Failed to terminate FFmpeg process with id ${id}: ${err.message}`);
    }
  } else {
    res.status(404).send(`No FFmpeg process found with id ${id}`);
  }
});


module.exports = realTimeRouter;