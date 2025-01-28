import { useRef, useState } from 'react'

import './App.css'

function UsernameInput() {
  return (
    <>
      <div>
        Username: <input />
      </div>
    </>
  )
}

function PasswordInput() {
  const [maximumValid, setMaximumValid] = useState(true)
  const [minimumValid, setMinimumValid] = useState(true)
  const [requiredValid, setRequiredValid] = useState(true)
  const ref = useRef(null)

  const changeMod = (e) => {
    if (ref.current.type === 'password') {
      ref.current.type = 'text'
      e.currentTarget.innerText = '🔒 감추기'
    } else if (ref.current.type === 'text') {
      ref.current.type = 'password'
      e.currentTarget.innerText = '🔓 보이기'
    }
  }
  return (
    <>
      <div>
        Password :{' '}
        <input
          type='password'
          ref={ref}
          onChange={(e) => {
            const input = e.currentTarget.value
            setMaximumValid(input.length <= 10)
            setMinimumValid(input.length > 5)
            setRequiredValid(input.length > 0)
          }}
        />
      </div>
      <button onClick={changeMod}>🔓 보이기</button>
      {maximumValid || <div style={{ color: 'red' }}>비밀번호는 10글자를 넘을 수 없습니다.</div>}
      {minimumValid || <div style={{ color: 'red' }}>비밀번호는 5글자를 넘어야합니다.</div>}
      {requiredValid || <div style={{ color: 'red' }}>비밀번호를 입력해주세요.</div>}
    </>
  )
}

function App() {
  function registration() {}

  return (
    <section style={{ textAlign: 'start', width: 400 }}>
      <UsernameInput />
      <PasswordInput />
      <button onClick={registration}>회원가입 완료</button>
    </section>
  )
}

export default App
