import { Grid, Box, Paper, Button, Typography} from '@mui/material'

export const Card = (props) => {
    const { name , id  , handleEdit ,handleDelete} = props
    return (
        <>
            <Paper sx={{ padding:'1%' , marginTop:'3%' }} elevation={2}>
                <Grid container>
                    <Grid xs={6} >
                        <Typography variant='h5' > {name} </Typography>
                    </Grid>
                    
                    <Grid xs={6} textAlign='right' >

                            <Button variant='contained' color='success' onClick={handleEdit} > Edit </Button>
                            <Button variant='contained' color='error' sx={{ marginLeft: '1%' }} onClick={handleDelete} > Delete </Button>

                    </Grid>
                </Grid>

            </Paper>
        </>
    )
}