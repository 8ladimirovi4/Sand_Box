const { database } = require('./database');
const { 
    getAllArticlesFromDB, 
    getArticleByIdFromDB, 
    deleteArticleFromDB, 
    getArticlesStatistics 
} = require('./articleSaver');

/**
 * Модуль для управления базой данных статей
 */
class DatabaseManager {
    
    /**
     * Инициализация базы данных
     * @returns {Promise<void>}
     */
    async init() {
        await database.init();
    }

    /**
     * Получение всех статей
     * @returns {Promise<Array>} Массив статей
     */
    async getAllArticles() {
        return await getAllArticlesFromDB();
    }

    /**
     * Получение статьи по ID
     * @param {number} id - ID статьи
     * @returns {Promise<Object>} Объект статьи
     */
    async getArticle(id) {
        return await getArticleByIdFromDB(id);
    }

    /**
     * Удаление статьи по ID
     * @param {number} id - ID статьи
     * @returns {Promise<boolean>} Успешность удаления
     */
    async deleteArticle(id) {
        return await deleteArticleFromDB(id);
    }

    /**
     * Получение статистики
     * @returns {Promise<Object>} Объект со статистикой
     */
    async getStatistics() {
        return await getArticlesStatistics();
    }

    /**
     * Поиск статей по заголовку
     * @param {string} searchTerm - Поисковый запрос
     * @returns {Promise<Array>} Массив найденных статей
     */
    async searchArticles(searchTerm) {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT * FROM articles 
                WHERE title LIKE ? OR content LIKE ?
                ORDER BY created_at DESC
            `;
            const searchPattern = `%${searchTerm}%`;
            
            database.db.all(sql, [searchPattern, searchPattern], (err, rows) => {
                if (err) {
                    console.error('❌ Ошибка поиска статей:', err.message);
                    reject(err);
                } else {
                    console.log(`🔍 Найдено статей по запросу "${searchTerm}": ${rows.length}`);
                    resolve(rows);
                }
            });
        });
    }

    /**
     * Получение статей за определенный период
     * @param {string} startDate - Начальная дата (YYYY-MM-DD)
     * @param {string} endDate - Конечная дата (YYYY-MM-DD)
     * @returns {Promise<Array>} Массив статей
     */
    async getArticlesByDateRange(startDate, endDate) {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT * FROM articles 
                WHERE DATE(created_at) BETWEEN ? AND ?
                ORDER BY created_at DESC
            `;
            
            database.db.all(sql, [startDate, endDate], (err, rows) => {
                if (err) {
                    console.error('❌ Ошибка получения статей по датам:', err.message);
                    reject(err);
                } else {
                    console.log(`📅 Найдено статей за период ${startDate} - ${endDate}: ${rows.length}`);
                    resolve(rows);
                }
            });
        });
    }

    /**
     * Получение топ статей по количеству слов
     * @param {number} limit - Количество статей
     * @returns {Promise<Array>} Массив статей
     */
    async getTopArticlesByWordCount(limit = 10) {
        return new Promise((resolve, reject) => {
            const sql = `
                SELECT * FROM articles 
                ORDER BY word_count DESC 
                LIMIT ?
            `;
            
            database.db.all(sql, [limit], (err, rows) => {
                if (err) {
                    console.error('❌ Ошибка получения топ статей:', err.message);
                    reject(err);
                } else {
                    console.log(`📊 Получено топ ${rows.length} статей по количеству слов`);
                    resolve(rows);
                }
            });
        });
    }

    /**
     * Обновление статьи
     * @param {number} id - ID статьи
     * @param {Object} updates - Объект с обновлениями
     * @returns {Promise<boolean>} Успешность обновления
     */
    async updateArticle(id, updates) {
        return new Promise((resolve, reject) => {
            const allowedFields = ['title', 'content', 'word_count'];
            const updateFields = [];
            const values = [];

            for (const [key, value] of Object.entries(updates)) {
                if (allowedFields.includes(key)) {
                    updateFields.push(`${key} = ?`);
                    values.push(value);
                }
            }

            if (updateFields.length === 0) {
                reject(new Error('Нет допустимых полей для обновления'));
                return;
            }

            values.push(id);
            const sql = `
                UPDATE articles 
                SET ${updateFields.join(', ')}, updated_at = CURRENT_TIMESTAMP
                WHERE id = ?
            `;

            database.db.run(sql, values, function(err) {
                if (err) {
                    console.error('❌ Ошибка обновления статьи:', err.message);
                    reject(err);
                } else {
                    console.log(`✅ Статья с ID ${id} обновлена`);
                    resolve(this.changes > 0);
                }
            });
        });
    }

    /**
     * Закрытие подключения к базе данных
     * @returns {Promise<void>}
     */
    async close() {
        await database.close();
    }
}

// Создаем единственный экземпляр менеджера базы данных
const dbManager = new DatabaseManager();

module.exports = {
    dbManager,
    DatabaseManager
};
