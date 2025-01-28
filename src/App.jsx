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

const useSingularForm = () => {
  const ref = useRef(null)

  const [valid, setValid] = useState({
    maximum: true,
    minimum: true,
    required: true,
  })

  const passwordValidate = (input) => {
    const changed = produce(valid, (draft) => {
      draft.maximum = input.length <= 10
      draft.minimum = input.length > 5
      draft.required = input.length > 0
    })
    setValid(changed)
  }

  const error = {}
  if (valid.maximum === false) error.maximum = '비밀번호는 10글자를 넘을 수 없습니다.'
  if (valid.minimum === false) error.minimum = '비밀번호는 5글자를 넘어야합니다.'
  if (valid.required === false) error.required = '비밀번호를 입력해주세요.'

  return { ref, passwordValidate, error }
}

function PasswordInput({ inputRef, error, validate }) {
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
      <div style={{ color: 'red' }}>{error.maximum}</div>
      <div style={{ color: 'red' }}>{error.minimum}</div>
      <div style={{ color: 'red' }}>{error.required}</div>
    </div>
  )
}

function App() {
  const nameRef = useRef(null)
  const {
    ref: passwordRef,
    passwordValidate: passwordValidate,
    error: passwordError,
  } = useSingularForm()

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
      <PasswordInput inputRef={passwordRef} error={passwordError} validate={passwordValidate} />
      <button onClick={registration}>회원가입 완료</button>
    </section>
  )
}

export default App
