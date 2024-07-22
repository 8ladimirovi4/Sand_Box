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
const getVideoContent = async (dirPath, camNo, startPoint, endPoint, id) => {
  ffmpeg = spawn("ffmpeg", [
    "-rtsp_transport",
    "tcp",
    "-i",
    `rtsp://admin:Aa11111!@192.168.11.111:554/Streaming/tracks/${camNo}01/?starttime=${startPoint};endtime=${endPoint}`,
    "-an",
    "-c:v",
    "copy",
    "-f",
    "hls",
    "-hls_time",
    "2",
    path.join(dirPath, "out.m3u8"),
  ]);

  ffmpegPIDs.push({
    camID: id,
    ffmpegPID: ffmpeg.pid,
  });

  ffmpeg.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  ffmpeg.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });

  ffmpeg.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });
};
//ROUTES (/playback)'
//get HTML
playBackRouter.get("/", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../public/pages/playback", "playback.html")
  );

  const cam = req.query.camNo;
  const id = req.query.id;
  const startTime = req.query.startTime;
  const endTime = req.query.endTime;

  // HLS dir path
  const mediaLocation = MEDIA_PATH + id;

  (async (dirPath, camNo, startPoint, endPoint, processID) => {
    await createDirectory(dirPath);
    await getVideoContent(dirPath, camNo, startPoint, endPoint, processID);
  })(mediaLocation, cam, startTime, endTime, id);
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

//close ffmpeg connection
playBackRouter.get("/stop_ffmpeg_process/:id", (req, res) => {
  const { id } = req.params;

  const ffmpegProcess = ffmpegPIDs.find((process) => process.camID === id);

  if (typeof ffmpegProcess === "object") {
    try {
      // Kill ffmpeg process using its PID
      process.kill(ffmpegProcess.ffmpegPID);
      // Remove the ffmpeg process from the array
      ffmpegPIDs = ffmpegPIDs.filter((process) => process.camID !== id);

      //remove media directory
      removeDirectory(id);
      res.status(200).send(`FFmpeg process with id ${id} terminated`);
    } catch (err) {
      res
        .status(500)
        .send(
          `Failed to terminate FFmpeg process with id ${id}: ${err.message}`
        );
    }
  } else {
    res.status(404).send(`No FFmpeg process found with id ${id}`);
  }
});

module.exports = playBackRouter;
