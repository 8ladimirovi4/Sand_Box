#!/usr/bin/env node

const { dbManager } = require('./utils/dbManager');

/**
 * CLI интерфейс для работы с базой данных статей
 */
class DatabaseCLI {
    constructor() {
        this.commands = {
            'list': this.listArticles.bind(this),
            'show': this.showArticle.bind(this),
            'delete': this.deleteArticle.bind(this),
            'stats': this.showStatistics.bind(this),
            'search': this.searchArticles.bind(this),
            'top': this.showTopArticles.bind(this),
            'help': this.showHelp.bind(this)
        };
    }

    /**
     * Показывает справку по командам
     */
    showHelp() {
        console.log('\n📚 Доступные команды:');
        console.log('  list                    - Показать все статьи');
        console.log('  show <id>              - Показать статью по ID');
        console.log('  delete <id>            - Удалить статью по ID');
        console.log('  stats                  - Показать статистику');
        console.log('  search <query>         - Поиск статей');
        console.log('  top [limit]            - Топ статей по количеству слов');
        console.log('  help                   - Показать эту справку');
        console.log('\nПримеры:');
        console.log('  node db-cli.js list');
        console.log('  node db-cli.js show 1');
        console.log('  node db-cli.js search "AI"');
        console.log('  node db-cli.js top 5');
    }

    /**
     * Показывает все статьи
     */
    async listArticles() {
        try {
            const articles = await dbManager.getAllArticles();
            
            if (articles.length === 0) {
                console.log('📭 В базе данных нет статей');
                return;
            }

            console.log(`\n📄 Всего статей: ${articles.length}`);
            console.log('='.repeat(80));
            
            articles.forEach(article => {
                console.log(`ID: ${article.id}`);
                console.log(`Заголовок: ${article.title}`);
                console.log(`URL: ${article.url}`);
                console.log(`Слов: ${article.word_count}`);
                console.log(`Создано: ${article.created_at}`);
                console.log('-'.repeat(80));
            });
        } catch (error) {
            console.error('❌ Ошибка получения статей:', error.message);
        }
    }

    /**
     * Показывает статью по ID
     * @param {string} id - ID статьи
     */
    async showArticle(id) {
        try {
            const articleId = parseInt(id);
            if (isNaN(articleId)) {
                console.log('❌ Неверный ID статьи');
                return;
            }

            const article = await dbManager.getArticle(articleId);
            
            if (!article) {
                console.log(`❌ Статья с ID ${articleId} не найдена`);
                return;
            }

            console.log('\n📄 Статья:');
            console.log('='.repeat(80));
            console.log(`ID: ${article.id}`);
            console.log(`Заголовок: ${article.title}`);
            console.log(`URL: ${article.url}`);
            console.log(`Слов: ${article.word_count}`);
            console.log(`Создано: ${article.created_at}`);
            console.log(`Обновлено: ${article.updated_at}`);
            console.log(`HTML файл: ${article.html_file_path}`);
            console.log('\nСодержимое:');
            console.log('-'.repeat(80));
            console.log(article.content.substring(0, 500) + (article.content.length > 500 ? '...' : ''));
        } catch (error) {
            console.error('❌ Ошибка получения статьи:', error.message);
        }
    }

    /**
     * Удаляет статью по ID
     * @param {string} id - ID статьи
     */
    async deleteArticle(id) {
        try {
            const articleId = parseInt(id);
            if (isNaN(articleId)) {
                console.log('❌ Неверный ID статьи');
                return;
            }

            const success = await dbManager.deleteArticle(articleId);
            
            if (success) {
                console.log(`✅ Статья с ID ${articleId} удалена`);
            } else {
                console.log(`❌ Статья с ID ${articleId} не найдена`);
            }
        } catch (error) {
            console.error('❌ Ошибка удаления статьи:', error.message);
        }
    }

    /**
     * Показывает статистику
     */
    async showStatistics() {
        try {
            await dbManager.getStatistics();
        } catch (error) {
            console.error('❌ Ошибка получения статистики:', error.message);
        }
    }

    /**
     * Поиск статей
     * @param {string} query - Поисковый запрос
     */
    async searchArticles(query) {
        try {
            if (!query) {
                console.log('❌ Укажите поисковый запрос');
                return;
            }

            const articles = await dbManager.searchArticles(query);
            
            if (articles.length === 0) {
                console.log(`🔍 По запросу "${query}" ничего не найдено`);
                return;
            }

            console.log(`\n🔍 Результаты поиска по запросу "${query}":`);
            console.log('='.repeat(80));
            
            articles.forEach(article => {
                console.log(`ID: ${article.id}`);
                console.log(`Заголовок: ${article.title}`);
                console.log(`URL: ${article.url}`);
                console.log(`Слов: ${article.word_count}`);
                console.log(`Создано: ${article.created_at}`);
                console.log('-'.repeat(80));
            });
        } catch (error) {
            console.error('❌ Ошибка поиска:', error.message);
        }
    }

    /**
     * Показывает топ статей по количеству слов
     * @param {string} limit - Количество статей
     */
    async showTopArticles(limit = '10') {
        try {
            const limitNum = parseInt(limit);
            if (isNaN(limitNum) || limitNum <= 0) {
                console.log('❌ Неверное количество статей');
                return;
            }

            const articles = await dbManager.getTopArticlesByWordCount(limitNum);
            
            if (articles.length === 0) {
                console.log('📭 В базе данных нет статей');
                return;
            }

            console.log(`\n📊 Топ ${articles.length} статей по количеству слов:`);
            console.log('='.repeat(80));
            
            articles.forEach((article, index) => {
                console.log(`${index + 1}. ID: ${article.id} | Слов: ${article.word_count}`);
                console.log(`   Заголовок: ${article.title}`);
                console.log(`   URL: ${article.url}`);
                console.log('-'.repeat(80));
            });
        } catch (error) {
            console.error('❌ Ошибка получения топ статей:', error.message);
        }
    }

    /**
     * Запуск CLI
     * @param {Array} args - Аргументы командной строки
     */
    async run(args) {
        const command = args[0];
        const params = args.slice(1);

        if (!command || !this.commands[command]) {
            console.log('❌ Неизвестная команда');
            this.showHelp();
            return;
        }

        try {
            await dbManager.init();
            await this.commands[command](...params);
        } catch (error) {
            console.error('❌ Критическая ошибка:', error.message);
        } finally {
            await dbManager.close();
        }
    }
}

// Запуск CLI, если файл вызван напрямую
if (require.main === module) {
    const cli = new DatabaseCLI();
    const args = process.argv.slice(2);
    cli.run(args);
}

module.exports = DatabaseCLI;
