const fs = require('fs');
const path = require('path');
const { fetchPage } = require('./httpClient');
const { extractArticleText } = require('./articleProcessor');
const { createArticleHTML } = require('./htmlGenerator');
const { ensureNewsFolder } = require('./folderManager');

/**
 * Сохраняет статью в HTML файл
 * @param {string} newsPath - Путь к папке news
 * @param {Object} article - Объект статьи с href и text
 * @param {number} index - Индекс статьи
 * @returns {Promise<boolean>} Успешность сохранения
 */
async function saveArticle(newsPath, article, index) {
    try {
        console.log(`📄 Обрабатываю статью ${index + 1}: ${article.text.substring(0, 50)}...`);
        
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
        
        console.log(`✅ Статья ${index + 1} сохранена: ${fileName}`);
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

module.exports = {
    saveArticle,
    saveAllArticles
};
