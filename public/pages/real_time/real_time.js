const url = new URL(location.href);
const searchParams = new URLSearchParams(url.search);
const id = searchParams.get("id");
const camNo = searchParams.get("camNo");
const VIDEO = document.getElementById("video");
const TITLE = document.querySelector(".container_title");

//звершить ffmpeg процесс
window.addEventListener("beforeunload", async function (event) {
  try {
    await fetch(`/real_time/stop_ffmpeg_process/${id}`);
  } catch (error) {
    console.error("Error stopping ffmpeg process:", error);
  }
});

const isManifest = async() => {
  try{
   const res = await fetch(`${url.protocol}//${url.hostname}:${url.port}/real_time_data/${id}/out.m3u8`)
   if(!res.ok){
    throw new Error('no manifest')
   }else{
    TITLE.innerText = `Live Stream, cam_${camNo}`;
    loadVideo();
   }
  }catch(err){
    setTimeout(isManifest, 2000)
    console.error("Error checking file availability:", err);
  }
}

const loadVideo = async() => {
  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(
      `${url.protocol}//${url.hostname}:${url.port}/real_time_data/${id}/out.m3u8`
    );
    hls.attachMedia(VIDEO);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {});
  } else if (VIDEO.canPlayType("application/vnd.apple.mpegurl")) {
    VIDEO.src = `${url.protocol}//${url.hostname}:${url.port}/real_time_data/${id}/out.m3u8`;
    VIDEO.addEventListener("canplay", function () {
      VIDEO.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    });
  }
}
isManifest()

