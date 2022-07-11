import { Consumer } from "../Context"

const CompFunn=(props)=>{
    return(
        <>
        <h1> This is Functional comp </h1>
        <Consumer>
            {
                (a)=> <h1> {a} </h1>
            }
        </Consumer>
        </>
    )
}

export default CompFunn