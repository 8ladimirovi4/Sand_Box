

function findCommonParentsByClass(className) {
    const elements = document.querySelectorAll(`.${className}`);
    
    // Проверяем, что найдены хотя бы два дочерних элемента
    if (elements.length < 2) {
        return [];
    }

    // Получаем родителя первого дочернего элемента
    let commonParents = getParents(elements[0]);

    // Итерируем через остальные дочерние элементы
    for (let i = 1; i < elements.length; i++) {
        // Получаем родителя текущего дочернего элемента
        const parents = getParents(elements[i]);

        // Фильтруем общих родителей
        commonParents = commonParents.filter(parent => parents.includes(parent));

        // Если общих родителей не осталось, выходим из цикла
        if (commonParents.length === 0) {
            break;
        }
    }

    return commonParents;
}

function getParents(element) {
    const parents = [];
    
    let parent = element.parentNode;
    
    while (parent) {
        parents.push(parent);
        parent = parent.parentNode;
    }

    return parents;
}

// Пример использования:
const commonParents = findCommonParentsByClass('webix_cell');
console.log(commonParents);