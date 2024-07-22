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