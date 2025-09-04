# API Документация

## Обзор

Приложение теперь поддерживает SQLite базу данных для хранения и управления новостными статьями. Все статьи сохраняются как в HTML файлы, так и в базу данных.

## Структура базы данных

### Таблица `articles`

| Поле             | Тип                  | Описание                                    |
| ---------------- | -------------------- | ------------------------------------------- |
| `id`             | INTEGER PRIMARY KEY  | Уникальный идентификатор статьи             |
| `title`          | TEXT NOT NULL        | Заголовок статьи                            |
| `url`            | TEXT UNIQUE NOT NULL | URL статьи (уникальный)                     |
| `content`        | TEXT NOT NULL        | Полное содержимое статьи                    |
| `html_file_path` | TEXT                 | Путь к HTML файлу                           |
| `created_at`     | DATETIME             | Дата создания записи                        |
| `updated_at`     | DATETIME             | Дата последнего обновления                  |
| `word_count`     | INTEGER              | Количество слов в статье                    |
| `source`         | TEXT                 | Источник статьи (по умолчанию 'TechCrunch') |

### Таблица `metadata`

| Поле         | Тип                  | Описание                   |
| ------------ | -------------------- | -------------------------- |
| `id`         | INTEGER PRIMARY KEY  | Уникальный идентификатор   |
| `key`        | TEXT UNIQUE NOT NULL | Ключ метаданных            |
| `value`      | TEXT NOT NULL        | Значение метаданных        |
| `updated_at` | DATETIME             | Дата последнего обновления |

## API Модули

### `utils/database.js`

Основной класс для работы с базой данных SQLite.

#### Методы

- `init()` - Инициализация подключения и создание таблиц
- `saveArticle(article)` - Сохранение статьи в БД
- `getAllArticles()` - Получение всех статей
- `getArticleById(id)` - Получение статьи по ID
- `getArticleByUrl(url)` - Получение статьи по URL
- `deleteArticle(id)` - Удаление статьи по ID
- `getStatistics()` - Получение статистики
- `saveMetadata(key, value)` - Сохранение метаданных
- `getMetadata(key)` - Получение метаданных
- `close()` - Закрытие подключения

### `utils/dbManager.js`

Менеджер для расширенной работы с базой данных.

#### Методы

- `init()` - Инициализация
- `getAllArticles()` - Получение всех статей
- `getArticle(id)` - Получение статьи по ID
- `deleteArticle(id)` - Удаление статьи
- `getStatistics()` - Получение статистики
- `searchArticles(searchTerm)` - Поиск статей
- `getArticlesByDateRange(startDate, endDate)` - Получение статей за период
- `getTopArticlesByWordCount(limit)` - Топ статей по количеству слов
- `updateArticle(id, updates)` - Обновление статьи
- `close()` - Закрытие подключения

### `utils/articleSaver.js`

Расширенный модуль для сохранения статей с поддержкой БД.

#### Новые методы

- `getAllArticlesFromDB()` - Получение всех статей из БД
- `getArticleByIdFromDB(id)` - Получение статьи по ID из БД
- `deleteArticleFromDB(id)` - Удаление статьи из БД
- `getArticlesStatistics()` - Получение статистики

## CLI Команды

### Основные команды

```bash
# Показать все статьи
npm run db list

# Показать статью по ID
npm run db show <id>

# Поиск статей
npm run db search "<query>"

# Показать статистику
npm run db stats

# Топ статей по количеству слов
npm run db top [limit]

# Удалить статью
npm run db delete <id>

# Показать справку
npm run db help
```

### Примеры использования

```bash
# Показать все статьи
npm run db list

# Показать статью с ID 1
npm run db show 1

# Найти статьи содержащие "AI"
npm run db search "AI"

# Показать топ 5 статей по количеству слов
npm run db top 5

# Удалить статью с ID 3
npm run db delete 3
```

## Примеры кода

### Базовое использование

```javascript
const { database } = require('./utils/database');

async function example() {
  // Инициализация
  await database.init();

  // Сохранение статьи
  const article = {
    title: 'Заголовок статьи',
    url: 'https://example.com/article',
    content: 'Содержимое статьи...',
    htmlFilePath: '/path/to/file.html',
  };

  const articleId = await database.saveArticle(article);
  console.log(`Статья сохранена с ID: ${articleId}`);

  // Получение всех статей
  const articles = await database.getAllArticles();
  console.log(`Всего статей: ${articles.length}`);

  // Закрытие подключения
  await database.close();
}
```

### Расширенное использование

```javascript
const { dbManager } = require('./utils/dbManager');

async function advancedExample() {
  await dbManager.init();

  // Поиск статей
  const searchResults = await dbManager.searchArticles('технологии');
  console.log(`Найдено статей: ${searchResults.length}`);

  // Получение статей за период
  const articles = await dbManager.getArticlesByDateRange(
    '2025-01-01',
    '2025-12-31'
  );
  console.log(`Статей за 2025 год: ${articles.length}`);

  // Топ статей
  const topArticles = await dbManager.getTopArticlesByWordCount(10);
  topArticles.forEach((article, index) => {
    console.log(`${index + 1}. ${article.title} (${article.word_count} слов)`);
  });

  await dbManager.close();
}
```

## Особенности

### Избежание дублирования

Приложение автоматически проверяет, существует ли уже статья с таким URL в базе данных, и пропускает дубликаты.

### Автоматический подсчет слов

Количество слов в статье автоматически подсчитывается и сохраняется в поле `word_count`.

### Метаданные

Система поддерживает хранение произвольных метаданных в таблице `metadata`.

### Статистика

Доступна детальная статистика:

- Общее количество статей
- Общее количество слов
- Среднее количество слов на статью
- Дата первой и последней статьи

## Файлы

- `news_articles.db` - Файл базы данных SQLite
- `utils/database.js` - Основной модуль БД
- `utils/dbManager.js` - Менеджер БД
- `db-cli.js` - CLI интерфейс
- `example-usage.js` - Примеры использования
