import './App.css';
import { useState } from 'react';
import List from './List';

function App() {
    const [task, setTask] = useState("");
    const [items,setItems] = useState([]);

      
    const inputTask = (e) => {
        setTask(e.target.value);
    }
  
    //Add a Task to List
    const AddTask = () =>{
          setItems([...items,task])
          setTask('')
    }

    //Remove the Task from List
    const RemoveTask = (id) =>{
       setItems((item)=>{
        return item.filter((element,i)=>{
                return i!==id;
        })
       })
       alert("Task Removed");
    }

  return (
    <div className="App">
      <div className='box'>
        <h1>Todo List</h1>
        <input className='input-box' type='text' value={task} placeholder='Add a New Task' onChange={inputTask}/>
        <button className='add-button' onClick={AddTask}>Add</button>
        <ol>
          {items.map( (item, i)=>{
            //index of array is not recommend to use as a key
              return <List key={i} id={i} text={item} onSelect={RemoveTask}/>
          })}
        </ol>
      </div>
     
    </div>
  );
}

export default App;
