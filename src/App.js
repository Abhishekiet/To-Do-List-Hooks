import React, { Component } from "react";
import { Grid } from '@mui/material'
import { Header } from './Components/Header'
import { ShowList } from './Components/ShowList'
import { Top } from './Components/Top'


class App extends Component{

  constructor(){
    super()
    this.state = {
      array : [] , 
      textField : '' ,
      edit : false , 
      id : ''
    }
  }

  handleChange=(e)=>{
    this.setState( {textField:e.target.value} )
  }

  handleAdd=()=>{
    if( this.state.edit === true ){ 
      const newarray = this.state.array.map( a=>{ if( a.id===this.state.id ){ return{ ...a,name:this.state.textField } } else{ return {...a} }  } )
      this.setState( {array:newarray , edit:false}  )
    }
     else{
      const item = { id:Date.now() , name:this.state.textField }
      this.setState( { array:  [ ...this.state.array , item ]  , textField:''}  )
     }
    
  }

  handleEdit=(id)=>{
    const newobj = this.state.array.find( a=> id === a.id )
    this.setState( {textField:newobj.name ,id:newobj.id ,edit:true } )
  }

  handleDelete=(id)=>{
    console.log( id )
    const newarray = this.state.array.filter( a=> id !== a.id )
    this.setState( { array: newarray } )
  }
  Deleteall=()=>{
    this.setState( {array: [] } )
  }

  render(){
    const { textField , array , object ,edit,handleDelete } = this.state
    return(
      <>
      <Grid container sx={{ justifyContent:'center' }} mt={2}>
        
      <Grid item xs={10}>
          <Top />
        </Grid>

        <Grid container item xs={10} sx={{ justifyContent:'center' }} >
          <Header textField={textField} handleChange={this.handleChange} handleAdd={this.handleAdd} edit={edit} />
        </Grid>
        
        <Grid item xs={10}>
          < ShowList array={array} handleEdit={this.handleEdit} handleDelete={this.handleDelete} Deleteall={this.Deleteall}/>
        </Grid>

      </Grid>
      </>
    )
  }
}

export default App