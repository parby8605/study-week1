import { createContext, useContext, useState } from 'react'

import './App.css'

function LC() {
  console.log('- A.4. Fourth Component')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Fourth Component
    </div>
  )
}

/*
 * Consumer는 자신만의 독립적인 렌더링 범위(scope)를 만든다
 * Consumer의 자식으로 전달되는 함수는 부모 컴포넌트의 렌더링 사이클과 분리되어 실행
 * 이러한 이유때문에 디버깅이 어려움움
 */
function TC() {
  console.log('- A.3. Third Component')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Third Component :{' '}
      <CreatedContext.Consumer>{({ count }) => <>{count}</>}</CreatedContext.Consumer>
      <LC />
    </div>
  )
}

function SC() {
  console.log('- A.2. Second Component')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Second Component
      <TC />
    </div>
  )
}

function FC() {
  console.log('- A.1. First Component')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      First Component
      <SC />
    </div>
  )
}

function ButtonComponent() {
  console.log('- B. Button Component')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Button Component
      <div>
        <CreatedContext.Consumer>
          {({ setCount }) => <button onClick={() => setCount((prev) => prev + 1)}>증가</button>}
        </CreatedContext.Consumer>
      </div>
    </div>
  )
}

function NonContextComponent() {
  const { count } = useContext(CreatedContext)
  console.log('- C. Non-Context Component')
  return (
    <div className='component-box' style={{ padding: 10 }}>
      Non-Context Component : {count}
    </div>
  )
}

const defaultValue = -10
const CreatedContext = createContext({ count: defaultValue, setCount: (state) => {} })

function CreatedContextProvider({ children }) {
  const [count, setCount] = useState(0)

  return <CreatedContext.Provider value={{ count, setCount }}>{children}</CreatedContext.Provider>
}

function App() {
  return (
    <div
      className='section-box'
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        padding: 10,
      }}
    >
      <CreatedContextProvider>
        <FC />
        <ButtonComponent />
      </CreatedContextProvider>
      <NonContextComponent />
    </div>
  )
}

export default App
