const https = require('https');

/**
 * Функция для получения HTML страницы по URL
 * @param {string} url - URL страницы для получения
 * @returns {Promise<string>} HTML содержимое страницы
 */
function fetchPage(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            
            res.on('data', (chunk) => {
                data += chunk;
            });
            
            res.on('end', () => {
                resolve(data);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

module.exports = {
    fetchPage
};
