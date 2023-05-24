import React, { useState } from "react";


function Input(props){

    const [newItem, setNewItem] = useState("")

    function handleChange(event){
        const note = event.target.value
        setNewItem(note)     
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); 
            props.onAdd(newItem)
            setNewItem("")
        }
      };

    return(
        <div className="form">
        <input onChange={handleChange} type="text" value={newItem} onKeyDown={handleKeyDown}/>

        <button onClick={()=>{
            props.onAdd(newItem)
            setNewItem("")

        }}>
            <span>{props.addSpan}</span>
        </button>
    </div>

    )
}

export default Input

 // onChange={props.onChange}
            // onKeyDown={props.onKeyDown}
            
            // value={props.value}
            // type={props.type}