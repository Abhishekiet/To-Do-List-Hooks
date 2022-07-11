import { Typography , Paper , Grid , Box } from "@mui/material"

export const Headerr=(props)=>{
    const{ setArray , array , setObj , obj , setEdit ,edit } = props

    return(
        <>
        <Paper elevation={4} sx={{padding:'1%' , backgroundColor:'yellow' }} >
            <Grid item sx={12}>
                <Typography variant='h3' align='center' > To-Do List </Typography>
                <Typography variant='h5' align='right' > Abhishek Dameria </Typography>
            </Grid> 
        </Paper>

        <button onClick={ ()=>{ setObj({...obj , id:1 , name:'qw' }) ; console.log( obj ) } } > fjghf </button>
        </>
    )
}