const url = new URL(location.href);
const searchParams = new URLSearchParams(url.search);
const id = searchParams.get("id");
const camNo = searchParams.get("camNo");
const startTime = searchParams.get("startTime");
const endTime = searchParams.get("endTime");
const VIDEO = document.getElementById("video");
const TITLE = document.querySelector('.container_title')

//звершить ffmpeg процесс
// window.addEventListener("beforeunload", async function (event) {
//     try {
//       await fetch(`/playback/stop_ffmpeg_process/${id}`);
//     } catch (error) {
//       console.error("Error stopping ffmpeg process:", error);
//     }
//   });

const checkFileAvailability = async () => {
    try {
      const response = await fetch(
        `${url.protocol}//${url.hostname}:${url.port}/playback/check_file/${id}`
      );
      if (response.ok) {
        TITLE.innerText =`Playback, cam_${camNo}`
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
        `${url.protocol}//${url.hostname}:${url.port}/playback_data/${id}/out.m3u8`
      );
      hls.attachMedia(VIDEO);
      hls.on(Hls.Events.MANIFEST_PARSED, function () {});
    } else if (VIDEO.canPlayType("application/vnd.apple.mpegurl")) {
      VIDEO.src = `${url.protocol}//${url.hostname}:${url.port}/playback_data/${id}/out.m3u8`;
      VIDEO.addEventListener("canplay", function () {
        VIDEO.play().catch((error) => {
          console.error("Error playing video:", error);
        });
      });
    }
  }
  checkFileAvailability();