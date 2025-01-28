import { useRef, useState } from 'react'
import './App.css'

function App() {
  const nameRef = useRef()

  const [requiredValid, setRequiredValid] = useState(true)
  const [lengthValid, setLengthValid] = useState(true)
  return (
    <>
      <div>
        <p>Name : </p>
        <input
          ref={nameRef}
          onChange={(e) => {
            setRequiredValid(e.currentTarget.value.length !== 0)
            setLengthValid(e.currentTarget.value.length <= 10)
          }}
        ></input>
      </div>
      {requiredValid || <div style={{ color: 'red' }}>이름은 필수 입력값입니다.</div>}
      {lengthValid || <div style={{ color: 'red' }}>이름의 길이는 10글자 이하여야 합니다.</div>}
    </>
  )
}

export default App
