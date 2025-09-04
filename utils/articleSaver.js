const fs = require('fs');
const path = require('path');
const { fetchPage } = require('./httpClient');
const { extractArticleText } = require('./articleProcessor');
const { createArticleHTML } = require('./htmlGenerator');
const { ensureNewsFolder } = require('./folderManager');
const { database } = require('./database');

/**
 * Сохраняет статью в HTML файл и базу данных
 * @param {string} newsPath - Путь к папке news
 * @param {Object} article - Объект статьи с href и text
 * @param {number} index - Индекс статьи
 * @returns {Promise<boolean>} Успешность сохранения
 */
async function saveArticle(newsPath, article, index) {
    try {
        console.log(`📄 Обрабатываю статью ${index + 1}: ${article.text.substring(0, 50)}...`);
        
        // Проверяем, не существует ли уже статья в базе данных
        const existingArticle = await database.getArticleByUrl(article.href);
        if (existingArticle) {
            console.log(`⚠️  Статья ${index + 1} уже существует в базе данных, пропускаю`);
            return true;
        }
        
        // Получаем содержимое страницы
        const html = await fetchPage(article.href);
        
        // Извлекаем текст статьи
        const articleText = extractArticleText(html);
        
        if (!articleText || articleText.length < 100) {
            console.log(`⚠️  Статья ${index + 1} слишком короткая или пустая, пропускаю`);
            return false;
        }
        
        // Создаем безопасное имя файла
        const safeTitle = article.text
            .replace(/[<>:"/\\|?*]/g, '')
            .substring(0, 50)
            .trim();
        
        const fileName = `${(index + 1).toString().padStart(2, '0')}_${safeTitle}.html`;
        const filePath = path.join(newsPath, fileName);
        
        // Создаем HTML содержимое
        const htmlContent = createArticleHTML(article.text, articleText, article.href);
        
        // Сохраняем файл
        fs.writeFileSync(filePath, htmlContent, 'utf8');
        
        // Сохраняем в базу данных
        const articleData = {
            title: article.text,
            url: article.href,
            content: articleText,
            htmlFilePath: filePath
        };
        
        await database.saveArticle(articleData);
        
        console.log(`✅ Статья ${index + 1} сохранена: ${fileName} (в БД и файл)`);
        return true;
        
    } catch (error) {
        console.error(`❌ Ошибка при сохранении статьи ${index + 1}:`, error.message);
        return false;
    }
}

/**
 * Основная функция для сохранения всех статей
 * @param {Array} articles - Массив объектов статей с href и text
 * @param {string} folderName - Название папки (по умолчанию 'news')
 */
async function saveAllArticles(articles, folderName = 'news') {
    if (!articles || !Array.isArray(articles) || articles.length === 0) {
        console.log('❌ Нет статей для сохранения');
        return;
    }
    
    console.log(`🚀 Начинаю сохранение ${articles.length} статей...`);
    
    // Создаем папку
    const newsPath = ensureNewsFolder(folderName);
    
    let successCount = 0;
    let failCount = 0;
    
    // Сохраняем каждую статью
    for (let i = 0; i < articles.length; i++) {
        const success = await saveArticle(newsPath, articles[i], i);
        if (success) {
            successCount++;
        } else {
            failCount++;
        }
        
        // Небольшая задержка между запросами
        if (i < articles.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    
    console.log('\n📊 Результаты сохранения:');
    console.log(`✅ Успешно сохранено: ${successCount}`);
    console.log(`❌ Ошибок: ${failCount}`);
    console.log(`📁 Файлы сохранены в папку: ${newsPath}`);
}

/**
 * Получает все статьи из базы данных
 * @returns {Promise<Array>} Массив статей
 */
async function getAllArticlesFromDB() {
    try {
        const articles = await database.getAllArticles();
        console.log(`📊 Получено ${articles.length} статей из базы данных`);
        return articles;
    } catch (error) {
        console.error('❌ Ошибка получения статей из БД:', error.message);
        return [];
    }
}

/**
 * Получает статью по ID из базы данных
 * @param {number} id - ID статьи
 * @returns {Promise<Object>} Объект статьи
 */
async function getArticleByIdFromDB(id) {
    try {
        const article = await database.getArticleById(id);
        if (article) {
            console.log(`📄 Статья найдена: ${article.title}`);
        } else {
            console.log(`❌ Статья с ID ${id} не найдена`);
        }
        return article;
    } catch (error) {
        console.error('❌ Ошибка получения статьи из БД:', error.message);
        return null;
    }
}

/**
 * Удаляет статью по ID из базы данных
 * @param {number} id - ID статьи
 * @returns {Promise<boolean>} Успешность удаления
 */
async function deleteArticleFromDB(id) {
    try {
        const success = await database.deleteArticle(id);
        if (success) {
            console.log(`✅ Статья с ID ${id} удалена из базы данных`);
        } else {
            console.log(`❌ Статья с ID ${id} не найдена для удаления`);
        }
        return success;
    } catch (error) {
        console.error('❌ Ошибка удаления статьи из БД:', error.message);
        return false;
    }
}

/**
 * Получает статистику по статьям
 * @returns {Promise<Object>} Объект со статистикой
 */
async function getArticlesStatistics() {
    try {
        const stats = await database.getStatistics();
        console.log('📊 Статистика по статьям:');
        console.log(`   Всего статей: ${stats.total_articles || 0}`);
        console.log(`   Общее количество слов: ${stats.total_words || 0}`);
        console.log(`   Среднее количество слов на статью: ${Math.round(stats.avg_words_per_article || 0)}`);
        console.log(`   Первая статья: ${stats.first_article_date || 'Нет данных'}`);
        console.log(`   Последняя статья: ${stats.last_article_date || 'Нет данных'}`);
        return stats;
    } catch (error) {
        console.error('❌ Ошибка получения статистики:', error.message);
        return null;
    }
}

module.exports = {
    saveArticle,
    saveAllArticles,
    getAllArticlesFromDB,
    getArticleByIdFromDB,
    deleteArticleFromDB,
    getArticlesStatistics
};
