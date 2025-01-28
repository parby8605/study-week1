import { useState } from 'react'

import './App.css'

function App() {
  const [age, setAge] = useState(0)
  const [valid, setValid] = useState(false /* 성년 여부 */)

  //setState 직접 값 설정
  const handleAge = (e) => {
    const inputAge = e.currentTarget.value
    setAge(inputAge)
    setValid(inputAge >= 19)
  }

  //setState 함수형 업데이트트
  const increaseAge = () => {
    setAge((prev) => prev + 1)
    setValid((prev) => Number(age) + 1 >= 19)
  }

  const decreaseAge = () => {
    setAge((prev) => prev - 1)
    setValid((prev) => Number(age) - 1 >= 19)
  }

  return (
    <>
      <input type='number' value={age} onChange={handleAge} />
      <button onClick={increaseAge}>Increase</button>
      <button onClick={decreaseAge}>Decrease</button>
      {valid ? <div>성년입니다.</div> : <div style={{ color: 'red' }}>미성년입니다.</div>}
    </>
  )
}

export default App
