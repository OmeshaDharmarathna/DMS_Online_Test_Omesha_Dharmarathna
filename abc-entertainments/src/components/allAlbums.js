import React,{useState, useEffect, Component} from 'react'
import axios from "axios";
import { Grid, Paper, Avatar,Typography, TextField, Button } from "@mui/material";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';


export default class App extends Component{
  constructor(props){
    super(props);

    this.state={
        albums:[]
    };
  }

  componentDidMount(){
    this.retrieveAlbums();
  }

  retrieveAlbums(){
    axios.get('http://localhost:8070/album/').then(res=>{
        if(res.data.success){
            this.setState({
                albums:res.data.existingAlbums
            });

            console.log(this.state.albums)
        }
    })
  }


render (){
    
    return(
       <div>
         <p>All Albums</p>
         <table >
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Title</th>
                    <th scope='col'>Artist</th>
                    <th scope='col'>Genre</th>
                    <th scope='col'>Released Date</th>
                    <th scope='col'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {this.state.albums.map((albums,index)=>(
                    <tr>
                        <th scope='row'>{index+1}</th>
                        <td>{albums.title}</td>
                        <td>{albums.artist}</td>
                        <td>{albums.genre}</td>
                        <td>{albums.releasedDate }</td>
                    </tr>
                ))}
            </tbody>
         </table>
       </div>
    )
 }
}