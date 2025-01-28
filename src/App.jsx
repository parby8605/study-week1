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
        Password : <input type='password' ref={ref} />
      </div>
      <button onClick={changeMod}>🔓 보이기</button>
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
