import { createContext, useContext, useState } from 'react'
import './App.css'
import { createPortal } from 'react-dom'

const ModalContext = createContext({ show: (content) => {}, close: () => {} })

function ModalContextProvier({ children }) {
  const [modal, setModal] = useState({ open: false, content: <></> })

  function show(content) {
    setModal({ open: true, content })
  }

  function close() {
    setModal({ open: false, content: <></> })
  }

  return (
    <ModalContext.Provider value={{ show, close }}>
      {children}
      {modal.open &&
        createPortal(
          <dialog open>
            {modal.content}
            <button onClick={() => close()}>닫기</button>
          </dialog>,
          document.body,
        )}
    </ModalContext.Provider>
  )
}

function Modal1Button() {
  const { show } = useContext(ModalContext)
  return <button onClick={() => show(<h3>Modal 1</h3>)}>Open Modal1</button>
}
function Modal2Button() {
  const { show } = useContext(ModalContext)
  return <button onClick={() => show(<h3>Modal 2</h3>)}>Open Modal2</button>
}
function Modal3Button() {
  const { show } = useContext(ModalContext)
  return <button onClick={() => show(<h3>Modal 3</h3>)}>Open Modal3</button>
}

function App() {
  return (
    <>
      <ModalContextProvier>
        <Modal1Button />
        <Modal2Button />
        <Modal3Button />
      </ModalContextProvier>
    </>
  )
}

export default App
