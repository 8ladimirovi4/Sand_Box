const DOWNLOAD_BTN = document.querySelector('.download-btn')

const data = 'file.txt'

const downloadFile = (data) => {
  if (!data ) return;
  const linkUrl = `http://localhost:3000/downloads?file=${encodeURIComponent(data)}`;

  axios({
      url: linkUrl,
      method: 'GET',
      responseType: 'blob'
  }).then((response) => {
      const blob = new Blob([response.data], { type: 'application/octet-stream' });
      saveAs(blob, `${data}`);
  }).catch((error) => {
      console.error('Error downloading the file', error);
  });
};

DOWNLOAD_BTN.addEventListener('click', (evt) => downloadFile(data))