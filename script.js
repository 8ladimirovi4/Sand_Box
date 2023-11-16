

// for(let i = 0; i < 100; i++){
// const block = document.createElement('div')
// block.classList = 'container'
// block.style.width = '100%'
// block.style.height = '50px'
// block.style.border = '1px solid black'
// block.style.display = 'flex'
// block.style.alignItems = 'center'

// const innerBlock = document.createElement('div')
// innerBlock.classList = 'inner'
// innerBlock.innerText = 'Давно выяснено, что при оценке дизайна и композиции'
// block.appendChild(innerBlock)
// document.body.appendChild(block)
// }

var elementsHeader = document.querySelectorAll('div[view_id*="headerlayout"]');

// Установить свойство display: block для каждого найденного элемента
elementsHeader.forEach(function(element) {
    element.style.display = 'block';
});

var elementsLayout = document.querySelectorAll('div[view_id*="layout"]');

// Установить свойство display: block для каждого найденного элемента
elementsLayout.forEach(function(element) {
    element.style.display = 'block';
});
//layout