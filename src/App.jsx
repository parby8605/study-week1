import { useState } from 'react'

import './App.css'

function DisplayCount({ count }) {
  return (
    <>
      <div style={{ marginBottom: 10 }}>{count}</div>
    </>
  )
}
//단일버튼 컴포넌트트
function CountButton({ onClick, children }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
    </>
  )
}

function IncreaseButton({ onClick }) {
  return (
    <button
      style={{ display: 'flex', flexDirection: 'row', gap: 10 }}
      onClick={() => onClick((prev) => prev + 1)}
    >
      증가
    </button>
  )
}

function DecreaseButton({ onClick }) {
  return <button onClick={() => onClick((prev) => prev - 1)}>감소</button>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DisplayCount count={count}></DisplayCount>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center' }}>
        <CountButton
          onClick={() => {
            setCount((previousCount) => previousCount + 1)
          }}
        >
          증가
        </CountButton>
        <CountButton
          onClick={() => {
            setCount((previousCount) => previousCount - 1)
          }}
        >
          감소
        </CountButton>
      </div>
      <div>-----------증가/감소 컴포넌트 분리된 버튼---------------</div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 10, justifyContent: 'center' }}>
        <IncreaseButton onClick={setCount} />
        <DecreaseButton onClick={setCount} />
      </div>
    </>
  )
}

export default App
