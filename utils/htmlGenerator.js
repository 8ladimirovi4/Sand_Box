/**
 * Создает HTML файл для статьи
 * @param {string} title - Заголовок статьи
 * @param {string} content - Текст статьи
 * @param {string} url - URL статьи
 * @returns {string} HTML содержимое файла
 */
function createArticleHTML(title, content, url) {
    return `<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .article-container {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 {
            color: #333;
            border-bottom: 2px solid #007bff;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .content {
            color: #444;
            font-size: 16px;
        }
        .source-link {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            font-size: 14px;
            color: #666;
        }
        .source-link a {
            color: #007bff;
            text-decoration: none;
        }
        .source-link a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="article-container">
        <h1>${title}</h1>
        <div class="content">
            ${content.split('\n').map(paragraph => 
                paragraph.trim() ? `<p>${paragraph.trim()}</p>` : ''
            ).join('')}
        </div>
        <div class="source-link">
            Источник: <a href="${url}" target="_blank">${url}</a>
        </div>
    </div>
</body>
</html>`;
}

module.exports = {
    createArticleHTML
};
