import { Button , Typography , Stack ,Box , Grid} from '@mui/material/';

export const Material=()=>{
    return(
        <>

        <Box height={300} width='80%' mt={5} bgcolor='red' >
            <Typography variant='h5' align='center' > This Is Abhishek </Typography>
            <Grid item textAlign='center'>
                <Button variant='contained' align='center' > Click Me  </Button>
            </Grid>
        </Box>
    
        </>
    )
}