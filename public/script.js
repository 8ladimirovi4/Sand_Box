const hls = new Hls();
const url = new URL(location.href);
const VIDEO = document.getElementById("video");

hls.loadSource(
  `${url.protocol}//${url.hostname}:${url.port}/ffmpeg/realtime/out.m3u8`
  //`${url.protocol}//${url.hostname}:${url.port}/ffmpeg/playback/out.m3u8`
);
hls.attachMedia(VIDEO);
hls.on(Hls.Events.MANIFEST_PARSED, function () {});

