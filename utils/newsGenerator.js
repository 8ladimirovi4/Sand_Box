const { fetchPage } = require('./httpClient');
const { parseLinksFromHTML } = require('./htmlParser');
const { findFreshNewsByYear } = require('./newsFilter');
const { saveAllArticles } = require('./articleSaver');

/**
 * Основная функция для генерации HTML файлов с новостными статьями
 */
async function generateNewsArticles() {
    console.log('🚀 Запуск генерации HTML файлов с новостными статьями...');
    console.log('='.repeat(80));
    
    const url = 'https://techcrunch.com/';
    
    try {
        console.log(`🔍 Получаю ссылки с: ${url}`);
        const allLinks = await fetchPage(url);
        const links = parseLinksFromHTML(allLinks);
        console.log(`📊 Всего получено ссылок: ${links.length}\n`);
        
        // Ищем свежие новости 2025 года
        console.log('📅 Ищу свежие новости 2025 года...');
        let news2025 = findFreshNewsByYear(links, '2025');
        
        if (news2025.length === 0) {
            console.log('❌ Новости 2025 года не найдены');
            
            // Попробуем найти новости других лет
            console.log('\n🔍 Проверяю наличие новостей других лет...');
            const years = ['2024', '2023', '2022'];
            
            for (const year of years) {
                const news = findFreshNewsByYear(links, year);
                if (news.length > 0) {
                    console.log(`📅 Найдено новостей ${year} года: ${news.length}`);
                    news2025 = news; // Используем найденные новости
                    break;
                }
            }
        }
        
        if (news2025.length > 0) {
            console.log(`✅ Найдено новостей: ${news2025.length}\n`);
            
            // Показываем найденные новости
            news2025.forEach((link, index) => {
                console.log(`${index + 1}. ${link.text}`);
                console.log(`   📍 ${link.href}`);
                console.log('');
            });
            
            // Сохраняем статьи в базу данных
            console.log('💾 Начинаю сохранение статей в базу данных...');
            await saveAllArticles(news2025);
            
        } else {
            console.log('❌ Не удалось найти подходящие новости для сохранения');
        }
        
    } catch (error) {
        console.error('❌ Произошла ошибка:', error.message);
        process.exit(1);
    }
}

module.exports = {
    generateNewsArticles
};
