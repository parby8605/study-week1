import { useRef, useState } from 'react'

import './App.css'

function App() {
  const [valid, setValid] = useState(false /* 성년 여부 */)
  const ageRef = useRef()

  return (
    <>
      <input
        type='number'
        ref={ageRef}
        onChange={(e) => {
          setValid(Number(e.target.value) >= 19)
        }}
      />
      {valid ? <div>성년입니다.</div> : <div style={{ color: 'red' }}>미성년입니다.</div>}
    </>
  )
}

export default App
