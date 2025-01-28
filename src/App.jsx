import { useState } from 'react'

import './App.css'

function App() {
  const FEE_ADULT = 20000
  const FEE_NON_ADULT = 10000
  const [age, setAge] = useState(0)

  //setState 직접 값 설정
  const handleAge = (e) => {
    const inputAge = Number(e.currentTarget.value)
    setAge(inputAge)
  }

  return (
    <>
      <input type='number' value={age} onChange={handleAge} />
      {age >= 19 ? <div>성년입니다.</div> : <div style={{ color: 'red' }}>미성년입니다.</div>}
      <div>{age >= 19 ? FEE_ADULT : FEE_NON_ADULT}원</div>
    </>
  )
}

export default App
