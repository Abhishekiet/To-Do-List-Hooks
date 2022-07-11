import {TextField , Grid , Button } from '@mui/material'

export const Header = (props) =>{
    const { textField , handleChange , handleAdd ,edit } = props
    return(
        <>
        <Grid item xs={10} mt={5} >
            <TextField fullWidth variant='standard' placeholder= 'Add Items In To-Do List'
            onChange={handleChange} value={textField} />
        </Grid>

        <Grid item xs={10} mt={1} >
            <Button fullWidth variant='contained' onClick={handleAdd}> { edit? 'Edit':'Add Item' } </Button>
        </Grid>
        </>
    )
}