import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
console.log(1)

useEffect(() => {
  console.log(2)
  return () => {
    console.log(3)
  }
}, [count])

useEffect(() => {
  console.log(4)
  setCount((count) => count + 1)
}, [])

  return <Child count={count}/>
  
}

function Child({count}) {
  useEffect(() => {
console.log(5)
return () => {
  console.log(6)
}
  },[count])
  return null
}

export default App

//1 5 2 4 6 3 5 2

//console.log(5) срабатывает первым, потому что после рендере UseEffect-ы начинают срабатывать от дочерних компонентов
//После срабатываени UseEffect отработанный UseEffect очищается (коллбэк в return)