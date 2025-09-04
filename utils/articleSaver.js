const { fetchPage } = require('./httpClient');
const { extractArticleText } = require('./articleProcessor');
const { database } = require('./database');
const { telegramBot } = require('./telegramBot');

/**
 * Сохраняет статью в базу данных
 * @param {Object} article - Объект статьи с href и text
 * @param {number} index - Индекс статьи
 * @returns {Promise<boolean>} Успешность сохранения
 */
async function saveArticle(article, index) {
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
        
        // Сохраняем в базу данных
        const articleData = {
            title: article.text,
            url: article.href,
            content: articleText,
            htmlFilePath: null // Больше не создаем HTML файлы
        };
        
        await database.saveArticle(articleData);
        
        console.log(`✅ Статья ${index + 1} сохранена в базу данных`);
        return true;
        
    } catch (error) {
        console.error(`❌ Ошибка при сохранении статьи ${index + 1}:`, error.message);
        return false;
    }
}

/**
 * Основная функция для сохранения всех статей
 * @param {Array} articles - Массив объектов статей с href и text
 * @param {boolean} sendToTelegram - Отправлять ли новости в Telegram (по умолчанию true)
 */
async function saveAllArticles(articles, sendToTelegram = true) {
    if (!articles || !Array.isArray(articles) || articles.length === 0) {
        console.log('❌ Нет статей для сохранения');
        return;
    }
    
    console.log(`🚀 Начинаю сохранение ${articles.length} статей в базу данных...`);
    
    let successCount = 0;
    let failCount = 0;
    const savedArticles = []; // Массив для хранения успешно сохраненных статей
    
    // Сохраняем каждую статью
    for (let i = 0; i < articles.length; i++) {
        const success = await saveArticle(articles[i], i);
        if (success) {
            successCount++;
            // Добавляем статью в массив для отправки в Telegram
            savedArticles.push({
                title: articles[i].text,
                url: articles[i].href,
                content: '', // Будет заполнено позже
                date: new Date().toLocaleDateString('ru-RU')
            });
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
    
    // Отправляем новости в Telegram, если есть сохраненные статьи
    if (sendToTelegram && savedArticles.length > 0) {
        console.log('\n📱 Отправляю новости в Telegram канал...');
        try {
            // Инициализируем бота
            const botInitialized = await telegramBot.initialize();
            
            if (botInitialized) {
                // Получаем полный контент статей из базы данных для отправки
                const articlesWithContent = [];
                for (const article of savedArticles) {
                    try {
                        const dbArticle = await database.getArticleByUrl(article.url);
                        if (dbArticle) {
                            articlesWithContent.push({
                                title: article.title,
                                url: article.url,
                                content: dbArticle.content,
                                date: article.date
                            });
                        }
                    } catch (error) {
                        console.error(`⚠️ Не удалось получить контент статьи "${article.title}":`, error.message);
                        // Отправляем без контента
                        articlesWithContent.push(article);
                    }
                }
                
                // Отправляем новости в Telegram
                await telegramBot.sendMultipleNews(articlesWithContent);
                console.log('✅ Новости успешно отправлены в Telegram канал');
            } else {
                console.log('⚠️ Не удалось инициализировать Telegram бота, пропускаю отправку');
            }
        } catch (error) {
            console.error('❌ Ошибка отправки новостей в Telegram:', error.message);
        } finally {
            // Закрываем соединение с ботом
            try {
                await telegramBot.close();
            } catch (closeError) {
                console.error('⚠️ Ошибка при закрытии соединения с ботом:', closeError.message);
            }
        }
    }
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

/**
 * Отправляет все статьи из базы данных в Telegram канал
 * @param {number} limit - Максимальное количество статей для отправки (по умолчанию 10)
 */
async function sendAllArticlesToTelegram(limit = 10) {
    try {
        console.log(`📱 Отправляю последние ${limit} статей в Telegram канал...`);
        
        // Инициализируем бота
        const botInitialized = await telegramBot.initialize();
        
        if (!botInitialized) {
            console.log('❌ Не удалось инициализировать Telegram бота');
            return false;
        }
        
        // Получаем статьи из базы данных
        const articles = await database.getAllArticles();
        
        if (!articles || articles.length === 0) {
            console.log('❌ Нет статей в базе данных для отправки');
            return false;
        }
        
        // Берем последние N статей
        const recentArticles = articles.slice(-limit);
        
        // Форматируем статьи для отправки
        const formattedArticles = recentArticles.map(article => ({
            title: article.title,
            url: article.url,
            content: article.content,
            date: article.created_at ? new Date(article.created_at).toLocaleDateString('ru-RU') : new Date().toLocaleDateString('ru-RU')
        }));
        
        // Отправляем новости
        await telegramBot.sendMultipleNews(formattedArticles);
        console.log('✅ Статьи успешно отправлены в Telegram канал');
        
        return true;
    } catch (error) {
        console.error('❌ Ошибка отправки статей в Telegram:', error.message);
        return false;
    } finally {
        // Закрываем соединение с ботом
        try {
            await telegramBot.close();
        } catch (closeError) {
            console.error('⚠️ Ошибка при закрытии соединения с ботом:', closeError.message);
        }
    }
}

module.exports = {
    saveArticle,
    saveAllArticles,
    getAllArticlesFromDB,
    getArticleByIdFromDB,
    deleteArticleFromDB,
    getArticlesStatistics,
    sendAllArticlesToTelegram
};
