/**
 * Фильтрует ссылки по году в URL для поиска свежих новостей
 * @param {Array} links - Массив объектов ссылок
 * @param {string} year - Год для поиска (например, "2025")
 * @returns {Array} Отфильтрованный массив ссылок с новостями указанного года
 */
function filterLinksByYear(links, year) {
    if (!year || !links || !Array.isArray(links)) {
        return [];
    }
    
    // Создаем паттерн для поиска года в URL
    const yearPattern = `/${year}/`;
    
    return links.filter(link => {
        if (!link.href) return false;
        return link.href.includes(yearPattern);
    });
}

/**
 * Функция для поиска свежих новостей по году
 * @param {Array} links - Массив объектов ссылок
 * @param {string} year - Год для поиска
 * @returns {Array} Массив ссылок с новостями указанного года
 */
function findFreshNewsByYear(links, year) {
    return filterLinksByYear(links, year);
}

module.exports = {
    filterLinksByYear,
    findFreshNewsByYear
};
