
const { generateNewsArticles } = require('./utils/newsGenerator');

/**
 * Главная функция для запуска из командной строки
 */
async function main() {
    try {
        
        // Запускаем генерацию новостей
        await generateNewsArticles();
        
        console.log('\n🎉 Генерация HTML файлов завершена успешно!');
    } catch (error) {
        console.error('❌ Критическая ошибка:', error.message);
        process.exit(1);
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
