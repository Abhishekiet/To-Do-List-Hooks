import { useState } from "react"

export const Hook=()=>{
    const [obj , setObj] = useState( {name:'' , ph:'' , password:''  } )

    const handleChange=(e)=>{
        setObj( (a)=>{ return{ ...a ,[e.target.name]:e.target.value } } )
    }

    return(
        <>
        
        <input onChange={ handleChange } value={obj.name} name ='name' />
        <input onChange={ handleChange } value={obj.ph} name ='ph'/>
        <input onChange={ handleChange } value={obj.password} name ='password'/>

        <button onClick={()=>{ console.log( obj.name, obj.ph , obj.password ) }  }> Click Me </button>

        
        </>
    )
}
