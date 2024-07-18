const url = new URL(location.href);
const searchParams = new URLSearchParams(url.search);
const id = searchParams.get("id");
const clientIP = searchParams.get("clientIP");
const camNo = searchParams.get("camNo");
const startTime = searchParams.get("startTime");
const endTime = searchParams.get("endTime");
const VIDEO = document.getElementById("video");
const TITLE = document.querySelector(".container_title");

//звершить ffmpeg процесс
window.addEventListener("beforeunload", async function (event) {
  try {
    await fetch(`https://${clientIP}:3001/playback/stop_ffmpeg_process`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
  } catch (error) {
    console.error("Error stopping ffmpeg process:", error);
  }
});

//start ffmpeg convertation
fetch(
  `https://${clientIP}:3001/playback/${id}/${camNo}/${startTime}/${endTime}`
);

const isManifestExist = async () => {
  try {
    const res = await fetch(
      `https://${clientIP}:3001/playback/is_file_loaded`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      }
    );
    if (!res.ok) {
      throw new Error("no manifest");
    } else {
      TITLE.innerText = `Live Stream, cam_${camNo}`;
      loadVideo();
    }
  } catch (err) {
    setTimeout(isManifestExist, 2000);
    console.error("Error checking file availability:", err);
  }
};

const loadVideo = async () => {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(`https://${clientIP}:3001/playback_data/${id}/out.m3u8`);
    hls.attachMedia(VIDEO);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {});
  } else if (VIDEO.canPlayType("application/vnd.apple.mpegurl")) {
    VIDEO.src = `https://${clientIP}:3001/playback_data/${id}/out.m3u8`;
    VIDEO.addEventListener("canplay", function () {
      VIDEO.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    });
  }
};

isManifestExist();
