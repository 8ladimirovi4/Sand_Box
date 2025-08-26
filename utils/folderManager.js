const fs = require('fs');
const path = require('path');

/**
 * Создает папку news, если она не существует
 */
function ensureNewsFolder(folderName = 'news') {
    const newsPath = path.join(__dirname, '..', folderName);
    if (!fs.existsSync(newsPath)) {
        fs.mkdirSync(newsPath, { recursive: true });
        console.log(`📁 Создана папка ${folderName}`);
    } else {
        console.log(`📁 Папка ${folderName} уже существует`);
    }
    return newsPath;
}

module.exports = {
    ensureNewsFolder
};
