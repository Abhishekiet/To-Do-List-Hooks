import { useState } from "react"

export const NewHook=()=>{
    const [array , setArray] = useState([])
    const [data , setData] = useState( { name : '' , surname: '' } )

//    const handleChange=(e)=>{
//        setData( (a)=>{ return{  ...a , [e.target.name]:e.target.value  }  } )
//    }

    const handleChange=(e)=>{
        setData( { ...data , [e.target.name]:e.target.value } )
    }

    const handleClick=()=>{
        const newobj = data
        setData( {name:'' , surname:''} )
        setArray( [...array , newobj] )
        console.log( array )
    }
    return(
        <>
        
          <input name='name' value={data.name} onChange={ handleChange } />
          <input name='surname' value={data.surname} onChange={ handleChange } /> 

          <button onClick={handleClick}> Save </button>
          
          {
              array.map( a=> <h1>{ a.name} </h1> )
          }
        </> 
    )
}

// <button onClick={ ()=>{  setCount( ()=>{ return count + 1 } )  } } } > Click Me </button>
