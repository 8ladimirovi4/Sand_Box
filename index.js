const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const morgan = require('morgan');

// Порт, на котором будет работать сервер
const PORT = 3000;
app.use(morgan('combined')); // 'combined' выводит детальные логи, можно использовать 'dev' для более кратких логов
// Папка, где хранятся файлы для скачивания
const FILES_DIR = path.join(__dirname, 'download');

// Обслуживаем статические файлы (включая HTML-файл клиента)
app.use(express.static(path.join(__dirname, 'public')));

// Обрабатываем все неизвестные маршруты, возвращая `index.html`
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Маршрут для рендеринга HTML страницы
app.get('/', (req, res) => {
    // Отправляем HTML-файл, который будет содержать кнопку для скачивания
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// Эндпоинт для скачивания файла
app.get('/download', (req, res) => {
  const fileName = req.query.file;
console.log('===>fileName',fileName)
  if (!fileName) {
    return res.status(400).send('File name is required');
  }

  const filePath = path.join(FILES_DIR, fileName);
console.log('===>filePath',filePath)
  // Проверяем, существует ли файл
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      return res.status(404).send('File not found');
    }

    // Устанавливаем заголовки для скачивания
    res.setHeader('Content-Type', 'application/xml');
    res.setHeader('Content-Disposition', `attachment; filename="${fileName}"`);
    
    // Используем поток для передачи файла
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);

    // Обработчик ошибок
    fileStream.on('error', (error) => {
      console.error('Error reading file:', error);
      res.status(500).send('Internal server error');
    });
  });
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});