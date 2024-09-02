export default function Item({ item, remove })
{
  return (
      <li style={{ padding: 10, borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between'}}>
        <span>{item.content} - <b>{item.name}</b></span>
        <button onClick={() => remove(item.id)}>X</button>
      </li>
    )
}