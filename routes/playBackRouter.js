const playBackRouter = require("express").Router();
const path = require("path");
const fs = require("fs");
const { spawn } = require("child_process");

let ffmpeg = null;
let ffmpegPIDs = [];

const MEDIA_PATH = path.join(__dirname, `../ffmpeg/playback_data/`);

const createDirectory = async (dirPath) => {
    return new Promise((resolve, reject) => {
      fs.mkdir(dirPath, { recursive: true }, (err) => {
        if (err) {
          return reject(err);
        }
        resolve(`Directory created at ${dirPath}`);
      });
    });
  };
  
  const removeDirectory = (dirName) => {
    const dirPath = MEDIA_PATH + dirName;
  
    fs.rm(dirPath, { recursive: true, force: true }, (err) => {
      if (err) {
        console.error(`Error deleting directory ${dirPath}: ${err.message}`);
        return res
          .status(500)
          .send(`Failed to delete directory for id ${dirName}: ${err.message}`);
      }
    });
  };
  const getVideoContent = async (dirPath, camNo, id) => {
ffmpeg = spawn('ffmpeg', [
    '-rtsp_transport', 'tcp',
    '-i', 'rtsp://admin:Aa11111!@192.168.11.111:554/Streaming/tracks/1701/?starttime=20240715T000000Z;endtime=20240715T235959Z',
    '-an',
    '-c:v', 'copy',
    '-f', 'hls',
    '-hls_time', '2',
    path.join(dirPath, 'out.m3u8')
]);

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
//ROUTES (/playback)'
//get HTML
playBackRouter.get("/", (req, res) => {
    res.sendFile(
      path.join(__dirname, "../public/pages/playback", "playback.html")
    );
  
    const cam = req.query.camNo;
    const id = req.query.id;
  
    // HLS dir path
    const mediaLocation = MEDIA_PATH + id;
  
    (async (dirPath, cam, processID) => {
      await createDirectory(dirPath);
      await getVideoContent(dirPath, cam, processID);
    })(mediaLocation, cam, id);
  });

  //check manifest
  playBackRouter.get("/check_file/:id", (req, res) => {
    const { id } = req.params;
    // HLS Manifest path
    const filePath = MEDIA_PATH + id + "/out.m3u8";
  
    fs.access(filePath, fs.constants.F_OK, (err) => {
      if (err) {
        res.status(404).send("File not found");
      } else {
        res.status(200).send("File found");
      }
    });
  });

module.exports = playBackRouter;