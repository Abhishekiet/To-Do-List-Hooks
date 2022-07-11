import { Grid, Box, Paper, Button } from '@mui/material'
import {Card} from './Card'

export const ShowList = (props) => {
    const { array , handleEdit ,handleDelete , Deleteall} = props
    
    const show = array.map( a=> < Card name={a.name} id={a.id} handleEdit = { ()=>{ handleEdit(a.id) } } 
                                  handleDelete = { ()=>{ handleDelete(a.id) } } /> )
    return (
        <>
            
                <Box component={Paper} elevation={7} p={3} mt={2}  >

                    <Grid item xs={12} >
                        { show }
                    </Grid>

                    <Grid item xs={12} mt={3}>
                        <Button variant='contained' color='error' fullWidth onClick={Deleteall}>
                            Delete
                        </Button>
                    </Grid>

                </Box>


        </>
    )
}