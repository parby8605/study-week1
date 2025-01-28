import { useRef, useState } from 'react'

import './App.css'
import { produce } from 'immer'

function UsernameInput({ nameRef }) {
  return (
    <>
      <div>
        Username: <input ref={nameRef} />
      </div>
    </>
  )
}

function PasswordInput({ inputRef, valid, validate }) {
  const changeMod = (e) => {
    if (inputRef.current.type === 'password') {
      inputRef.current.type = 'text'
      e.currentTarget.innerText = '🔒 감추기'
    } else if (inputRef.current.type === 'text') {
      inputRef.current.type = 'password'
      e.currentTarget.innerText = '🔓 보이기'
    }
  }
  return (
    <div>
      <div>
        Password :
        <input type='password' ref={inputRef} onChange={(e) => validate(e.target.value)} />
      </div>
      <button onClick={changeMod}>🔓 보이기</button>
      {valid.maximum || <div style={{ color: 'red' }}>비밀번호는 10글자를 넘을 수 없습니다.</div>}
      {valid.minimum || <div style={{ color: 'red' }}>비밀번호는 5글자를 넘어야합니다.</div>}
      {valid.required || <div style={{ color: 'red' }}>비밀번호를 입력해주세요.</div>}
    </div>
  )
}

function App() {
  const [valid, setValid] = useState({
    maximum: true,
    minimum: true,
    required: true,
  })
  const nameRef = useRef(null)
  const passwordRef = useRef(null)

  const passwordValidate = (input) => {
    const changed = produce(valid, (draft) => {
      draft.maximum = input.length <= 10
      draft.minimum = input.length > 5
      draft.required = input.length > 0
    })
    setValid(changed)
  }

  const registration = () => {
    const request = {
      username: nameRef.current?.value,
      password: passwordRef.current?.value,
    }
    passwordValidate(request.password)
    console.log(request)
  }

  return (
    <section style={{ textAlign: 'start', width: 400 }}>
      <UsernameInput nameRef={nameRef} />
      <PasswordInput inputRef={passwordRef} valid={valid} validate={passwordValidate} />
      <button onClick={registration}>회원가입 완료</button>
    </section>
  )
}

export default App
