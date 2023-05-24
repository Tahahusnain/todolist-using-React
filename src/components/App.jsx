import React, { useState } from "react";
import Heading from "./Heading";
import Input from "./Input";
import TodoItem from "./TodoItem";



function App(){

    const [item, setItem] = useState([])

    function Additem(newItem){
      setItem( (prevItem)=>{
              return[
                ...prevItem,
                newItem
              ]
        })
    }
      const deleteItem = (id)=>{
        console.log(id);
        setItem((prevItem)=>{
         return  prevItem.filter((item, index)=>{
              return index !==id
          })
        })
      }

    return(
        <div className="container">
          
            <Heading/>
    
              <Input 
                onAdd={Additem}
                addSpan="Add"
            />
                   
            <div>
                <ul>
                    {item.map((todoItem,index) => 
                      <TodoItem key={index} id={index} list={todoItem} onChecked={deleteItem} /> 
                      )}
                </ul>
            </div>
        </div>  
    )
}

export default App