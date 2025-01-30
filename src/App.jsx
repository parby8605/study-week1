import { useState } from 'react'

import './App.css'

function ListItem({ name, age, desc, handleDesc }) {
  const [isActive, setIsActive] = useState(false)
  const [newDesc, setNewDesc] = useState(desc)

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleDesc(newDesc)
      setIsActive(false)
    }
  }
  return (
    <>
      <li
        onClick={() => {
          setIsActive((prev) => !prev)
        }}
      >
        {name} | {age} |{' '}
        {isActive ? (
          <>
            <input
              value={newDesc}
              onChange={(e) => {
                setNewDesc(e.target.value)
              }}
              onClick={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
              onKeyDown={handleKeyDown}
            ></input>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleDesc(newDesc)

                setIsActive((previous) => !previous)
              }}
            >
              확인
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleDesc(desc)
                setNewDesc(desc)
                setIsActive((previous) => !previous)
              }}
            >
              취소
            </button>
          </>
        ) : (
          desc
        )}
      </li>
    </>
  )
}

function UnorderedList({ children }) {
  return <ul>{children}</ul>
}

function OrderedList({ children }) {
  return <ol>{children}</ol>
}

function App() {
  const [items, setItems] = useState([
    { name: 'Aaron', age: 10, desc: '안녕하세요' },
    { name: 'Baron', age: 30, desc: '반갑습니다' },
    { name: 'Caron', age: 22, desc: '처음뵙겠습니다' },
    { name: 'Daron', age: 17, desc: '보고싶었습니다' },
  ])

  const handleDesc = (index, newDesc) => {
    const updateDesc = [...items]
    updateDesc[index].desc = newDesc
    setItems(updateDesc)
  }
  return (
    <>
      <div>
        <OrderedList>
          <li>Unordered List Item 1</li>
          <li>Unordered List Item 2</li>
          <li>Unordered List Item 3</li>
        </OrderedList>
        {/* ol = Ordered List */}
        <UnorderedList>
          {items.map((item, index) => (
            <ListItem
              key={index}
              name={item.name}
              age={item.age}
              desc={item.desc}
              handleDesc={(desc) => handleDesc(index, desc)}
            ></ListItem>
          ))}
        </UnorderedList>
      </div>
    </>
  )
}

export default App
