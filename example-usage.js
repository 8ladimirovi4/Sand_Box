#!/usr/bin/env node

const { dbManager } = require('./utils/dbManager');

/**
 * Пример использования API базы данных
 */
async function exampleUsage() {
    try {
        console.log('🚀 Пример использования API базы данных');
        console.log('='.repeat(50));
        
        // Инициализируем базу данных
        await dbManager.init();
        
        // Получаем статистику
        console.log('\n📊 Статистика:');
        await dbManager.getStatistics();
        
        // Получаем все статьи
        console.log('\n📄 Все статьи:');
        const articles = await dbManager.getAllArticles();
        console.log(`Найдено статей: ${articles.length}`);
        
        // Если есть статьи, показываем первую
        if (articles.length > 0) {
            console.log('\n📖 Первая статья:');
            const firstArticle = articles[0];
            console.log(`ID: ${firstArticle.id}`);
            console.log(`Заголовок: ${firstArticle.title}`);
            console.log(`URL: ${firstArticle.url}`);
            console.log(`Слов: ${firstArticle.word_count}`);
            console.log(`Создано: ${firstArticle.created_at}`);
        }
        
        // Поиск статей (если есть)
        if (articles.length > 0) {
            console.log('\n🔍 Поиск статей:');
            const searchResults = await dbManager.searchArticles('tech');
            console.log(`Найдено по запросу "tech": ${searchResults.length}`);
        }
        
        // Топ статей
        console.log('\n📈 Топ статей:');
        const topArticles = await dbManager.getTopArticlesByWordCount(3);
        console.log(`Топ ${topArticles.length} статей по количеству слов:`);
        topArticles.forEach((article, index) => {
            console.log(`${index + 1}. ${article.title} (${article.word_count} слов)`);
        });
        
    } catch (error) {
        console.error('❌ Ошибка:', error.message);
    } finally {
        await dbManager.close();
    }
}

// Запуск примера, если файл вызван напрямую
if (require.main === module) {
    exampleUsage();
}

module.exports = { exampleUsage };
