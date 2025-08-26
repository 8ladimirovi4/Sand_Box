const { JSDOM } = require('jsdom');

/**
 * Функция для парсинга HTML и получения всех ссылок
 * @param {string} html - HTML содержимое страницы
 * @returns {Array} Массив объектов с информацией о ссылках
 */
function parseLinksFromHTML(html) {
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Получаем все элементы <a> на странице
    const linkElements = document.querySelectorAll('a');
    
    // Создаем массив для хранения информации о ссылках
    const links = [];
    
    // Проходим по всем найденным ссылкам
    linkElements.forEach((link, index) => {
        const linkInfo = {
            index: index + 1,
            text: link.textContent.trim(),
            href: link.href,
            title: link.title || '',
            target: link.target || '_self',
            rel: link.rel || '',
            isExternal: link.href.startsWith('http') && !link.href.includes('techcrunch.com')
        };
        
        // Фильтруем пустые ссылки и якоря
        if (link.href && link.href !== '#' && link.href !== 'javascript:void(0)') {
            links.push(linkInfo);
        }
    });
    
    return links;
}

module.exports = {
    parseLinksFromHTML
};
