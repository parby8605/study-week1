import { useState } from 'react'

import './App.css'

function ListItem({ children }) {
  return <li>{children}</li>
}

function UnorderedList({ children }) {
  return <ul>{children}</ul>
}

function OrderedList({ children }) {
  return <ol>{children}</ol>
}

function App() {
  const items = [
    { name: 'Aaron', age: 10, desc: '안녕하세요' },
    { name: 'Baron', age: 30, desc: '반갑습니다' },
    { name: 'Caron', age: 22, desc: '처음뵙겠습니다' },
    { name: 'Daron', age: 17, desc: '보고싶었습니다' },
  ]
  return (
    <>
      <div>
        <OrderedList>
          <ListItem>Unordered List Item 1</ListItem>
          <ListItem>Unordered List Item 2</ListItem>
          <ListItem>Unordered List Item 3</ListItem>
        </OrderedList>
        {/* ol = Ordered List */}
        <UnorderedList>
          {items.map((item, index) => (
            <ListItem key={index}>
              {item.name} | {item.age} | {item.desc}
            </ListItem>
          ))}
        </UnorderedList>
      </div>
    </>
  )
}

export default App
