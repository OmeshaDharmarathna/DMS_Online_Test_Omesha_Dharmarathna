import React from "react";
import {AppBar, Toolbar,Typography,Stack,Button} from "@mui/material"

//this contains the navigation bar of the system
function Header(){
    return(
        <AppBar position='static'>
            <Toolbar>
               
               <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                    ABC Entertainments
               </Typography>
               <Stack direction='row' spacing={2}>
                   <Button color='inherit' href="/add">Add Album</Button>
                   <Button color='inherit' href="/albums">Get Album</Button>
                   <Button color='inherit' href="/edit/:id">Update Album</Button>
                   <Button color='inherit' href="/delete/:id">Delete Album</Button>
               </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header;