const DOWNLOAD_BTNS = document.querySelectorAll('.download-btn')

const data = 'file.txt'

const downloadFile = (data) => {
  if (!data) return;
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

DOWNLOAD_BTNS.forEach(DOWNLOAD_BTN => {
    DOWNLOAD_BTN.addEventListener('click', (evt) =>{
        const rowData = evt.target.getAttribute('row_data')
        const parseData = JSON.parse(rowData)
        downloadFile(parseData.name)
    }) 
})
