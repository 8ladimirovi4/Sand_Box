// Кэширование (мемоизация)

function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    let current = cache;

    // Вложенные Map-ы по каждому аргументу (для поддержки нескольких аргументов)
    for (let arg of args) {
      if (!current.has(arg)) {
        current.set(arg, new Map());
      }
      current = current.get(arg);
    }

    // Зарезервируем ключ 'result' для хранения финального значения
    if (current.has('result')) {
      return current.get('result');
    }

    const result = fn(...args);
    current.set('result', result);
    return result;
  };
}
