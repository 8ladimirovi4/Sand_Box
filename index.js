
const { generateNewsArticles } = require('./utils/newsGenerator');
const { database } = require('./utils/database');

/**
 * Главная функция для запуска из командной строки
 */
async function main() {
    try {
        console.log('🚀 Запуск приложения с поддержкой SQLite...');
        console.log('='.repeat(60));
        
        // Инициализируем базу данных
        console.log('📊 Инициализация базы данных...');
        await database.init();
        
        // Запускаем генерацию новостей
        await generateNewsArticles();
        
        console.log('\n🎉 Генерация HTML файлов завершена успешно!');
        
        // Показываем статистику
        console.log('\n📈 Статистика базы данных:');
        const stats = await database.getStatistics();
        if (stats) {
            console.log(`   Всего статей в БД: ${stats.total_articles || 0}`);
            console.log(`   Общее количество слов: ${stats.total_words || 0}`);
            console.log(`   Среднее количество слов на статью: ${Math.round(stats.avg_words_per_article || 0)}`);
        }
        
    } catch (error) {
        console.error('❌ Критическая ошибка:', error.message);
        process.exit(1);
    } finally {
        // Закрываем подключение к базе данных
        try {
            await database.close();
        } catch (closeError) {
            console.error('⚠️  Ошибка при закрытии БД:', closeError.message);
        }
    }
}

// Запуск основной функции, если файл запущен напрямую
if (require.main === module) {
    main();
}

// Экспорт функции main для использования в других модулях
module.exports = {
    main
};
