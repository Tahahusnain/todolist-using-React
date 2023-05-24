import React  from 'react'

export default function TodoItem(props) {

  
    const {keyId , list, id} = props 
    return(
        <div  onClick={()=>{
            props.onChecked(props.id)
        }} >

        <li key={keyId} style={{cursor: 'pointer' }} >  {list} </li>

        </div>
    )

}


// const [lineThrough, setLineThrough] = useState(false)

    // const handleClick=()=>{
    //     //if previous line thorugh is tru it will be false else vice versa
    //     setLineThrough((prevLineThrough) => {
    //         // console.log(prevLineThrough);
    //         return !prevLineThrough
    //     });
    // }
    // style={{textDecoration: lineThrough ? "line-through" : 'none', cursor: 'pointer' }} 

//     return(
//       let listItems = props.item.map((todoItem, index)=>{
//         <li key={index}> {todoItem} </li>
//   })
//     )