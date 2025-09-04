const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

/**
 * Класс для работы с Telegram ботом
 */
class TelegramBotManager {
    constructor() {
        this.bot = null;
        this.channelId = null;
        this.isInitialized = false;
    }

    /**
     * Инициализация бота
     */
    async initialize() {
        try {
            const token = process.env.TELEGRAM_BOT_TOKEN;
            const channelId = process.env.TELEGRAM_CHANNEL_ID;

            if (!token) {
                throw new Error('TELEGRAM_BOT_TOKEN не найден в переменных окружения');
            }

            if (!channelId) {
                throw new Error('TELEGRAM_CHANNEL_ID не найден в переменных окружения');
            }

            this.bot = new TelegramBot(token, { polling: false });
            this.channelId = channelId;
            this.isInitialized = true;

            // Проверяем, что бот работает
            const botInfo = await this.bot.getMe();
            console.log(`✅ Telegram бот инициализирован: @${botInfo.username}`);

            return true;
        } catch (error) {
            console.error('❌ Ошибка инициализации Telegram бота:', error.message);
            this.isInitialized = false;
            return false;
        }
    }

    /**
     * Отправка текстового сообщения в канал
     * @param {string} text - Текст сообщения
     * @param {Object} options - Дополнительные опции
     */
    async sendMessage(text, options = {}) {
        if (!this.isInitialized) {
            throw new Error('Бот не инициализирован. Вызовите initialize() сначала.');
        }

        try {
            const messageOptions = {
                parse_mode: 'HTML',
                disable_web_page_preview: false,
                ...options
            };

            const result = await this.bot.sendMessage(this.channelId, text, messageOptions);
            console.log(`📤 Сообщение отправлено в канал ${this.channelId}`);
            return result;
        } catch (error) {
            console.error('❌ Ошибка отправки сообщения:', error.message);
            throw error;
        }
    }

    /**
     * Отправка новостной статьи в канал
     * @param {Object} article - Объект статьи
     */
    async sendNewsArticle(article) {
        if (!this.isInitialized) {
            throw new Error('Бот не инициализирован. Вызовите initialize() сначала.');
        }

        try {
            // Форматируем сообщение для Telegram
            const message = this.formatNewsMessage(article);
            
            // Отправляем сообщение
            const result = await this.sendMessage(message, {
                disable_web_page_preview: false
            });

            console.log(`📰 Новость "${article.title}" отправлена в канал`);
            return result;
        } catch (error) {
            console.error(`❌ Ошибка отправки новости "${article.title}":`, error.message);
            throw error;
        }
    }

    /**
     * Форматирование новостного сообщения для Telegram
     * @param {Object} article - Объект статьи
     */
    formatNewsMessage(article) {
        const { title, url, content, date } = article;
        
        // Ограничиваем длину контента для Telegram (максимум 4096 символов)
        let message = `<b>📰 ${title}</b>\n\n`;
        
        if (content) {
            // Берем первые 2000 символов контента
            const shortContent = content.length > 2000 ? content.substring(0, 2000) + '...' : content;
            message += `${shortContent}\n\n`;
        }
        
        if (url) {
            message += `🔗 <a href="${url}">Читать полностью</a>\n`;
        }
        
        if (date) {
            message += `📅 ${date}`;
        }

        // Telegram ограничивает сообщения 4096 символами
        if (message.length > 4096) {
            message = message.substring(0, 4090) + '...';
        }

        return message;
    }

    /**
     * Отправка нескольких новостей в канал
     * @param {Array} articles - Массив статей
     */
    async sendMultipleNews(articles) {
        if (!this.isInitialized) {
            throw new Error('Бот не инициализирован. Вызовите initialize() сначала.');
        }

        console.log(`📤 Начинаю отправку ${articles.length} новостей в канал...`);
        
        const results = [];
        let successCount = 0;
        let errorCount = 0;

        for (let i = 0; i < articles.length; i++) {
            const article = articles[i];
            try {
                console.log(`📰 Отправляю новость ${i + 1}/${articles.length}: "${article.title}"`);
                
                const result = await this.sendNewsArticle(article);
                results.push({ success: true, article, result });
                successCount++;

                // Небольшая задержка между сообщениями, чтобы не превысить лимиты API
                if (i < articles.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
            } catch (error) {
                console.error(`❌ Ошибка отправки новости "${article.title}":`, error.message);
                results.push({ success: false, article, error: error.message });
                errorCount++;
            }
        }

        console.log(`📊 Отправка завершена: ${successCount} успешно, ${errorCount} с ошибками`);
        return results;
    }

    /**
     * Проверка статуса бота
     */
    async getBotStatus() {
        if (!this.isInitialized) {
            return { initialized: false, error: 'Бот не инициализирован' };
        }

        try {
            const botInfo = await this.bot.getMe();
            return {
                initialized: true,
                username: botInfo.username,
                first_name: botInfo.first_name,
                channel_id: this.channelId
            };
        } catch (error) {
            return {
                initialized: false,
                error: error.message
            };
        }
    }

    /**
     * Закрытие соединения с ботом
     */
    async close() {
        if (this.bot) {
            try {
                await this.bot.close();
                console.log('🔌 Соединение с Telegram ботом закрыто');
            } catch (error) {
                console.error('⚠️ Ошибка при закрытии соединения с ботом:', error.message);
            }
        }
    }
}

// Создаем единственный экземпляр бота
const telegramBot = new TelegramBotManager();

module.exports = {
    telegramBot,
    TelegramBotManager
};
