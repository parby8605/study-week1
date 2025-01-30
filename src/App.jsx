import { forwardRef, useRef, useState } from 'react'

import './App.css'

//validation 포함된 폼 컴포넌트
// eslint-disable-next-line react/display-name
const ValidForm = forwardRef(({ title, isRequired = false, length = null }, ref) => {
  const [requiredValidation, setRequiredValidation] = useState(false)
  const [lengthValidation, setLengthValidation] = useState(false)

  return (
    <div>
      {title} :{' '}
      <input
        ref={ref} // 올바르게 ref 전달
        onChange={(e) => {
          if (isRequired) setRequiredValidation(e.currentTarget.value.length === 0)
          if (length) setLengthValidation(e.currentTarget.value.length > length)
        }}
      />
      {requiredValidation && <div style={{ color: 'red' }}>{title}은 필수 입력값입니다.</div>}
      {lengthValidation && (
        <div style={{ color: 'red' }}>
          {title}은 {length}글자 이하여야합니다.
        </div>
      )}
    </div>
  )
})

function App() {
  const userInfo = {
    name: useRef(),
    desc: useRef(),
    mail: useRef(),
  }

  const submitInfo = () => {
    console.log({
      name: userInfo?.name?.current?.value,
      desc: userInfo?.desc?.current?.value,
      mail: userInfo?.mail?.current?.value,
    })
  }
  return (
    <>
      <ValidForm title='이름' ref={userInfo.name} isRequired></ValidForm>
      <ValidForm title='설명' ref={userInfo.desc} isRequired length={10}></ValidForm>
      <ValidForm title='메일' ref={userInfo.mail} isRequired></ValidForm>
      <button onClick={submitInfo}>Submit</button>
    </>
  )
}

export default App
