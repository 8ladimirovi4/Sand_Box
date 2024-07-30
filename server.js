// Подключение библиотеки Express
const express = require('express');
const path = require('path');
const cors = require('cors'); // Подключаем пакет cors

const app = express();
const port = 3000;

app.use(express.static('public'))

  app.use(cors());
  
  
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });

  // Метод для отдачи файла
app.get('/download', (req, res) => {
  const fileName = req.query.file; // Получение имени файла из запроса
  if (!fileName) {
      return res.status(400).send('File name is required');
  }
  const filePath = path.join(__dirname, fileName); // Путь к файлу в корне проекта
  res.download(filePath, (err) => {
      if (err) {
          return res.status(404).send('File not found');
      }
  });
});

// Запуск сервера на указанном порту
app.listen(port, () => {
  console.log(`Сервер запущен на http://127.0.0.1:${port}`);
});
