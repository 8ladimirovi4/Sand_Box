const { JSDOM } = require('jsdom');

/**
 * Извлекает основной текст статьи из HTML, убирая служебную информацию
 * @param {string} html - HTML содержимое страницы
 * @returns {string} Очищенный текст статьи
 */
function extractArticleText(html) {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Удаляем ненужные элементы
    const elementsToRemove = [
        'header', 'footer', 'nav', 'aside', 'script', 'style',
        '.advertisement', '.ads', '.sidebar', '.comments', '.social-share',
        '.breadcrumb', '.pagination', '.related-posts', '.author-bio'
    ];
    
    elementsToRemove.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.remove());
    });
    
    // Ищем основной контент статьи
    let articleContent = '';
    
    // Попытка найти основной контент по различным селекторам
    const contentSelectors = [
        'article',
        '.post-content',
        '.entry-content',
        '.article-content',
        '.story-content',
        '.content',
        'main',
        '.main-content'
    ];
    
    let contentElement = null;
    for (const selector of contentSelectors) {
        contentElement = document.querySelector(selector);
        if (contentElement) break;
    }
    
    if (contentElement) {
        // Если найден основной контент, извлекаем текст из него
        articleContent = contentElement.textContent;
    } else {
        // Если не найден, берем весь body, но убираем лишнее
        const body = document.body;
        if (body) {
            // Убираем элементы навигации и другие служебные
            const navElements = body.querySelectorAll('nav, .navigation, .menu, .header, .footer');
            navElements.forEach(el => el.remove());
            articleContent = body.textContent;
        }
    }
    
    // Очищаем текст от лишних пробелов и переносов строк
    return articleContent
        .replace(/\s+/g, ' ')
        .replace(/\n\s*\n/g, '\n')
        .trim();
}

module.exports = {
    extractArticleText
};
