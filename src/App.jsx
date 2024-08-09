import { useState } from 'react'

import List from './List.jsx'
import Item from './Item.jsx'

export default function App()
{
  const [data, setData] = useState([
    { id: 1, content: 'Hello, World', name: 'Alice'},
    { id: 2, content: 'React is Fun! OMG', name: 'Liam'},
    { id: 3, content: 'Yay, Interesting', name: 'Bob'},
  ])

  const remove = id => {
    setData(data.filter(item => item.id !== id))
  }

  return (
    <div style={{ maxWidth: 600, margin: '20px auto' }}>
      <h1>Yaycha</h1>
      <List>
        {data.map( item => <Item item={item} remove={remove}></Item>)}
      </List>
    </div>
  )
}