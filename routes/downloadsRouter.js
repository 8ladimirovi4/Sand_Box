
const downloadsRouter = require("express").Router();
const path = require("path")


downloadsRouter.get('/', (req, res) => {
    const fileName = req.query.file; // Получение имени файла из запроса
    if (!fileName) {
        return res.status(400).send('File name is required');
    }
    const filePath = path.join(__dirname, '../data', fileName); // Путь к файлу в корне проекта
    res.download(filePath, (err) => {
        if (err) {
            return res.status(404).send('File not found');
        }
    });
});
module.exports = downloadsRouter ;
