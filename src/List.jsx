import React from 'react'
import './list.css'

const List = (props) => {
  return (
    <>
    <div className='list'>
        <li>{props.text}</li>
        <button onClick={()=>props.onSelect(props.id)}>Remove</button>
    </div>
    </>
  )
}

export default List;