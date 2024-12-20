import React, { useState, useMemo } from "react";

const NumberList = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);

  // Вычисление суммы чисел
  const totalSum = useMemo(() => {
    console.log("Вычисляем сумму...");
    return numbers.reduce((sum, num) => sum + num, 0);
  }, [numbers]); // Пересчитываем только если numbers изменился

  const addNumber = () => {
    setNumbers([...numbers, Math.floor(Math.random() * 10)]);
  };

console.log(totalSum)
  return (
    <div>
      <h1>Список чисел</h1>
      <p>{totalSum}</p>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>

      <button onClick={addNumber}>Добавить число</button>
      <button onClick={() => setCount(count + 1)}>
        Увеличить счётчик ({count})
      </button>
    </div>
  );
};

export default NumberList;