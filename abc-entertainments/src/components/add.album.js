import React,{useState} from "react";
import { Grid, Paper, Avatar,Typography, TextField, Button } from "@mui/material";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import axios from "axios";



//This is responsible for adding an album to the db
 function AddAlbum(){

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [genre, setGenre] = useState("");
    const [releasedDate, setReleasedDate] = useState("");

    function sendData(e){
        e.preventDefault();
       
        const newAlbum = {
            title,
            artist,
            genre,
            releasedDate
        }
        
        axios.post("http://localhost:8070/album/add",newAlbum).then(()=>{
            alert("Album Added")
            setTitle("");
            setArtist("");
            setGenre("");
            setReleasedDate("");

        }).catch((err)=>{
            alert(err)
        })
    }



 const paperStyle={padding:'30px 20px',width:300, margin:'20px auto'}
 const avatarStyle={backgroundColor:'#1bbd7e'}
    return(
        <Grid >
            <Paper elevation={20} style={paperStyle}>

                <Grid align='center'>
                      <Avatar style={avatarStyle}>
                        <AddCircleRoundedIcon/>
                      </Avatar>
                
                <h2>Add Album</h2>
                <Typography variant='caption'>Fill this to upload an Album</Typography>
                </Grid>

              <form onSubmit={sendData}>
                 <TextField fullWidth label='Title' placeholder="Enter the title" inputMode="text" id="title" 
                 onChange={(e)=>{
                     setTitle(e.target.value);

                 }}/>
                 <TextField fullWidth label='Artist' placeholder="Enter the Artist Name" inputMode="text" id="artist"
                  onChange={(e)=>{
                    setArtist(e.target.value);

                  <br></br>  
                    
                }}/>
                 <TextField fullWidth label='Genre' placeholder="Enter the Genre" inputMode="text" id="genre"
                  onChange={(e)=>{
                    setGenre(e.target.value);
                    
                }}/>
                 <TextField fullWidth label='Added Date' placeholder="Enter the Date" inputMode="text" id="date"
                  onChange={(e)=>{
                    setReleasedDate(e.target.value);
                    
                }}/>
                 <Button type='submit' variant='contained' color='primary'>
                    Add Album
                 </Button>
              </form>  



            </Paper>
        </Grid>
    )
}

export default  AddAlbum;







