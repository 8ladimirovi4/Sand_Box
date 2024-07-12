let filesBundle = [
];
if (window.bundle != null) filesBundle = filesBundle.concat(window.bundle);

const loadScriptsAndStyles = ((files, callback) => {
  let loadedCount = 0;
  function loadNext() {
      if (loadedCount < files.length) {
          let file = files[loadedCount];
          let element;

          if (file.endsWith('.js')) {
              element = document.createElement('script');
              element.type = 'text/javascript';
              element.src = file;
          } else if (file.endsWith('.css')) {
              element = document.createElement('link');
              element.rel = 'stylesheet';
              element.type = 'text/css';
              element.href = file;
          }

          if (element) {
              element.onload = function() {
                  loadedCount++;
                  loadNext();
              };
              document.head.appendChild(element);
          } else {
              loadedCount++;
              loadNext();
          }
      } else {
          if (typeof callback === 'function') {
              callback();
          }
      }
  }
  loadNext();
})(filesBundle, () => {
  console.log('===>scripts loaded succesfully')
})






// var videoRealTime = document.getElementById('video_real_time');
//         var videoPlayBack = document.getElementById('video_play_back');
//         var btnRealTime = document.getElementById('btn_real_time');
//         var btnPlayBack = document.getElementById('btn_play_back');
//         var hls = new Hls();

//         btnRealTime.addEventListener('click', (e) => {
//             videoRealTime.classList = 'visible'
//             if (Hls.isSupported()) {
//             hls.loadSource('https://127.0.0.1:3001/real_time/out.m3u8');
//             hls.attachMedia(videoRealTime);
//             hls.on(Hls.Events.MANIFEST_PARSED, function () {
//             });
//           } 
//         })

//         btnPlayBack.addEventListener('click', (e) => {
//              videoPlayBack.classList = 'visible'
//             if (Hls.isSupported()) {
//             hls.loadSource('https://127.0.0.1:3001/play_back/out.m3u8');
//             hls.attachMedia(videoPlayBack);
//             hls.on(Hls.Events.MANIFEST_PARSED, function () {
//             });
//           } 
//         })