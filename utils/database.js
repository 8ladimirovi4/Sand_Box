const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

/**
 * Модуль для работы с базой данных SQLite
 */
class Database {
    constructor() {
        this.db = null;
        this.dbPath = path.join(__dirname, '..', 'news_articles.db');
    }

    /**
     * Инициализация подключения к базе данных
     * @returns {Promise<void>}
     */
    async init() {
        return new Promise((resolve, reject) => {
            this.db = new sqlite3.Database(this.dbPath, (err) => {
                if (err) {
                    console.error('❌ Ошибка подключения к базе данных:', err.message);
                    reject(err);
                } else {
                    console.log('✅ Подключение к базе данных SQLite установлено');
                    this.createTables().then(resolve).catch(reject);
                }
            });
        });
    }

    /**
     * Создание таблиц в базе данных
     * @returns {Promise<void>}
     */
    async createTables() {
        return new Promise((resolve, reject) => {
            const createArticlesTable = `
                CREATE TABLE IF NOT EXISTS articles (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    title TEXT NOT NULL,
                    url TEXT UNIQUE NOT NULL,
                    content TEXT NOT NULL,
                    html_file_path TEXT,
                    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                    word_count INTEGER DEFAULT 0,
                    source TEXT DEFAULT 'TechCrunch'
                )
            `;

            const createMetadataTable = `
                CREATE TABLE IF NOT EXISTS metadata (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    key TEXT UNIQUE NOT NULL,
                    value TEXT NOT NULL,
                    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
                )
            `;

            this.db.serialize(() => {
                this.db.run(createArticlesTable, (err) => {
                    if (err) {
                        console.error('❌ Ошибка создания таблицы articles:', err.message);
                        reject(err);
                    } else {
                        console.log('✅ Таблица articles создана/проверена');
                    }
                });

                this.db.run(createMetadataTable, (err) => {
                    if (err) {
                        console.error('❌ Ошибка создания таблицы metadata:', err.message);
                        reject(err);
                    } else {
                        console.log('✅ Таблица metadata создана/проверена');
                        resolve();
                    }
                });
            });
        });
    }

    /**
     * Сохранение статьи в базу данных
     * @param {Object} article - Объект статьи
     * @param {string} article.title - Заголовок статьи
     * @param {string} article.url - URL статьи
     * @param {string} article.content - Содержимое статьи
     * @param {string} article.htmlFilePath - Путь к HTML файлу
     * @returns {Promise<number>} ID сохраненной статьи
     */
    async saveArticle(article) {
        return new Promise((resolve, reject) => {
            const { title, url, content, htmlFilePath } = article;
            const wordCount = content ? content.split(/\s+/).length : 0;

            const sql = `
                INSERT OR REPLACE INTO articles 
                (title, url, content, html_file_path, word_count, updated_at)
                VALUES (?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
            `;

            this.db.run(sql, [title, url, content, htmlFilePath, wordCount], function(err) {
                if (err) {
                    console.error('❌ Ошибка сохранения статьи:', err.message);
                    reject(err);
                } else {
                    console.log(`✅ Статья сохранена в БД с ID: ${this.lastID}`);
                    resolve(this.lastID);
                }
            });
        });
    }

    /**
     * Получение всех статей из базы данных
     * @returns {Promise<Array>} Массив статей
     */
    async getAllArticles() {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM articles ORDER BY created_at DESC';
            
            this.db.all(sql, [], (err, rows) => {
                if (err) {
                    console.error('❌ Ошибка получения статей:', err.message);
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

    /**
     * Получение статьи по ID
     * @param {number} id - ID статьи
     * @returns {Promise<Object>} Объект статьи
     */
    async getArticleById(id) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM articles WHERE id = ?';
            
            this.db.get(sql, [id], (err, row) => {
                if (err) {
                    console.error('❌ Ошибка получения статьи:', err.message);
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }

    /**
     * Получение статьи по URL
     * @param {string} url - URL статьи
     * @returns {Promise<Object>} Объект статьи
     */
    async getArticleByUrl(url) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM articles WHERE url = ?';
            
            this.db.get(sql, [url], (err, row) => {
                if (err) {
                    console.error('❌ Ошибка получения статьи по URL:', err.message);
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }

    /**
     * Удаление статьи по ID
     * @param {number} id - ID статьи
     * @returns {Promise<boolean>} Успешность удаления
     */
    async deleteArticle(id) {
        return new Promise((resolve, reject) => {
            const sql = 'DELETE FROM articles WHERE id = ?';
            
            this.db.run(sql, [id], function(err) {
                if (err) {
                    console.error('❌ Ошибка удаления статьи:', err.message);
                    reject(err);
                } else {
                    console.log(`✅ Статья с ID ${id} удалена`);
                    resolve(this.changes > 0);
                }
            });
        });
    }

    /**
     * Получение статистики по статьям
     * @returns {Promise<Object>} Объект со статистикой
     */
    async getStatistics() {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT 
                    COUNT(*) as total_articles,
                    SUM(word_count) as total_words,
                    AVG(word_count) as avg_words_per_article,
                    MIN(created_at) as first_article_date,
                    MAX(created_at) as last_article_date
                FROM articles
            `;
            
            this.db.get(sql, [], (err, row) => {
                if (err) {
                    console.error('❌ Ошибка получения статистики:', err.message);
                    reject(err);
                } else {
                    resolve(row);
                }
            });
        });
    }

    /**
     * Сохранение метаданных
     * @param {string} key - Ключ
     * @param {string} value - Значение
     * @returns {Promise<void>}
     */
    async saveMetadata(key, value) {
        return new Promise((resolve, reject) => {
            const sql = `
                INSERT OR REPLACE INTO metadata (key, value, updated_at)
                VALUES (?, ?, CURRENT_TIMESTAMP)
            `;
            
            this.db.run(sql, [key, value], (err) => {
                if (err) {
                    console.error('❌ Ошибка сохранения метаданных:', err.message);
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    /**
     * Получение метаданных
     * @param {string} key - Ключ
     * @returns {Promise<string>} Значение
     */
    async getMetadata(key) {
        return new Promise((resolve, reject) => {
            const sql = 'SELECT value FROM metadata WHERE key = ?';
            
            this.db.get(sql, [key], (err, row) => {
                if (err) {
                    console.error('❌ Ошибка получения метаданных:', err.message);
                    reject(err);
                } else {
                    resolve(row ? row.value : null);
                }
            });
        });
    }

    /**
     * Закрытие подключения к базе данных
     * @returns {Promise<void>}
     */
    async close() {
        return new Promise((resolve, reject) => {
            if (this.db) {
                this.db.close((err) => {
                    if (err) {
                        console.error('❌ Ошибка закрытия базы данных:', err.message);
                        reject(err);
                    } else {
                        console.log('✅ Подключение к базе данных закрыто');
                        resolve();
                    }
                });
            } else {
                resolve();
            }
        });
    }
}

// Создаем единственный экземпляр базы данных
const database = new Database();

module.exports = {
    database,
    Database
};
