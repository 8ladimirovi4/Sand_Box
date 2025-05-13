
//Анаграмма — это слово, полученное перестановкой букв другого слова.
//Значит, если у двух слов одинаковый набор и количество букв, то они анаграммы.

//1. Сравнить длинну строк
//2. Отсортировать строки 
//3. Сравнить строки

const str1 = 'кот'
const str2 = 'ток'

const isAnagrams = (word1, word2) => {
    if(word1.length !== word2.length) return false

    const normalize = (word) => {
        return word.toLowerCase().split('').sort().join('')
    }
   return normalize(word1) === normalize(word2)
}

isAnagrams(str1, str2)