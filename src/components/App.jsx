import React, { useState } from "react";
import Heading from "./Heading";
function App(){

    const [newItem, setNewItem] = useState("")
    const [item, setItem] = useState([])

    function handleChange(event){
        const note = event.target.value
        setNewItem(note)    
    }

    function Additem(){
        setItem( (prevItem)=>{
              return[
                ...prevItem,
                newItem
              ]
        })
        setNewItem("")
    }

    return(
        <div className="container">
          
            <Heading/>
           <div className="form">
              <input onChange={handleChange} type="text" name="note" value={newItem}/>
            
              <button onClick={Additem}>
                <span>Add</span>
             </button>
            
            </div>
            <div>
                <ul>
                    {item.map(todoItem => <li>{todoItem}</li> )}
                </ul>
            </div>
        </div>  
    )
}

export default App