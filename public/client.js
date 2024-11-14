const  isDefined = function (obj) {
    return obj !== undefined && obj !== null && typeof obj !== 'undefined';
  };

const  isNullOrEmpty = function (str) {
    return !isDefined(str) || str.toString().trim() === '';
  };
  
  String.prototype.trimFromEnd =
  String.prototype.trimFromEnd ||
  function (delimiter) {
    if (isNullOrEmpty(delimiter)) return this.reverse().replace(/^\s+/gm, '').reverse();

    let current = this;
    let index = this.length;
    while (current.endsWith(delimiter) && index >= 0) {
      let len = this.length - delimiter.length;
      current = current.substring(0, len);
      index -= len;
    }
    return current;
  };

String.prototype.trimFromStart =
  String.prototype.trimFromStart ||
  function (delimiter) {
    if (isNullOrEmpty(delimiter)) return this.replace(/^\s+/gm, '');

    let current = this;
    let index = this.length;
    while (current.startsWith(delimiter) && index >= 0) {
      current = current.substring(delimiter.length);
      index -= delimiter.length;
    }
    return current;
  };

String.prototype.trimString =
  String.prototype.trimString ||
  function (delimiter) {
    if (isNullOrEmpty(delimiter)) return this.trim();
    return this.trimFromStart(delimiter).trimFromEnd(delimiter);
  };

HELP = {
    buildUrl: function (path, query) {
        console.log('===>',path)
          return (
            location.protocol +
            '//' +
            location.hostname +
            (!isNullOrEmpty(location.port) ? ':' + location.port : '') +
            '/' +
            (!isNullOrEmpty(path) ? path.trimString('/') : '') +
            (!isNullOrEmpty(query) ? '?' + query : '')
          );
        
      }
}
const item = {
    name:'big.mtp'
}


let linkUrl = HELP.buildUrl('/download', 'file=' + item.name);
// let linkUrl =`/download?file=${item.name}`
console.log('===>linkUrl',linkUrl)
async function getFile(){

  const link = document.createElement('a');
      link.href = linkUrl;
      link.download = item.name
      link.style.display = 'none';
      
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    // webix
    // .ajax()
    // .response('blob')
    // .get(linkUrl, function (text, data) {
    //   //data - is a data blob
    //   var blob = new Blob([data], { type: 'application/mtp' });
    //   webix.html.download(blob, item.name + '.mtp');
    // });

// Получаем файл с сервера
// fetch(linkUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Failed to download file');
//     }

//     return response.blob(); 
//   })
//   .then(blob => {

//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = item.name + '.mtp'; 
//     a.click(); 
//     URL.revokeObjectURL(url); 
//   })
//   .catch(error => {
//     console.error('Download failed:', error);
//   });
}


