const url = new URL(location.href);
const searchParams = new URLSearchParams(url.search);
const id = searchParams.get("id");
const camNo = searchParams.get("camNo");
const VIDEO_REAL_TIME = document.getElementById("video_real_time");
const TITLE = document.querySelector('.container_title')

//звершить ffmpeg процесс
window.addEventListener("beforeunload", async function (event) {
  try {
    await fetch(`/real_time/stop_ffmpeg_process/${id}`);
  } catch (error) {
    console.error("Error stopping ffmpeg process:", error);
  }
});

const checkFileAvailability = async () => {
  try {
    const response = await fetch(
      `${url.protocol}//${url.hostname}:${url.port}/real_time/check_file/${id}`
    );
    if (response.ok) {
      TITLE.innerText =`Live Stream, cam_${camNo}`
      loadVideo();
    } else {
      setTimeout(checkFileAvailability, 2000); // Повторить через 2 секунды
    }
  } catch (error) {
    console.error("Error checking file availability:", error);
    setTimeout(checkFileAvailability, 2000); // Повторить через 2 секунды
  }
};

function loadVideo() {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(
      `${url.protocol}//${url.hostname}:${url.port}/real_time_data/${id}/out.m3u8`
    );
    hls.attachMedia(VIDEO_REAL_TIME);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {});
  } else if (VIDEO_REAL_TIME.canPlayType("application/vnd.apple.mpegurl")) {
    VIDEO_REAL_TIME.src = `${url.protocol}//${url.hostname}:${url.port}/real_time_data/${id}/out.m3u8`;
    VIDEO_REAL_TIME.addEventListener("canplay", function () {
      VIDEO_REAL_TIME.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    });
  }
}
checkFileAvailability();
