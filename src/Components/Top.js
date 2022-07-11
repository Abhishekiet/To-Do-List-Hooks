import { Grid , Paper, Typography } from '@mui/material' 

export const Top=()=>{
    return(
        <>
        <Paper sx={{ backgroundColor:'yellow', padding:'1%' }} elevation={5} >
            <Grid xs={12}>
                <Typography variant='h3' align='center'> To-Do List </Typography>
                <Typography variant='h6' align='right'> Abhishek Dameria </Typography>
            </Grid>
        </Paper>
        </>
    )
}